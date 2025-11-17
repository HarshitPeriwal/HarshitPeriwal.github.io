document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('ai-literacy-app');
    let courseData = [];

    let state = {
        language: localStorage.getItem('aiLiteracyLanguage'),
        currentLesson: parseInt(localStorage.getItem('aiLiteracyProgress')) || 0,
        userName: ''
    };

    function init() {
        fetch('course-data.json')
            .then(response => response.json())
            .then(data => {
                courseData = data;
                render();
            });
    }

    function render() {
        if (!courseData.length) {
            app.innerHTML = '<p>Loading course...</p>';
            return;
        }
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
        state.language = null;
        render();
    }

    init();
});
