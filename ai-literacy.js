// AI Literacy Drive JavaScript Logic
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('ai-literacy-app');

    const courseData = [
        // Lesson 1
        {
            title: { en: 'Introduction to AI and Data', hi: 'एआई और डेटा का परिचय', mr: 'एआय आणि डेटाची ओळख' },
            videoLink: { en: 'https://www.youtube.com/embed/placeholder_en_1', hi: 'https://www.youtube.com/embed/placeholder_hi_1', mr: 'https://www.youtube.com/embed/placeholder_mr_1' },
            description: { 
                en: 'For more information, visit: <a href="https://www.kaggle.com/" target="_blank">Kaggle</a>',
                hi: 'अधिक जानकारी के लिए, यहां जाएं: <a href="https://www.kaggle.com/" target="_blank">Kaggle</a>',
                mr: 'अधिक माहितीसाठी, येथे भेट द्या: <a href="https://www.kaggle.com/" target="_blank">Kaggle</a>'
            },
            quiz: [
                {
                    question: { en: 'According to the lesson, what is the most crucial element needed to teach an AI, similar to showing examples to a child?', hi: 'पाठ के अनुसार, AI को सिखाने के लिए सबसे महत्वपूर्ण घटक क्या है, जो एक बच्चे को उदाहरण दिखाने के समान है?', mr: 'पाठानुसार, AI ला शिकवण्यासाठी सर्वात महत्त्वाचा घटक कोणता आहे, जे लहान मुलाला उदाहरणे दाखवण्यासारखे आहे?' },
                    options: { 
                        en: ['A powerful computer', 'A large and diverse dataset of examples', 'A textbook with definitions', 'Complex algorithms'],
                        hi: ['एक शक्तिशाली कंप्यूटर', 'उदाहरणों का एक बड़ा और विविध डेटासेट', 'परिभाषाओं वाली एक पाठ्यपुस्तक', 'जटिल एल्गोरिदम'],
                        mr: ['एक शक्तिशाली संगणक', 'उदाहरणांचा एक मोठा आणि वैविध्यपूर्ण डेटासेट', 'व्याख्या असलेले पाठ्यपुस्तक', 'गुंतागुंतीचे अल्गोरिदम']
                    },
                    correct: 1
                },
                {
                    question: { en: 'What is the primary role of the website Kaggle, as explained in the video?', hi: 'वीडियो में बताए अनुसार, कैगल (Kaggle) वेबसाइट की मुख्य भूमिका क्या है?', mr: 'व्हिडिओमध्ये स्पष्ट केल्याप्रमाणे, कॅगल (Kaggle) वेबसाइटची मुख्य भूमिका काय आहे?' },
                    options: { 
                        en: ['A tool for building AI models directly', 'A social media platform for data scientists', 'An online library for finding and sharing high-quality datasets', 'A search engine for finding pictures of cats and dogs'],
                        hi: ['सीधे AI मॉडल बनाने का एक टूल', 'डेटा वैज्ञानिकों के लिए एक सोशल मीडिया प्लेटफॉर्म', 'उच्च-गुणवत्ता वाले डेटासेट खोजने और साझा करने के लिए एक ऑनलाइन लाइब्रेरी', 'बिल्लियों और कुत्तों की तस्वीरें खोजने के लिए एक सर्च इंजन'],
                        mr: ['थेट AI मॉडेल तयार करण्याचे एक साधन', 'डेटा सायंटिस्टसाठी एक सोशल मीडिया प्लॅटफॉर्म', 'उच्च-गुणवत्तेचे डेटासेट शोधण्यासाठी आणि शेअर करण्यासाठी एक ऑनलाइन लायब्ररी', 'मांजरी आणि कुत्र्यांची चित्रे शोधण्यासाठी एक सर्च इंजिन']
                    },
                    correct: 2
                },
                {
                    question: { en: "When downloading a dataset for a machine learning project, why is the 'train' folder specifically chosen for teaching the AI?", hi: "मशीन लर्निंग प्रोजेक्ट के लिए डेटासेट डाउनलोड करते समय, AI को सिखाने के लिए विशेष रूप से 'ट्रेन' ('train') फ़ोल्डर क्यों चुना जाता है?", mr: "मशीन लर्निंग प्रोजेक्टसाठी डेटासेट डाउनलोड करताना, AI ला शिकवण्यासाठी 'ट्रेन' ('train') फोल्डर विशेषतः का निवडले जाते?" },
                    options: { 
                        en: ['It contains the highest resolution images.', 'It is the only folder that is downloadable.', 'It contains the set of images designated specifically for the model to learn from.', 'It is always the smallest folder and downloads quickly.'],
                        hi: ['इसमें उच्चतम रिज़ॉल्यूशन वाली छवियाँ होती हैं।', 'यह एकमात्र फ़ोल्डर है जिसे डाउनलोड किया जा सकता है।', 'इसमें छवियों का वह सेट होता है जो विशेष रूप से मॉडल को सीखने के लिए नामित किया गया है।', 'यह हमेशा सबसे छोटा फ़ोल्डर होता है और जल्दी डाउनलोड हो जाता है।'],
                        mr: ['त्यात सर्वाधिक रिझोल्यूशनच्या प्रतिमा असतात.', 'ते एकमेव फोल्डर आहे जे डाउनलोड केले जाऊ शकते.', 'त्यात मॉडेलने शिकण्यासाठी खास नियुक्त केलेल्या प्रतिमांचा संच असतो.', 'ते नेहमी सर्वात लहान फोल्डर असते आणि लवकर डाउनलोड होते.']
                    },
                    correct: 2
                }
            ]
        },
        // Lesson 2
        {
            title: { en: 'Object Recognition with AI', hi: 'एआई के साथ ऑब्जेक्ट पहचान', mr: 'एआयसह ऑब्जेक्ट रेकग्निशन' },
            videoLink: { en: 'https://www.youtube.com/embed/placeholder_en_2', hi: 'https://www.youtube.com/embed/placeholder_hi_2', mr: 'https://www.youtube.com/embed/placeholder_mr_2' },
            description: { 
                en: 'For more information, visit: <a href="https://teachablemachine.withgoogle.com/" target="_blank">Teachable Machine</a>',
                hi: 'अधिक जानकारी के लिए, यहां जाएं: <a href="https://teachablemachine.withgoogle.com/" target="_blank">Teachable Machine</a>',
                mr: 'अधिक माहितीसाठी, येथे भेट द्या: <a href="https://teachablemachine.withgoogle.com/" target="_blank">Teachable Machine</a>'
            },
            quiz: [
                {
                    question: { en: 'What is the name of the free, web-based tool from Google used to create the image classifier in this lesson?', hi: 'इस पाठ में इमेज क्लासिफायर बनाने के लिए उपयोग किए गए गूगल के फ्री, वेब-आधारित टूल का नाम क्या है?', mr: 'या पाठामध्ये इमेज क्लासिफायर तयार करण्यासाठी वापरलेल्या गूगलच्या मोफत, वेब-आधारित टूलचे नाव काय आहे?' },
                    options: { 
                        en: ['Google AI Platform', 'TensorFlow Studio', 'Teachable Machine', 'Kaggle Cloud'],
                        hi: ['गूगल एआई प्लेटफॉर्म', 'टेन्सरफ्लो स्टूडियो', 'टीचेबल मशीन', 'कैगल क्लाउड'],
                        mr: ['गूगल एआय प्लॅटफॉर्म', 'टेन्सरफ्लो स्टुडिओ', 'टीचेबल मशीन', 'कॅगल क्लाउड']
                    },
                    correct: 2
                },
                {
                    question: { en: 'Why is it important to provide a wide variety of images (different breeds, angles, lighting) for each class?', hi: 'प्रत्येक क्लास के लिए विभिन्न प्रकार की छवियाँ (अलग-अलग नस्लें, कोण, रोशनी) प्रदान करना क्यों महत्वपूर्ण है?', mr: 'प्रत्येक क्लाससाठी विविध प्रकारच्या प्रतिमा (वेगवेगळ्या जाती, अँगल, प्रकाश) देणे महत्त्वाचे का आहे?' },
                    options: { 
                        en: ['To make the training process go faster.', 'To help the model generalize and recognize the subject in new, unseen situations.', 'Because the tool requires at least 10 different types of images.', 'To make the final model larger in file size.'],
                        hi: ['ताकि ट्रेनिंग प्रक्रिया तेजी से हो सके।', 'ताकि मॉडल को सामान्यीकरण (generalize) करने और विषय को नई, अनदेखी स्थितियों में पहचानने में मदद मिले।', 'क्योंकि टूल को कम से कम 10 विभिन्न प्रकार की छवियों की आवश्यकता होती है।', 'ताकि अंतिम मॉडल का फ़ाइल आकार बड़ा हो सके।'],
                        mr: ['जेणेकरून प्रशिक्षण प्रक्रिया (training process) अधिक वेगाने होईल.', 'जेणेकरून मॉडेलला सामान्यीकरण (generalize) करण्यास आणि नवीन, न पाहिलेल्या परिस्थितींमध्ये विषय ओळखायला मदत होईल.', 'कारण टूलला किमान 10 वेगवेगळ्या प्रकारच्या प्रतिमांची आवश्यकता असते.', 'जेणेकरून अंतिम मॉडेलची फाइल साईज मोठी होईल.']
                    },
                    correct: 1
                },
                {
                    question: { en: 'The step where the AI analyzes the provided images to learn the patterns that differentiate the classes is called:', hi: 'वह प्रक्रिया जिसमें AI प्रदान की गई छवियों का विश्लेषण करके क्लास के बीच के पैटर्न को सीखता है, उसे क्या कहते हैं?', mr: 'ज्या प्रक्रियेमध्ये AI दिलेल्या प्रतिमांचे विश्लेषण करून वर्गांमधील फरक ओळखणारे पॅटर्न शिकतो, तिला काय म्हणतात?' },
                    options: { 
                        en: ['Uploading', 'Previewing', 'Training', 'Classifying'],
                        hi: ['अपलोडिंग', 'प्रीव्यूइंग', 'ट्रेनिंग', 'क्लासिफाइंग'],
                        mr: ['अपलोडिंग', 'प्रिव्ह्यूइंग', 'ट्रेनिंग', 'क्लासिफाइंग']
                    },
                    correct: 2
                },
                {
                    question: { en: "In the 'Preview' panel, which input option allows you to test the model by dragging and dropping an image from your computer?", hi: "'प्रीव्यू' पैनल में, कौन सा इनपुट विकल्प आपको अपने कंप्यूटर से एक छवि को ड्रैग और ड्रॉप करके मॉडल का परीक्षण करने की अनुमति देता है?", mr: "'प्रिव्ह्यू' पॅनलमध्ये, कोणता इनपुट पर्याय तुम्हाला तुमच्या कॉम्प्युटरवरून इमेज ड्रॅग आणि ड्रॉप करून मॉडेलची चाचणी घेण्याची परवानगी देतो?" },
                    options: { 
                        en: ['Webcam', 'File', 'Google Drive', 'URL'],
                        hi: ['वेबकैम', 'फाइल', 'गूगल ड्राइव', 'यूआरएल'],
                        mr: ['वेबकॅम', 'फाइल', 'गूगल ड्राइव्ह', 'यूआरएल']
                    },
                    correct: 1
                },
                {
                    question: { en: "When shown an image with both a cat and a dog, the model predicted 'Dog' with high confidence. What does this demonstrate?", hi: "जब एक बिल्ली और कुत्ते दोनों वाली छवि दिखाई गई, तो मॉडल ने उच्च आत्मविश्वास के साथ 'डॉग' की भविष्यवाणी की। यह क्या दर्शाता है?", mr: "जेव्हा मांजर आणि कुत्रा दोन्ही असलेली प्रतिमा दाखवली गेली, तेव्हा मॉडेलने उच्च आत्मविश्वासाने 'डॉग' असे भाकीत केले. हे काय दर्शवते?" },
                    options: { 
                        en: ['The model has a built-in preference for dogs.', 'The model is broken and needs to be deleted.', 'The model can only choose one class and makes its best prediction based on the features it recognizes most strongly.', 'The model is designed to always ignore cats if a dog is present.'],
                        hi: ['मॉडल में कुत्तों के लिए एक अंतर्निहित वरीयता (preference) है।', 'मॉडल टूट गया है और इसे हटाने की आवश्यकता है।', 'मॉडल केवल एक क्लास चुन सकता है और उन विशेषताओं के आधार पर अपनी सर्वश्रेष्ठ भविष्यवाणी करता है जिन्हें वह सबसे दृढ़ता से पहचानता है।', 'मॉडल को इस तरह डिज़ाइन किया गया है कि यदि कुत्ता मौजूद हो तो वह हमेशा बिल्लियों को अनदेखा कर दे।'],
                        mr: ['मॉडेलमध्ये कुत्र्यांसाठी एक अंगभूत पसंती (preference) आहे.', 'मॉडेल तुटलेले आहे आणि ते हटवणे आवश्यक आहे.', 'मॉडेल फक्त एकच क्लास निवडू शकतो आणि तो ज्या वैशिष्ट्यांना सर्वात प्रभावीपणे ओळखतो त्यावर आधारित आपले सर्वोत्तम भाकीत करतो.', 'मॉडेल अशाप्रकारे डिझाइन केलेले आहे की कुत्रा उपस्थित असल्यास ते नेहमी मांजरीकडे दुर्लक्ष करेल.']
                    },
                    correct: 2
                }
            ]
        },
        // Lesson 3
        {
            title: { en: 'Unlimited PPT Creation with Gamma', hi: 'गामा के साथ असीमित पीपीटी निर्माण', mr: 'गामासह अमर्याद पीपीटी निर्मिती' },
            videoLink: { en: 'https://www.youtube.com/embed/placeholder_en_3', hi: 'https://www.youtube.com/embed/placeholder_hi_3', mr: 'https://www.youtube.com/embed/placeholder_mr_3' },
            description: { 
                en: 'For more information, visit: <a href="https://gamma.app/" target="_blank">Gamma.app</a> and <a href="https://tempmail.la/" target="_blank">TempMail</a>',
                hi: 'अधिक जानकारी के लिए, यहां जाएं: <a href="https://gamma.app/" target="_blank">Gamma.app</a> और <a href="https://tempmail.la/" target="_blank">TempMail</a>',
                mr: 'अधिक माहितीसाठी, येथे भेट द्या: <a href="https://gamma.app/" target="_blank">Gamma.app</a> आणि <a href="https://tempmail.la/" target="_blank">TempMail</a>'
            },
            quiz: [
                {
                    question: { en: 'What is the primary function of Gamma.app as demonstrated in the tutorial?', hi: 'ट्यूटोरियल में दिखाए अनुसार Gamma.app का मुख्य कार्य क्या है?', mr: 'ट्युटोरियलमध्ये दाखवल्याप्रमाणे Gamma.app चे मुख्य कार्य काय आहे?' },
                    options: { 
                        en: ['To edit videos professionally', 'To create AI-generated presentations and documents', 'To design complex 3D models', 'To manage social media accounts'],
                        hi: ['पेशेवर रूप से वीडियो संपादित करना', 'AI द्वारा उत्पन्न प्रेजेंटेशन और डॉक्यूमेंट्स बनाना', 'जटिल 3D मॉडल डिजाइन करना', 'सोशल मीडिया अकाउंट्स का प्रबंधन करना'],
                        mr: ['व्यावसायिकरित्या व्हिडिओ संपादित करणे', 'AI द्वारे तयार केलेले प्रेझेंटेशन आणि डॉक्युमेंट्स बनवणे', 'क्लिष्ट 3D मॉडेल्स डिझाइन करणे', 'सोशल मीडिया खाती व्यवस्थापित करणे']
                    },
                    correct: 1
                },
                {
                    question: { en: 'According to the video, what method is used to get more free credits on Gamma.app repeatedly?', hi: 'वीडियो के अनुसार, Gamma.app पर बार-बार मुफ्त क्रेडिट प्राप्त करने के लिए किस विधि का उपयोग किया जाता है?', mr: 'व्हिडिओनुसार, Gamma.app वर वारंवार मोफत क्रेडिट्स मिळवण्यासाठी कोणती पद्धत वापरली जाते?' },
                    options: { 
                        en: ['Watching advertisements', 'Referring the app to friends', 'Creating new accounts using a temporary email service', 'Completing daily tasks within the app'],
                        hi: ['विज्ञापन देखना', 'दोस्तों को ऐप रेफर करना', 'एक अस्थायी ईमेल सेवा का उपयोग करके नए खाते बनाना', 'ऐप के भीतर दैनिक कार्यों को पूरा करना'],
                        mr: ['जाहिराती पाहणे', 'मित्रांना ॲप रेफर करणे', 'तात्पुरती ईमेल सेवा वापरून नवीन खाती तयार करणे', 'ॲपमधील दैनंदिन कार्ये पूर्ण करणे']
                    },
                    correct: 2
                },
                {
                    question: { en: 'How many free credits does Gamma provide for each new account that is created?', hi: 'बनाए गए प्रत्येक नए खाते के लिए Gamma कितने मुफ्त क्रेडिट प्रदान करता है?', mr: 'तयार केलेल्या प्रत्येक नवीन खात्यासाठी Gamma किती मोफत क्रेडिट्स प्रदान करते?' },
                    options: { 
                        en: ['100', '250', '400', '500'],
                        hi: ['100', '250', '400', '500'],
                        mr: ['100', '250', '400', '500']
                    },
                    correct: 2
                },
                {
                    question: { en: 'In the tutorial, which tool was used to generate a structured outline for the presentation content before pasting it into Gamma?', hi: 'ट्यूटोरियल में, प्रेजेंटेशन की सामग्री को Gamma में पेस्ट करने से पहले एक संरचित रूपरेखा (structured outline) बनाने के लिए किस टूल का उपयोग किया गया था?', mr: 'ट्युटोरियलमध्ये, प्रेझेंटेशनची सामग्री Gamma मध्ये पेस्ट करण्यापूर्वी एक संरचित बाह्यरेखा (structured outline) तयार करण्यासाठी कोणते साधन वापरले गेले?' },
                    options: { 
                        en: ['Google Search', 'Wikipedia', 'Microsoft Word', 'ChatGPT'],
                        hi: ['गूगल सर्च', 'विकिपीडिया', 'माइक्रोसॉफ्ट वर्ड', 'चैटजीपीटी'],
                        mr: ['गूगल सर्च', 'विकिपीडिया', 'मायक्रोसॉफ्ट वर्ड', 'चॅटजीपीटी']
                    },
                    correct: 3
                },
                {
                    question: { en: 'After the presentation is generated in Gamma, what are the two main export options mentioned for downloading the file?', hi: 'Gamma में प्रेजेंटेशन बन जाने के बाद, फ़ाइल डाउनलोड करने के लिए बताए गए दो मुख्य एक्सपोर्ट विकल्प कौन से हैं?', mr: 'Gamma मध्ये प्रेझेंटेशन तयार झाल्यावर, फाइल डाउनलोड करण्यासाठी नमूद केलेले दोन मुख्य एक्सपोर्ट पर्याय कोणते आहेत?' },
                    options: { 
                        en: ['Export to MP4 and MP3', 'Export to PDF and PowerPoint', 'Export to a Word document and an image file', 'Export to a website link and a ZIP file'],
                        hi: ['MP4 और MP3 में एक्सपोर्ट करें', 'PDF और PowerPoint में एक्सपोर्ट करें', 'वर्ड डॉक्यूमेंट और इमेज फ़ाइल में एक्सपोर्ट करें', 'वेबसाइट लिंक और ZIP फ़ाइल में एक्सपोर्ट करें'],
                        mr: ['MP4 आणि MP3 मध्ये एक्सपोर्ट करा', 'PDF आणि PowerPoint मध्ये एक्सपोर्ट करा', 'वर्ड डॉक्युमेंट आणि इमेज फाइलमध्ये एक्सपोर्ट करा', 'वेबसाइट लिंक आणि ZIP फाइलमध्ये एक्सपोर्ट करा']
                    },
                    correct: 1
                }
            ]
        },
        // Lesson 4
        {
            title: { en: 'Sketch to Image with FreePik', hi: 'फ्रीपिक के साथ स्केच से इमेज', mr: 'फ्रीपिकसह स्केच टू इमेज' },
            videoLink: { en: 'https://www.youtube.com/embed/placeholder_en_4', hi: 'https://www.youtube.com/embed/placeholder_hi_4', mr: 'https://www.youtube.com/embed/placeholder_mr_4' },
            description: { 
                en: 'For more information, visit: <a href="https://www.freepik.com/ai/sketch-to-image" target="_blank">Freepik Sketch to Image</a>',
                hi: 'अधिक जानकारी के लिए, यहां जाएं: <a href="https://www.freepik.com/ai/sketch-to-image" target="_blank">Freepik Sketch to Image</a>',
                mr: 'अधिक माहितीसाठी, येथे भेट द्या: <a href="https://www.freepik.com/ai/sketch-to-image" target="_blank">Freepik Sketch to Image</a>'
            },
            quiz: [
                {
                    question: { en: 'What is the primary function of the "Imagination" slider in Freepik\'s Sketch to Image tool?', hi: 'Freepik के Sketch to Image टूल में "Imagination" स्लाइडर का मुख्य कार्य क्या है?', mr: 'Freepik च्या Sketch to Image टूलमधील "Imagination" स्लायडरचे मुख्य कार्य काय आहे?' },
                    options: { 
                        en: ['To change the color of the drawing tools.', 'To control how much creative freedom the AI has to interpret the sketch.', 'To increase the size of the canvas.', 'To undo the last action.'],
                        hi: ['ड्राइंग टूल्स का रंग बदलना।', 'यह नियंत्रित करना कि AI को स्केच की व्याख्या करने के लिए कितनी रचनात्मक स्वतंत्रता है।', 'कैनवास का आकार बढ़ाना।', 'आखिरी क्रिया को पूर्ववत् करना (अनडू करना)।'],
                        mr: ['ड्रॉइंग टूल्सचा रंग बदलणे.', 'AI ला स्केचचा अर्थ लावण्यासाठी किती सर्जनशील स्वातंत्र्य द्यायचे हे नियंत्रित करणे.', 'कॅनव्हासचा आकार वाढवणे.', 'शेवटची क्रिया पूर्ववत करणे (अनडू करणे).']
                    },
                    correct: 1
                },
                {
                    question: { en: 'How can you use a pre-existing drawing or line art in the tool?', hi: 'आप टूल में पहले से मौजूद ड्राइंग या लाइन आर्ट का उपयोग कैसे कर सकते हैं?', mr: 'तुम्ही टूलमध्ये आधीपासून अस्तित्वात असलेले चित्र किंवा लाइन आर्ट कसे वापरू शकता?' },
                    options: { 
                        en: ['By typing the file name in the prompt box.', 'By using the "Start from scratch" button.', 'By clicking the "Upload Image" icon and selecting a file.', 'By pasting the image directly onto the canvas.'],
                        hi: ['प्रॉम्प्ट बॉक्स में फ़ाइल का नाम टाइप करके।', '"Start from scratch" बटन का उपयोग करके।', '"Upload Image" आइकन पर क्लिक करके और एक फ़ाइल चुनकर।', 'इमेज को सीधे कैनवास पर पेस्ट करके।'],
                        mr: ['प्रॉम्प्ट बॉक्समध्ये फाइलचे नाव टाइप करून.', '"Start from scratch" बटण वापरून.', '"Upload Image" आयकॉनवर क्लिक करून आणि फाइल निवडून.', 'इमेज थेट कॅनव्हासवर पेस्ट करून.']
                    },
                    correct: 2
                },
                {
                    question: { en: 'In the video, how was the black and white dragon sketch turned into a green dragon breathing fire?', hi: 'वीडियो में, काले और सफेद ड्रैगन स्केच को आग उगलने वाले हरे ड्रैगन में कैसे बदला गया?', mr: 'व्हिडिओमध्ये, काळ्या-पांढऱ्या ड्रॅगन स्केचचे रूपांतर आग ओकणाऱ्या हिरव्या ड्रॅगनमध्ये कसे केले गेले?' },
                    options: { 
                        en: ['By changing the color of the brush to green and drawing flames.', 'By only using the "Imagination" slider.', 'By editing the text prompt to include "Green Dragon" and "with fire coming out of its mouth".', 'By uploading a separate image of fire.'],
                        hi: ['ब्रश का रंग हरा करके और आग की लपटें बनाकर।', 'केवल "Imagination" स्लाइडर का उपयोग करके।', 'टेक्स्ट प्रॉम्प्ट को संपादित करके "Green Dragon" और "with fire coming out of its mouth" शामिल करके।', 'आग की एक अलग इमेज अपलोड करके।'],
                        mr: ['ब्रशचा रंग हिरवा करून आणि आगीच्या ज्वाला काढून.', 'फक्त "Imagination" स्लायडर वापरून.', 'टेक्स्ट प्रॉम्प्टमध्ये "Green Dragon" आणि "with fire coming out of its mouth" समाविष्ट करण्यासाठी संपादन करून.', 'आगीची वेगळी इमेज अपलोड करून.']
                    },
                    correct: 2
                }
            ]
        },
        // Lesson 5
        {
            title: { en: 'Studying Using AI', hi: 'एआई का उपयोग करके अध्ययन', mr: 'एआय वापरून अभ्यास' },
            videoLink: { en: 'https://www.youtube.com/embed/placeholder_en_5', hi: 'https://www.youtube.com/embed/placeholder_hi_5', mr: 'https://www.youtube.com/embed/placeholder_mr_5' },
            description: { 
                en: 'For more information, visit: <a href="https://notebooklm.google/" target="_blank">NotebookLM</a>',
                hi: 'अधिक जानकारी के लिए, यहां जाएं: <a href="https://notebooklm.google/" target="_blank">NotebookLM</a>',
                mr: 'अधिक माहितीसाठी, येथे भेट द्या: <a href="https://notebooklm.google/" target="_blank">NotebookLM</a>'
            },
            quiz: [
                {
                    question: { en: "What is the primary purpose of the 'Mind Map' feature in NotebookLM?", hi: "NotebookLM में 'माइंड मैप' फ़ीचर का मुख्य उद्देश्य क्या है?", mr: "NotebookLM मध्ये 'माइंड मॅप' वैशिष्ट्याचे मुख्य उद्दिष्ट काय आहे?" },
                    options: { 
                        en: ['To create a multiple-choice quiz from the source material.', 'To visually organize and show connections between key concepts in a document.', 'To generate a conversational audio podcast.', 'To provide a paragraph-by-paragraph summary of the text.'],
                        hi: ['स्रोत सामग्री से एक बहुविकल्पीय क्विज़ बनाना।', 'दस्तावेज़ में प्रमुख अवधारणाओं (key concepts) के बीच संबंधों को दिखाना और उन्हें व्यवस्थित करना।', 'एक संवादात्मक ऑडियो पॉडकास्ट बनाना।', 'पाठ का पैराग्राफ़-दर-पैराग्राफ़ सारांश प्रदान करना।'],
                        mr: ['स्त्रोत सामग्रीमधून बहुपर्यायी प्रश्नमंजुषा (quiz) तयार करणे.', 'डॉक्युमेंटमधील मुख्य संकल्पनांमध्ये संबंध दर्शवणे आणि त्यांना दृष्य स्वरूपात आयोजित करणे.', 'एक संवादात्मक ऑडिओ पॉडकास्ट तयार करणे.', 'मजकुराचा परिच्छेद-नुसार (paragraph-wise) सारांश प्रदान करणे.']
                    },
                    correct: 1
                },
                {
                    question: { en: 'Which feature transforms your study material into an interactive podcast where you can record your own voice to "join" the conversation?', hi: 'कौन सा फ़ीचर आपकी अध्ययन सामग्री को एक इंटरैक्टिव पॉडकास्ट में बदल देता है, जिसमें आप बातचीत में "शामिल" (join) होने के लिए अपनी आवाज़ रिकॉर्ड कर सकते हैं?', mr: 'कोणते वैशिष्ट्य तुमच्या अभ्यास साहित्याला एका संवादात्मक पॉडकास्टमध्ये रूपांतरित करते, जिथे तुम्ही संभाषणात "सामील" (join) होण्यासाठी तुमचा स्वतःचा आवाज रेकॉर्ड करू शकता?' },
                    options: { 
                        en: ['Quiz Generator', 'Source Summary', 'Interactive Audio Overview', 'Mind Map'],
                        hi: ['क्विज़ जेनरेटर (Quiz Generator)', 'सोर्स समरी (Source Summary)', 'इंटरैक्टिव ऑडियो ओवरव्यू (Interactive Audio Overview)', 'माइंड मैप (Mind Map)'],
                        mr: ['क्विझ जनरेटर (Quiz Generator)', 'सोर्स समरी (Source Summary)', 'इंटरॅक्टिव्ह ऑडिओ ओव्हरव्ह्यू (Interactive Audio Overview)', 'माइंड मॅप (Mind Map)']
                    },
                    correct: 2
                },
                {
                    question: { en: 'After taking a quiz in NotebookLM, what valuable feedback does it provide in addition to showing if your answer is correct?', hi: 'NotebookLM में क्विज़ देने के बाद, यह बताने के अलावा कि आपका उत्तर सही है, यह और कौन सी मूल्यवान प्रतिक्रिया (feedback) प्रदान करता है?', mr: 'NotebookLM मध्ये क्विझ सोडवल्यानंतर, तुमचे उत्तर बरोबर आहे की नाही हे दाखवण्याव्यतिरिक्त, ते आणखी कोणता मौल्यवान अभिप्राय (feedback) देते?' },
                    options: { 
                        en: ['A final percentage score and grade.', 'A link to external websites for more information.', 'A detailed explanation for the correct answer, based on the uploaded source material.', 'The option to share your results with others.'],
                        hi: ['एक अंतिम प्रतिशत स्कोर और ग्रेड।', 'अधिक जानकारी के लिए बाहरी वेबसाइटों का लिंक।', 'अपलोड की गई स्रोत सामग्री के आधार पर सही उत्तर के लिए एक विस्तृत स्पष्टीकरण।', 'अपने परिणाम दूसरों के साथ साझा करने का विकल्प।'],
                        mr: ['अंतिम टक्केवारी गुण (score) आणि श्रेणी (grade).', 'अधिक माहितीसाठी बाह्य वेबसाइट्सची लिंक.', 'अपलोड केलेल्या स्त्रोत सामग्रीवर आधारित, योग्य उत्तरासाठी तपशीलवार स्पष्टीकरण.', 'तुमचे निकाल इतरांसोबत शेअर करण्याचा पर्याय.']
                    },
                    correct: 2
                }
            ]
        }
    ];

    let state = {
        language: localStorage.getItem('aiLiteracyLanguage'),
        currentLesson: parseInt(localStorage.getItem('aiLiteracyProgress')) || 0,
        userName: ''
    };

    function render() {
        if (!state.language) {
            renderLanguageSelection();
        } else if (state.currentLesson >= courseData.length) {
            renderCertificatePrompt();
        } else {
            renderLesson();
        }
    }

    function renderLanguageSelection() {
        app.innerHTML = `
            <h2>Choose Your Language</h2>
            <div class="language-selector">
                <button class="action-link" data-lang="en">English</button>
                <button class="action-link" data-lang="hi">हिन्दी (Hindi)</button>
                <button class="action-link" data-lang="mr">मराठी (Marathi)</button>
            </div>
        `;
        document.querySelectorAll('.language-selector button').forEach(button => {
            button.addEventListener('click', selectLanguage);
        });
    }

    function selectLanguage(event) {
        state.language = event.target.dataset.lang;
        localStorage.setItem('aiLiteracyLanguage', state.language);
        render();
    }

    function renderLesson() {
        const lesson = courseData[state.currentLesson];
        const lang = state.language;
        app.innerHTML = `
            <div class="lesson-header">
                <h2>${lesson.title[lang]}</h2>
                <button id="change-lang-btn" class="action-link secondary">Change Language</button>
            </div>
            <div class="video-container">
                <iframe src="${lesson.videoLink[lang]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>${lesson.description[lang]}</p>
            <hr>
            ${renderQuiz(lesson.quiz, lang)}
        `;
        document.getElementById('quiz-form').addEventListener('submit', handleQuizSubmit);
        document.getElementById('change-lang-btn').addEventListener('click', changeLanguage);
    }

    function renderQuiz(quiz, lang) {
        if (!quiz || quiz.length === 0) return '<p>No quiz for this lesson.</p><button class="action-link" id="next-lesson">Continue</button>';
        let quizHTML = '<form id="quiz-form"><h3>Quiz</h3>';
        quiz.forEach((q, index) => {
            quizHTML += `
                <div class="quiz-question">
                    <p>${index + 1}. ${q.question[lang]}</p>
                    ${q.options[lang].map((option, i) => `
                        <label>
                            <input type="radio" name="q${index}" value="${i}" required>
                            ${option}
                        </label>
                    `).join('')}
                </div>
            `;
        });
        quizHTML += '<button type="submit" class="action-link">Submit Answers</button></form><div id="quiz-result"></div>';
        return quizHTML;
    }

    function handleQuizSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const lesson = courseData[state.currentLesson];
        let score = 0;
        lesson.quiz.forEach((q, index) => {
            const selected = form.querySelector(`input[name="q${index}"]:checked`);
            if (selected && parseInt(selected.value) === q.correct) {
                score++;
            }
        });

        const totalQuestions = lesson.quiz.length;
        const percentage = (score / totalQuestions) * 100;
        const resultDiv = document.getElementById('quiz-result');

        if (percentage >= 66) {
            resultDiv.innerHTML = `<p style="color: green;">Congratulations! You passed with ${percentage.toFixed(2)}%. You can now proceed to the next lesson.</p>`;
            state.currentLesson++;
            localStorage.setItem('aiLiteracyProgress', state.currentLesson);
            setTimeout(render, 3000); // Auto-advance after 3 seconds
        } else {
            resultDiv.innerHTML = `<p style="color: red;">You scored ${percentage.toFixed(2)}%. You need at least 66% to pass. Please review the video and try again.</p>`;
        }
    }
    
    function renderCertificatePrompt() {
        app.innerHTML = `
            <div class="lesson-header">
                <h2>Congratulations!</h2>
                <button id="change-lang-btn" class="action-link secondary">Change Language</button>
            </div>
            <p>You have completed all the lessons.</p>
            <p>Please enter your name to generate your certificate.</p>
            <form id="certificate-form">
                <input type="text" id="name-input" placeholder="Enter your full name" required>
                <button type="submit" class="action-link">Generate Certificate</button>
            </form>
        `;
        document.getElementById('certificate-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name-input').value;
            window.location.href = `certificate.html?name=${encodeURIComponent(name)}`;
        });
        document.getElementById('change-lang-btn').addEventListener('click', changeLanguage);
    }

    function changeLanguage() {
        localStorage.removeItem('aiLiteracyLanguage');
        localStorage.removeItem('aiLiteracyProgress');
        state.language = null;
        state.currentLesson = 0;
        render();
    }

    render();
});
