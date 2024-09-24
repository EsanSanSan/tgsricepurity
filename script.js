const questions = [
            "Have you ever attended TGS for more than 1 year?", //EVERYONE HAS DONE THIS
            "Have you eaten Sage Dining more than 50 times?",
            "Have you ever used the Sandwich Bar?",
            "Have you ever made use of the Fab Lab?",
            "Have you ever toured TGS?",
            "Have you ever played with the giant chessboard in the Freshman area?",
            "Have you ever joined an extracurricular/club?",
            "Check this box if it was a sports-related extracurricular.",
            "Have you ever read the Gregorian Rant?",
            "Have you ever read the Gregorian Chant?",
            "Have you ever used the online service to print something at school?",
            "Have you ever purchased something from a bake sale?",
            "Have you ever held a bake sale?",
            "Have you ever purchased snacks or other items for your advisory?",
            "Have you ever purchased a Carlson pizza?",
            "Have you ever purchased from a food truck during Food Truck Friday?",
            "Have you ever attended a school dance?",
            "Check this box if you actually danced (or attempted to dance) at the event.",
            "Have you ever attended a Drive-In Movie Night?",
            "Have you ever attended a Film Festival?",
            "Have you ever attended Gregory Day?",
            "Have you ever skipped Gregory Day?",
            "Do you own any TGS Merch?",
            "Check this box if you actually spent money on it, and it wasn't given to you for free.",
            "Have you ever been on an interim trip?",
            "Have you ever <b>hated</b> an interim trip?",
            "Have you ever <b>loved</b> an interim trip?",
            "Have you ever ran for a STUCO position?",
            "Have you ever won a STUCO position?",
            "Have you taken part in any Spirit Week events?",
            "Have you ever given an announcement at an All-School Meeting?",
            "Have you ever been to a TGS Sports Game?",
            "Check this box if you wore the requested color theme (e.g. blackout).",
            "Have you ever attended a Human Growth and Development presentation?",
            "Have you ever procrastinated too much, and regretted it?",
            "Have you ever given someone a tour of TGS?",
"Is your laptop a Macbook?",
"Is your phone an IPhone?",
            "Have you ever taken more than one AP class in the one year?",
            "Did you attend TGS for middle school?",
            "Have you ever befriended or gotten closer to one of the Sage Dining servers?",
            "Do you call it 'Upper School' instead of 'High School'?",
            "Have you ever called him Gabe instead of Mr. Reyes?",
            "Have you ever called him T-Milly instead of Mr. Milner?",
            "Have you ever cut one of your friends in the lunch line to save time?",
"Have you eaten lunch with your friends in more than 4 different places?",
"Have you ever airdropped/been airdropped something while on the bus?",
"Have you ever sang karaoke with other students while on a bus?",
"Have you ever taken an international trip with the school?",
            "Have you ever played chess with another student?",
            "Have you ever played Among Us with other students?",
            "Is Clash Royale/Clash of Clans downloaded on your phone?",
             "Have you ever attended a Scopa/Scopone exploration?",
                         "Have you ever had the same Math Teacher more than once?",
             "Have you ever attended a JSA/Debate Exploration?",
             "Have you ever realized that one or more of your friends were actually fake friends?",
             "Have you ever been reprimanded by Mr. Young for any reason?",
            "Have you ever been ambushed by Ms. Eskesen in the halls?",
            "Have you ever skipped an All-School Meeting?", //GANGSTA 
            "Have you ever gone on your phone when you definitely weren't supposed to?",
            "Have you ever eaten in class?",
            "Have you ever skipped a Friday Exploration day?",
            "Have you ever skipped more than 20 Friday Exploration days?",
                                               "Have you ever had romantic/sexual feelings for another student?", //ROMANCE SECTION
                        "Have you ever asked a student out to a dance?",
                        "Have you ever been in a relationship with another student?",
                        "Have you ever done something romantic/sexual on the bleachers or in the bathroom?",
                        "Have you ever done something romantic/sexual in a public area?",
            " with another student?",             
            "Have you ever cuddled with another student?",
            "Have you ever been late to a single class more than ten times?",
            "Have you ever skipped the assigned English reading and just winged it in class?",
            "Have you ever done your English annotations minutes before the annotation check was due?",
            "Have you ever copied or let someone else copy your homework?",
                        "Have you ever smuggled something onto campus?",
                                    "Have you ever damaged/broken school property, whether it be intentionally or unintentionally?",
            "Have you ever asked to go to the bathroom so that you could ditch most of class?",
                        "Have you ever drawn on one of Ms. Reynolds' (physics) desks?",
            "Have you ever talked about a test with other students despite being told not to?",
                    "Have you ever intentionally skipped an entire class?",
                        "Have you ever stolen something from the school?",
            "Have you ever intentionally skipped an entire school day? (a non Friday Exploration one, btw)",
            "Have you ever gaslit or persuaded Joyce into letting you do something you shouldn't? (like leaving, most of the time)",
            "Have you ever had to skip class for a club?",
            "Have you ever gone to school on less than 4 hours of sleep?",
            "Check this box if this has happened more than ten times.",
            "Have you ever missed classes because you slept in for too long?",
            "Have you ever spent more advisory time not in your advisory than in your advisory for a year?",
            "Have you ever fallen asleep in class, even if it was for a split second?",
"Have you ever intentionally distracted a teacher into yapping for a long time?",
            "Check this box if it was Mr. Kraus, Mr. Wolter, or Mr. Carlson.",
            "Have you ever done absolutely nothing productive during one of Mr. Conner's classes?",
            "Have you ever done absolutely nothing productive during one of Ms. Eskesen's classes?",
            "Have you ever done absolutely nothing productive during one of Mr. Teegarden's Math Labs?",
            "Have you ever done absolutely nothing productive during one of Gabe's Financial Literacy Classes?",
"Have you ever broken the dress code?",
            "Have you ever <u>gotten caught</u> breaking the dress code?",
                        "Have you ever had your parking spot stolen?",
            "Have you ever stolen someone else's parking spot?",
            "Have you ever gone over 60 MPH down or up Craycroft?",
            "Do you or your parent(s) drive a Tesla?",
            "Have you painted a parking spot?",
            "Do you frequently use Instagram, Snapchat, and/or TikTok?",
            "Do you have a public Spotify profile with organized playlists?",
            "Do you and other students follow each other on any of these platforms?",
            "Have you ever uninstalled any of the listed social media apps because you were uncomfortable using them?",
            "Have you ever had a high snapstreak with any other student?",
                        "Have you ever purposefully tried to avoid another student for any reason?",
            "Have you ever attended a Friday Exploration ran by another student?",
            "Have you ever played one of Gabe's board games?",
            "Have you ever appeared more than five times in a single yearbook?",
            "Have you ever been Senior Willed something?",
            "Have you ever been shipped with another student?",
            "Have you ever seriously injured yourself on campus?",
            "Have you ever visited the QT or the Whole Foods on the way home or to school?",
            "Have you ever seen a TGS teacher in public, outside of school?",
            "Have you ever hated Admin for any reason?",
            "Have you ever complained about the DJ after a school dance?",
            "Have you ever feigned politness and kindness to a student you actually hate?",
            "Have you used every single bathroom on the upper school campus? (Math wing, Gender neutral, Theater, Zeskind Hall, Library, Gym)",
            "Have you ever competed with another student over Spotify wrapped results?",
            "Check this box if it was over Taylor Swift.",
            "Have you ever gone out of your way to visit the Farm Animals?",
            "Have you ever had to use the paper cups in the Fab Lab for water?",
            "Have you ever been inside Chris/Kevin's kitchen?",
            "Have you ever checked out something from the library?",
            "Have you ever been reprimanded/shushed by Mitch?",
                        "Have you ever participated in the conga line during a school dance?",
            "Have you ever used the VR headsets in the Fab Lab?",
            "Have you ever joined or viewed the TGS Discord Server?",
            "Have you seen the Mr. Young vs. Mr. Kraus Video?",
            "Have you seen a Dancing Dads event?",
            "Have you ever planned a theoretical escape route in case of a school shooter?",
            "Have you ever been stopped by the security guard when driving onto campus?",
            "Have you ever seriously injured another student?",
            "Have you ever had a mental/emotional breakdown on campus?",
            "Have you ever dropped a slur on campus?",
            "Check this box if it was a slur you weren't allowed to say",
            "Have you ever gotten high/drunk with another student(s), whether it be off or on campus?",
            "Have you ever broken the law during a school event and/or with another student?",

                        "Have you spent all four years of High School at TGS?",
                        "Do you think you've become a better person in those four years?",
            "Have you graduated from TGS?",
            



    // Add more questions here
];

