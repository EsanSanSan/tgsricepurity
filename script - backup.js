const questions = [
            "Have you ever attended TGS for more than 1 year?",
            "Have you ever eaten Sage Dining more than 20 times?",
            "Have you ever made use of the Fab Lab?",
            "Have you ever toured TGS?",
            "Have you ever played with the giant chessboard in the Freshman area?",
            "Have you ever joined an extracurricular?",
            "Check this box if it was a sports-related extracurricular.",
            "Have you ever read the Gregorian Rant?",
            "Have you ever read the Gregorian Chant?",
            "Have you ever purchased something from a bake sale?",
            "Have you ever held a bake sale?",
            "Have you ever purchased snacks for your advisory?",
            "Have you ever purchased a Carlson pizza?",
            "Have you ever attended a Food-Truck Friday?",
            "Have you ever attended a school dance?",
            "Have you ever been on an interim trip?",
            "Have you ever <b>hated</b> an interim trip?",
            "Have you ever <b>loved</b> an interim trip?",
            "Have you ever ran for a STUCO position?",
            "Have you ever procrastinated too much, and regretted it?",
            "Have you ever given someone a tour of TGS?",
"Is your laptop a Macbook?",
            "Did you attend TGS for middle school?",
            "Have you ever called him Gabe instead of Mr. Reyes?",
            "Have you ever called him T-Milly instead of Mr. Milner?",
            "Have you ever cut one of your friends in the lunch line?",
"Have you ever airdropped someone something while on the bus?",
            "Have you ever played chess against another student?",
            "Have you ever played Among Us with other students?",
            "Have you ever intentionally distracted a teacher into yapping for a long period of time?",
            "Check this box if it was Mr. Kraus, Mr. Wolter, or Mr. Carlson.",
            "Have you ever done absolutely nothing productive during one of Mr. Conner's classes?",
            "Have you ever done absolutely nothing productive during one of Ms. Eskesen's classes?",
            "Have you ever skipped an All-School Meeting?",
            "Have you ever given an announcement at an All-School Meeting?",
            "Have you ever skipped a Friday Exploration day?",
            "Have you ever skipped more than 20 Friday Exploration days?",
            "Have you ever been late to a single class more than ten times?",
            "Have you ever intentionally skipped a class?",
            "Have you ever intentionally skipped an entire school day?",
            "Have you ever missed classes because you slept in for too long?",
            "Have you ever fallen asleep in class, even if it was for a split second?",
            "Have you ever attended a Friday Exploration ran by another student?",
            "Have you ever played one of Gabe's board games?",
            "Have you ever been Senior Willed something?",
            "Have you ever had your parking spot stolen?",
            "Have you ever stolen someone else's parking spot?",
            "Have you ever purposefully tried to avoid another student for any reason?",
            "Have you ever hated Admin for any reason?",
            "Have you ever competed with another student over Spotify wrapped results?",
            "Check this box if it was over Taylor Swift.",
            "Have you ever stolen something from the Fab Lab?",
            "Have you ever taken more than one AP class in the same year?",
            "Have you ever checked out something from the library?",
            "Have you ever drawn on one of Ms. Reynolds' desks?",
            "Have you ever used the VR headsets in the Fab Lab?",
            "Have you ever done something romantic/sexual on the bleachers or in the bathroom?",
            "Have you ever done something romantic/sexual in a public area?",
            "Have you ever planned an escape route in the case of a school shooter?",
            "Have you ever been stopped by the security guard?",
            "Have you ever had a mental/emotional breakdown on campus?",
            "Have you spent all four years of High School at TGS?",



    // Add more questions here
];

const customMessages = {
    0: "Wow, you are very pure!",
    10: "You are still very pure!",
    20: "You have experienced a bit.",
    30: "You are getting there.",
    40: "You have seen some things.",
    50: "You are halfway there.",
    60: "You are quite experienced.",
    70: "You have been around.",
    80: "You have done a lot.",
    90: "You are very experienced.",
    100: "You are extremely experienced!"
};

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions');

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <label>
                <input type="checkbox" name="question${index}" />
                ${question}
            </label>
        `;
        questionsContainer.appendChild(questionElement);
    });
});

function calculateScore() {
    const form = document.getElementById('purityTest');
    const formData = new FormData(form);
    const totalQuestions = questions.length;
    let checkedCount = 0;

    for (let entry of formData.entries()) {
        if (entry[1] === 'on') {
            checkedCount++;
        }
    }

    const score = ((totalQuestions - checkedCount) / totalQuestions) * 100;
    const roundedScore = Math.round(score);
    const scoreRange = Math.floor(roundedScore / 10) * 10;
    const customMessage = customMessages[scoreRange];

    document.getElementById('score').innerText = roundedScore;
    document.getElementById('customMessage').innerText = customMessage;
    document.getElementById('result').classList.remove('hidden');
}
