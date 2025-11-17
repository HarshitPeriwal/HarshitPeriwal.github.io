const courseData = {
    en: {
        title: "AI Literacy Course",
        topics: [
            {
                title: "Introduction to Data and Kaggle",
                video: "https://drive.google.com/file/d/1dgSn9eth6oPQoGglXZqdPVnPVawL66U6/preview",
                questions: [
                    { q: "According to the lesson, what is the most crucial element needed to teach an AI, similar to showing examples to a child?", a: ["A powerful computer", "A large and diverse dataset of examples", "A textbook with definitions", "Complex algorithms"], correct: 1 },
                    { q: "What is the primary role of the website Kaggle, as explained in the video?", a: ["A tool for building AI models directly", "A social media platform for data scientists", "An online library for finding and sharing high-quality datasets", "A search engine for finding pictures of cats and dogs"], correct: 2 },
                    { q: "When downloading a dataset for a machine learning project, why is the 'train' folder specifically chosen for teaching the AI?", a: ["It contains the highest resolution images.", "It is the only folder that is downloadable.", "It contains the set of images designated specifically for the model to learn from.", "It is always the smallest folder and downloads quickly."], correct: 2 }
                ],
                links: [
                    { text: "Kaggle", url: "https://www.kaggle.com/" },
                    { text: "What is a dataset?", url: "https://en.wikipedia.org/wiki/Data_set" }
                ]
            },
            {
                title: "Create your own Ai using TeachAble Machines",
                video: "https://drive.google.com/file/d/1RT0HLUeGmwVFpI4gh_lTQ3AmM01BTusP/preview",
                questions: [
                    { q: "What is the name of the free, web-based tool from Google used to create the image classifier in this lesson?", a: ["Google AI Platform", "TensorFlow Studio", "Teachable Machine", "Kaggle Cloud"], correct: 2 },
                    { q: "Why is it important to provide a wide variety of images (different breeds, angles, lighting) for each class?", a: ["To make the training process go faster.", "To help the model generalize and recognize the subject in new, unseen situations.", "Because the tool requires at least 10 different types of images.", "To make the final model larger in file size."], correct: 1 },
                    { q: "The step where the AI analyzes the provided images to learn the patterns that differentiate the classes is called:", a: ["Uploading", "Previewing", "Training", "Classifying"], correct: 2 },
                    { q: "In the 'Preview' panel, which input option allows you to test the model by dragging and dropping an image from your computer?", a: ["Webcam", "File", "Google Drive", "URL"], correct: 1 },
                    { q: "When shown an image with both a cat and a dog, the model predicted 'Dog' with high confidence. What does this demonstrate?", a: ["The model has a built-in preference for dogs.", "The model is broken and needs to be deleted.", "The model can only choose one class and makes its best prediction based on the features it recognizes most strongly.", "The model is designed to always ignore cats if a dog is present."], correct: 2 }
                ],
                links: [
                    { text: "Teachable Machine", url: "https://teachablemachine.withgoogle.com/" }
                ]
            },
            {
                title: "Use Gamma Unlimited times to Create PPTs",
                video: "https://drive.google.com/file/d/1LnNVJuO0O7kCo9X_V2QrENJmp5yxtVKY/preview",
                questions: [
                    { q: "What is the primary function of Gamma.app as demonstrated in the tutorial?", a: ["To edit videos professionally", "To create AI-generated presentations and documents", "To design complex 3D models", "To manage social media accounts"], correct: 1 },
                    { q: "According to the video, what method is used to get more free credits on Gamma.app repeatedly?", a: ["Watching advertisements", "Referring the app to friends", "Creating new accounts using a temporary email service", "Completing daily tasks within the app"], correct: 2 },
                    { q: "How many free credits does Gamma provide for each new account that is created?", a: ["100", "250", "400", "500"], correct: 2 },
                    { q: "In the tutorial, which tool was used to generate a structured outline for the presentation content before pasting it into Gamma?", a: ["Google Search", "Wikipedia", "Microsoft Word", "ChatGPT"], correct: 3 },
                    { q: "After the presentation is generated in Gamma, what are the two main export options mentioned for downloading the file?", a: ["Export to MP4 and MP3", "Export to PDF and PowerPoint", "Export to a Word document and an image file", "Export to a website link and a ZIP file"], correct: 1 }
                ],
                links: [
                    { text: "Gamma.app", url: "https://gamma.app/" },
                    { text: "Temp Mail", url: "https://tempmail.la/" }
                ]
            },
            {
                title: "Sketch to Image using FreePik",
                video: "https://drive.google.com/file/d/1259mYoBKnWmi6lPybJZgApxY8x0770de/preview",
                questions: [
                    { q: "What is the primary function of the 'Imagination' slider in Freepik's Sketch to Image tool?", a: ["To change the color of the drawing tools.", "To control how much creative freedom the AI has to interpret the sketch.", "To increase the size of the canvas.", "To undo the last action."], correct: 1 },
                    { q: "How can you use a pre-existing drawing or line art in the tool?", a: ["By typing the file name in the prompt box.", "By using the 'Start from scratch' button.", "By clicking the 'Upload Image' icon and selecting a file.", "By pasting the image directly onto the canvas."], correct: 2 },
                    { q: "In the video, how was the black and white dragon sketch turned into a green dragon breathing fire?", a: ["By changing the color of the brush to green and drawing flames.", "By only using the 'Imagination' slider.", "By editing the text prompt to include 'Green Dragon' and 'with fire coming out of its mouth'.", "By uploading a separate image of fire."], correct: 2 }
                ],
                links: [
                    { text: "FreePik Sketch to Image", url: "https://www.freepik.com/ai/sketch-to-image" }
                ]
            }
        ]
    },
    hi: {
        title: "एआई साक्षरता पाठ्यक्रम",
        topics: [
            {
                title: "डेटा और कैगल का परिचय",
                video: "https://drive.google.com/file/d/1N3oM1IxgTlhqj75Z6NbAMnnNdeRKv6uC/preview",
                questions: [
                    { q: "पाठ के अनुसार, AI को सिखाने के लिए सबसे महत्वपूर्ण घटक क्या है, जो एक बच्चे को उदाहरण दिखाने के समान है?", a: ["एक शक्तिशाली कंप्यूटर", "उदाहरणों का एक बड़ा और विविध डेटासेट", "परिभाषाओं वाली एक पाठ्यपुस्तक", "जटिल एल्गोरिदम"], correct: 1 },
                    { q: "वीडियो में बताए अनुसार, कैगल (Kaggle) वेबसाइट की मुख्य भूमिका क्या है?", a: ["सीधे AI मॉडल बनाने का एक टूल", "डेटा वैज्ञानिकों के लिए एक सोशल मीडिया प्लेटफॉर्म", "उच्च-गुणवत्ता वाले डेटासेट खोजने और साझा करने के लिए एक ऑनलाइन लाइब्रेरी", "बिल्लियों और कुत्तों की तस्वीरें खोजने के लिए एक सर्च इंजन"], correct: 2 },
                    { q: "मशीन लर्निंग प्रोजेक्ट के लिए डेटासेट डाउनलोड करते समय, AI को सिखाने के लिए विशेष रूप से 'ट्रेन' ('train') फ़ोल्डर क्यों चुना जाता है?", a: ["इसमें उच्चतम रिज़ॉल्यूशन वाली छवियाँ होती हैं।", "यह एकमात्र फ़ोल्डर है जिसे डाउनलोड किया जा सकता है।", "इसमें छवियों का वह सेट होता है जो विशेष रूप से मॉडल को सीखने के लिए नामित किया गया है।", "यह हमेशा सबसे छोटा फ़ोल्डर होता है और जल्दी डाउनलोड हो जाता है।"], correct: 2 }
                ],
                links: [
                    { text: "कैगल", url: "https://www.kaggle.com/" },
                    { text: "डेटासेट क्या है?", url: "https://en.wikipedia.org/wiki/Data_set" }
                ]
            },
            {
                title: "टीचेबल मशीनों का उपयोग करके अपना खुद का एआई बनाएं",
                video: "https://drive.google.com/file/d/1jrmF7hD7Txzfwx1xrI4Jn3hK7ihObFuz/preview",
                questions: [
                    { q: "इस पाठ में इमेज क्लासिफायर बनाने के लिए उपयोग किए गए गूगल के फ्री, वेब-आधारित टूल का नाम क्या है?", a: ["गूगल एआई प्लेटफॉर्म", "टेन्सरफ्लो स्टूडियो", "टीचेबल मशीन", "कैगल क्लाउड"], correct: 2 },
                    { q: "प्रत्येक क्लास के लिए विभिन्न प्रकार की छवियाँ (अलग-अलग नस्लें, कोण, रोशनी) प्रदान करना क्यों महत्वपूर्ण है?", a: ["ताकि ट्रेनिंग प्रक्रिया तेजी से हो सके।", "ताकि मॉडल को सामान्यीकरण (generalize) करने और विषय को नई, अनदेखी स्थितियों में पहचानने में मदद मिले।", "क्योंकि टूल को कम से कम 10 विभिन्न प्रकार की छवियों की आवश्यकता होती है।", "ताकि अंतिम मॉडल का फ़ाइल आकार बड़ा हो सके।"], correct: 1 },
                    { q: "वह प्रक्रिया जिसमें AI प्रदान की गई छवियों का विश्लेषण करके क्लास के बीच के पैटर्न को सीखता है, उसे क्या कहते हैं?", a: ["अपलोडिंग", "प्रीव्यूइंग", "ट्रेनिंग", "क्लासिफाइंग"], correct: 2 },
                    { q: "'प्रीव्यू' पैनल में, कौन सा इनपुट विकल्प आपको अपने कंप्यूटर से एक छवि को ड्रैग और ड्रॉप करके मॉडल का परीक्षण करने की अनुमति देता है?", a: ["वेबकैम", "फाइल", "गूगल ड्राइव", "यूआरएल"], correct: 1 },
                    { q: "जब एक बिल्ली और कुत्ते दोनों वाली छवि दिखाई गई, तो मॉडल ने उच्च आत्मविश्वास के साथ 'डॉग' की भविष्यवाणी की। यह क्या दर्शाता है?", a: ["मॉडल में कुत्तों के लिए एक अंतर्निहित वरीयता (preference) है।", "मॉडल टूट गया है और इसे हटाने की आवश्यकता है।", "मॉडल केवल एक क्लास चुन सकता है और उन विशेषताओं के आधार पर अपनी सर्वश्रेष्ठ भविष्यवाणी करता है जिन्हें वह सबसे दृढ़ता से पहचानता है।", "मॉडल को इस तरह डिज़ाइन किया गया है कि यदि कुत्ता मौजूद हो तो वह हमेशा बिल्लियों को अनदेखा कर दे।"], correct: 2 }
                ],
                links: [
                    { text: "टीचेबल मशीन", url: "https://teachablemachine.withgoogle.com/" }
                ]
            },
            {
                title: "पीपीटी बनाने के लिए गामा अनलिमिटेड बार उपयोग करें",
                video: "https://drive.google.com/file/d/1F997r4dmB2xdi-NwiRBLbRTIIf53QZaq/preview",
                questions: [
                    { q: "ट्यूटोरियल में दिखाए अनुसार Gamma.app का मुख्य कार्य क्या है?", a: ["पेशेवर रूप से वीडियो संपादित करना", "AI द्वारा उत्पन्न प्रेजेंटेशन और डॉक्यूमेंट्स बनाना", "जटिल 3D मॉडल डिजाइन करना", "सोशल मीडिया अकाउंट्स का प्रबंधन करना"], correct: 1 },
                    { q: "वीडियो के अनुसार, Gamma.app पर बार-बार मुफ्त क्रेडिट प्राप्त करने के लिए किस विधि का उपयोग किया जाता है?", a: ["विज्ञापन देखना", "दोस्तों को ऐप रेफर करना", "एक अस्थायी ईमेल सेवा का उपयोग करके नए खाते बनाना", "ऐप के भीतर दैनिक कार्यों को पूरा करना"], correct: 2 },
                    { q: "बनाए गए प्रत्येक नए खाते के लिए Gamma कितने मुफ्त क्रेडिट प्रदान करता है?", a: ["100", "250", "400", "500"], correct: 2 },
                    { q: "ट्यूटोरियल में, प्रेजेंटेशन की सामग्री को Gamma में पेस्ट करने से पहले एक संरचित रूपरेखा (structured outline) बनाने के लिए किस टूल का उपयोग किया गया था?", a: ["गूगल सर्च", "विकिपीडिया", "माइक्रोसॉफ्ट वर्ड", "चैटजीपीटी"], correct: 3 },
                    { q: "Gamma में प्रेजेंटेशन बन जाने के बाद, फ़ाइल डाउनलोड करने के लिए बताए गए दो मुख्य एक्सपोर्ट विकल्प कौन से हैं?", a: ["MP4 और MP3 में एक्सपोर्ट करें", "PDF और PowerPoint में एक्सपोर्ट करें", "वर्ड डॉक्यूमेंट और इमेज फ़ाइल में एक्सपोर्ट करें", "वेबसाइट लिंक और ZIP फ़ाइल में एक्सपोर्ट करें"], correct: 1 }
                ],
                links: [
                    { text: "गामा.एप", url: "https://gamma.app/" },
                    { text: "टेम्प मेल", url: "https://tempmail.la/" }
                ]
            },
            {
                title: "फ्रीपिक का उपयोग करके स्केच टू इमेज",
                video: "https://drive.google.com/file/d/1_qnJpAIKHj-hDpu-NL6OH4DmKgWKt97h/preview",
                questions: [
                    { q: "Freepik के Sketch to Image टूल में 'Imagination' स्लाइडर का मुख्य कार्य क्या है?", a: ["ड्राइंग टूल्स का रंग बदलना।", "यह नियंत्रित करना कि AI को स्केच की व्याख्या करने के लिए कितनी रचनात्मक स्वतंत्रता है।", "कैनवास का आकार बढ़ाना।", "आखिरी क्रिया को पूर्ववत् करना (अनडू करना)।"], correct: 1 },
                    { q: "आप टूल में पहले से मौजूद ड्राइंग या लाइन आर्ट का उपयोग कैसे कर सकते हैं?", a: ["प्रॉम्प्ट बॉक्स में फ़ाइल का नाम टाइप करके।", "Start from scratch' बटन का उपयोग करके।", "Upload Image' आइकन पर क्लिक करके और एक फ़ाइल चुनकर।", "इमेज को सीधे कैनवास पर पेस्ट करके।"], correct: 2 },
                    { q: "वीडियो में, काले और सफेद ड्रैगन स्केच को आग उगलने वाले हरे ड्रैगन में कैसे बदला गया?", a: ["ब्रश का रंग हरा करके और आग की लपटें बनाकर।", "केवल 'Imagination' स्लाइडर का उपयोग करके।", "टेक्स्ट प्रॉम्प्ट को संपादित करके 'Green Dragon' और 'with fire coming out of its mouth' शामिल करके।", "आग की एक अलग इमेज अपलोड करके।"], correct: 2 }
                ],
                links: [
                    { text: "फ्रीपिक स्केच टू इमेज", url: "https://www.freepik.com/ai/sketch-to-image" }
                ]
            }
        ]
    },
    mr: {
        title: "एआय साक्षरता अभ्यासक्रम",
        topics: [
            {
                title: "डेटा आणि कॅगलचा परिचय",
                video: "https://drive.google.com/file/d/1W4HwwVeNoSyAvDAk8DGGYZUiSWcc75Qi/preview",
                questions: [
                    { q: "पाठानुसार, AI ला शिकवण्यासाठी सर्वात महत्त्वाचा घटक कोणता आहे, जे लहान मुलाला उदाहरणे दाखवण्यासारखे आहे?", a: ["एक शक्तिशाली संगणक", "उदाहरणांचा एक मोठा आणि वैविध्यपूर्ण डेटासेट", "व्याख्या असलेले पाठ्यपुस्तक", "गुंतागुंतीचे अल्गोरिदम"], correct: 1 },
                    { q: "व्हिडिओमध्ये स्पष्ट केल्याप्रमाणे, कॅगल (Kaggle) वेबसाइटची मुख्य भूमिका काय आहे?", a: ["थेट AI मॉडेल तयार करण्याचे एक साधन", "डेटा सायंटिस्टसाठी एक सोशल मीडिया प्लॅटफॉर्म", "उच्च-गुणवत्तेचे डेटासेट शोधण्यासाठी आणि शेअर करण्यासाठी एक ऑनलाइन लायब्ररी", "मांजरी आणि कुत्र्यांची चित्रे शोधण्यासाठी एक सर्च इंजिन"], correct: 2 },
                    { q: "मशीन लर्निंग प्रोजेक्टसाठी डेटासेट डाउनलोड करताना, AI ला शिकवण्यासाठी 'ट्रेन' ('train') फोल्डर विशेषतः का निवडले जाते?", a: ["त्यात सर्वाधिक रिझोल्यूशनच्या प्रतिमा असतात.", "ते एकमेव फोल्डर आहे जे डाउनलोड केले जाऊ शकते.", "त्यात मॉडेलने शिकण्यासाठी खास नियुक्त केलेल्या प्रतिमांचा संच असतो.", "ते नेहमी सर्वात लहान फोल्डर असते आणि लवकर डाउनलोड होते."], correct: 2 }
                ],
                links: [
                    { text: "कॅगल", url: "https://www.kaggle.com/" },
                    { text: "डेटासेट म्हणजे काय?", url: "https://en.wikipedia.org/wiki/Data_set" }
                ]
            },
            {
                title: "टीचेबल मशीन वापरून स्वतःचे एआय तयार करा",
                video: "https://drive.google.com/file/d/19EtBPzbOuSAxLYHyC1WTAqkEs0TD5-w_/preview",
                questions: [
                    { q: "या पाठामध्ये इमेज क्लासिफायर तयार करण्यासाठी वापरलेल्या गूगलच्या मोफत, वेब-आधारित टूलचे नाव काय आहे?", a: ["गूगल एआय प्लॅटफॉर्म", "टेन्सरफ्लो स्टुडिओ", "टीचेबल मशीन", "कॅगल क्लाउड"], correct: 2 },
                    { q: "प्रत्येक क्लाससाठी विविध प्रकारच्या प्रतिमा (वेगवेगळ्या जाती, अँगल, प्रकाश) देणे महत्त्वाचे का आहे?", a: ["जेणेकरून प्रशिक्षण प्रक्रिया (training process) अधिक वेगाने होईल.", "जेणेकरून मॉडेलला सामान्यीकरण (generalize) करण्यास आणि नवीन, न पाहिलेल्या परिस्थितींमध्ये विषय ओळखायला मदत होईल.", "कारण टूलला किमान 10 वेगवेगळ्या प्रकारच्या प्रतिमांची आवश्यकता असते.", "जेणेकरून अंतिम मॉडेलची फाइल साईज मोठी होईल."], correct: 1 },
                    { q: "ज्या प्रक्रियेमध्ये AI दिलेल्या प्रतिमांचे विश्लेषण करून वर्गांमधील फरक ओळखणारे पॅटर्न शिकतो, तिला काय म्हणतात?", a: ["अपलोडिंग", "प्रिव्ह्यूइंग", "ट्रेनिंग", "क्लासिफाइंग"], correct: 2 },
                    { q: "'प्रिव्ह्यू' पॅनलमध्ये, कोणता इनपुट पर्याय तुम्हाला तुमच्या कॉम्प्युटरवरून इमेज ड्रॅग आणि ड्रॉप करून मॉडेलची चाचणी घेण्याची परवानगी देतो?", a: ["वेबकॅम", "फाइल", "गूगल ड्राइव्ह", "यूआरएल"], correct: 1 },
                    { q: "जेव्हा मांजर आणि कुत्रा दोन्ही असलेली प्रतिमा दाखवली गेली, तेव्हा मॉडेलने उच्च आत्मविश्वासाने 'डॉग' असे भाकीत केले. हे काय दर्शवते?", a: ["मॉडेलमध्ये कुत्र्यांसाठी एक अंगभूत पसंती (preference) आहे.", "मॉडेल तुटलेले आहे आणि ते हटवणे आवश्यक आहे.", "मॉडेल फक्त एकच क्लास निवडू शकतो आणि तो ज्या वैशिष्ट्यांना सर्वात प्रभावीपणे ओळखतो त्यावर आधारित आपले सर्वोत्तम भाकीत करतो.", "मॉडेल अशाप्रकारे डिझाइन केलेले आहे की कुत्रा उपस्थित असल्यास ते नेहमी मांजरीकडे दुर्लक्ष करेल."], correct: 2 }
                ],
                links: [
                    { text: "टीचेबल मशीन", url: "https://teachablemachine.withgoogle.com/" }
                ]
            },
            {
                title: "पीपीटी तयार करण्यासाठी गामा अनलिमिटेड वेळा वापरा",
                video: "https://drive.google.com/file/d/1bMiOkqsJGOfscDR3Z5eJj77FhDiu2wfr/preview",
                questions: [
                    { q: "ट्युटोरियलमध्ये दाखवल्याप्रमाणे Gamma.app चे मुख्य कार्य काय आहे?", a: ["व्यावसायिकरित्या व्हिडिओ संपादित करणे", "AI द्वारे तयार केलेले प्रेझेंटेशन आणि डॉक्युमेंट्स बनवणे", "क्लिष्ट 3D मॉडेल्स डिझाइन करणे", "सोशल मीडिया खाती व्यवस्थापित करणे"], correct: 1 },
                    { q: "व्हिडिओनुसार, Gamma.app वर वारंवार मोफत क्रेडिट्स मिळवण्यासाठी कोणती पद्धत वापरली जाते?", a: ["जाहिराती पाहणे", "मित्रांना ॲप रेफर करणे", "तात्पुरती ईमेल सेवा वापरून नवीन खाती तयार करणे", "ॲपमधील दैनंदिन कार्ये पूर्ण करणे"], correct: 2 },
                    { q: "तयार केलेल्या प्रत्येक नवीन खात्यासाठी Gamma किती मोफत क्रेडिट्स प्रदान करते?", a: ["100", "250", "400", "500"], correct: 2 },
                    { q: "ट्युटोरियलमध्ये, प्रेझेंटेशनची सामग्री Gamma मध्ये पेस्ट करण्यापूर्वी एक संरचित बाह्यरेखा (structured outline) तयार करण्यासाठी कोणते साधन वापरले गेले?", a: ["गूगल सर्च", "विकिपीडिया", "मायक्रोसॉफ्ट वर्ड", "चॅटजीपीटी"], correct: 3 },
                    { q: "Gamma मध्ये प्रेझेंटेशन तयार झाल्यावर, फाइल डाउनलोड करण्यासाठी नमूद केलेले दोन मुख्य एक्सपोर्ट पर्याय कोणते आहेत?", a: ["MP4 आणि MP3 मध्ये एक्सपोर्ट करा", "PDF आणि PowerPoint मध्ये एक्सपोर्ट करा", "वर्ड डॉक्युमेंट आणि इमेज फाइलमध्ये एक्सपोर्ट करा", "वेबसाइट लिंक आणि ZIP फाइलमध्ये एक्सपोर्ट करा"], correct: 1 }
                ],
                links: [
                    { text: "गामा.एप", url: "https://gamma.app/" },
                    { text: "टेम्प मेल", url: "https://tempmail.la/" }
                ]
            },
            {
                title: "फ्रीपिक वापरून स्केच टू इमेज",
                video: "https://drive.google.com/file/d/1lRCuoPX3Kzk67vz7FS742l2qAjQMGWNK/preview",
                questions: [
                    { q: "Freepik च्या Sketch to Image टूलमधील 'Imagination' स्लायडरचे मुख्य कार्य काय आहे?", a: ["ड्रॉइंग टूल्सचा रंग बदलणे.", "AI ला स्केचचा अर्थ लावण्यासाठी किती सर्जनशील स्वातंत्र्य द्यायचे हे नियंत्रित करणे.", "कॅनव्हासचा आकार वाढवणे.", "शेवटची क्रिया पूर्ववत करणे (अनडू करणे)."], correct: 1 },
                    { q: "तुम्ही टूलमध्ये आधीपासून अस्तित्वात असलेले चित्र किंवा लाइन आर्ट कसे वापरू शकता?", a: ["प्रॉम्प्ट बॉक्समध्ये फाइलचे नाव टाइप करून.", "'Start from scratch' बटण वापरून.", "'Upload Image' आयकॉनवर क्लिक करून आणि फाइल निवडून.", "इमेज थेट कॅनव्हासवर पेस्ट करून."], correct: 2 },
                    { q: "व्हिडिओमध्ये, काळ्या-पांढऱ्या ड्रॅगन स्केचचे रूपांतर आग ओकणाऱ्या हिरव्या ड्रॅगनमध्ये कसे केले गेले?", a: ["ब्रशचा रंग हिरवा करून आणि आगीच्या ज्वाला काढून.", "फक्त 'Imagination' स्लायडर वापरून.", "टेक्स्ट प्रॉम्प्टमध्ये 'Green Dragon' आणि 'with fire coming out of its mouth' समाविष्ट करण्यासाठी संपादन करून.", "आगीची वेगळी इमेज अपलोड करून."], correct: 2 }
                ],
                links: [
                    { text: "फ्रीपिक स्केच टू इमेज", url: "https://www.freepik.com/ai/sketch-to-image" }
                ]
            }
        ]
    }
};

