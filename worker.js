/**
 * HARSHITGPT CLOUDFLARE WORKER PROXY
 * 
 * 1. Go to dash.cloudflare.com -> Workers & Pages -> Create Application -> Create Worker.
 * 2. Name it `harshitgpt-proxy` (or whatever you like) and click Deploy.
 * 3. Click "Edit Code" and paste this entire file in, replacing the default code.
 * 4. Click "Deploy" in the top right.
 * 5. Go back to your Worker's settings -> Settings -> Variables.
 * 6. Add a variable named `GEMINI_API_KEY` and paste your Google Gemini API key as the value. Encrypt it.
 * 7. Copy your Worker URL and paste it into `harshitgpt.html`.
 */

export default {
    async fetch(request, env, ctx) {
        // Handle CORS Preflight requests
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            });
        }

        // Only allow POST requests for the chat
        if (request.method !== 'POST') {
            return new Response('Method not allowed', { status: 405 });
        }

        const API_KEY = env.GEMINI_API_KEY;
        if (!API_KEY) {
            return new Response(
                JSON.stringify({ error: 'API key not configured in Cloudflare environment' }), 
                { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
            );
        }

        // Forward the request to Google's Gemini API
        const targetUrl = new URL(request.url);
        targetUrl.hostname = 'generativelanguage.googleapis.com';
        targetUrl.searchParams.set('key', API_KEY); // Securely inject the API key

        // Reconstruct the request for Google
        const newRequest = new Request(targetUrl.toString(), {
            method: request.method,
            headers: request.headers,
            body: request.body
        });

        // The 'alt=sse' in the URL tells Google to stream the response.
        const response = await fetch(newRequest);
        
        // Return the streaming response back to the browser, adding CORS headers
        const newResponse = new Response(response.body, response);
        newResponse.headers.set('Access-Control-Allow-Origin', '*');
        
        return newResponse;
    }
};