const customMessages = {
    0: "You truly have ascended. Experienced everything that this community has to offer. You have absorbed it into your soul...or something. Either that, or you just checked all the boxes to see what the message would be. I know who you are, fuckin nerd.",
    10: "You've definitely spent the majority of your pre-college life at TGS. You know the ins and outs of this place, and almost everyone you met here will know your name and will remember it for many years. You're also probably an extrovert, and a popular one at that.",
    20: "You've definitely spent the majority of your pre-college life at TGS. You know the ins and outs of this place, and almost everyone you met here will know your name and will remember it for many years.",
    30: "You're above average! You may not be at the top of the top in terms of popularity, but when your name comes up in conversation, people always have something to say about you, whether it be good or bad.",
    40: "You've integrated yourself quite well! You may not be the first person people think of when asked to, but you know your way around the place and have all of the social norms memorized",
    50: "You've integrated yourself quite well! You may not be the first person people think of when asked to, but you know your way around the place and have all of the social norms memorized",
    60: "You seem to have warmed up to this place. There's still some things you've yet to learn, but at least you're not the new kid on the block anymore.",
    70: "You seem to have warmed up to this place. There's still some things you've yet to learn, but at least you're not the new kid on the block anymore.",
    80: "You're still relatively new to the scene. You seem to have a general idea of what's going on, though.",
    90: "You don't seem to have spent that much time here, ngl, like literally less than a month spent at TGS. Spend a bit more time there and then come back and take this again.",
    100: "Why did you just hit submit without checking anything? Go back and actually take the test."
};

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions');

    questions.forEach((question, index) => {
        const questionNumber = index + 1; // Calculate the question number (1-based index)
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <label>
                ${questionNumber}.
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