let currentLanguage = 'en';
let currentTopic = 0;

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-hi').addEventListener('click', () => setLanguage('hi'));
document.getElementById('lang-mr').addEventListener('click', () => setLanguage('mr'));

function setLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('course-content').style.display = 'block';
    renderCourse();
}

function renderCourse() {
    const course = courseData[currentLanguage];
    document.getElementById('course-title').innerText = course.title;
    const topicsDiv = document.getElementById('topics');
    topicsDiv.innerHTML = '';

    course.topics.forEach((topic, index) => {
        const topicDiv = document.createElement('div');
        topicDiv.classList.add('topic');
        if (index > currentTopic) {
            topicDiv.classList.add('locked');
        }

        const topicTitle = document.createElement('h2');
        topicTitle.innerText = topic.title;
        topicDiv.appendChild(topicTitle);

        if (index === currentTopic) {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video');
            const iframe = document.createElement('iframe');
            iframe.src = topic.video;
            iframe.width = "560";
            iframe.height = "315";
            iframe.title = "YouTube video player";
            iframe.frameborder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowfullscreen = true;
            videoDiv.appendChild(iframe);
            topicDiv.appendChild(videoDiv);

            const linksDiv = document.createElement('div');
            linksDiv.classList.add('links');
            const linksTitle = document.createElement('h3');
            linksTitle.innerText = 'Useful Links';
            linksDiv.appendChild(linksTitle);
            topic.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.innerText = link.text;
                a.target = '_blank';
                linksDiv.appendChild(a);
            });
            topicDiv.appendChild(linksDiv);

            const quizDiv = document.createElement('div');
            quizDiv.classList.add('quiz');
            topic.questions.forEach((q, i) => {
                const questionP = document.createElement('p');
                questionP.innerText = q.q;
                quizDiv.appendChild(questionP);

                q.a.forEach((ans, ansIndex) => {
                    const label = document.createElement('label');
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `q${i}`;
                    input.value = ansIndex;
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(ans));
                    quizDiv.appendChild(label);
                });
            });
            
            const submitButton = document.createElement('button');
            submitButton.innerText = 'Submit';
            submitButton.addEventListener('click', () => checkAnswers(topic.questions));
            quizDiv.appendChild(submitButton);
            topicDiv.appendChild(quizDiv);
        }
        topicsDiv.appendChild(topicDiv);
    });
}

function checkAnswers(questions) {
    let score = 0;
    questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });

    if (score / questions.length >= 0.66) {
        currentTopic++;
        if (currentTopic === courseData[currentLanguage].topics.length) {
            document.getElementById('course-content').style.display = 'none';
            document.getElementById('certificate').style.display = 'block';
        } else {
            renderCourse();
        }
    } else {
        alert('You need to score at least 66% to move to the next lesson.');
    }
}

document.getElementById('generate-certificate').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    if (name) {
        const certificateOutput = document.getElementById('certificate-output');
        certificateOutput.innerHTML = `<h3>Certificate of Completion</h3><p>This certifies that</p><h4>${name}</h4><p>has successfully completed the AI Literacy Course.</p>`;
    }
});