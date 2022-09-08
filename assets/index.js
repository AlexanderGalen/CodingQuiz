// set up references to any buttons that we need event listeners for
let startBtnEl = $(".start-quiz-btn");
let highScoresBtnEl = $(".high-scores-btn");
let answer1BtnEl = $("#answer-1-btn");
let answer2BtnEl = $("#answer-2-btn");
let answer3BtnEl = $("#answer-3-btn");
let answer4BtnEl = $("#answer-4-btn");
let backBtnEl = $(".back-btn");

// set up references for any content that needs to be dynamically changed

let landingPageEl = $(".landing-page");
let quizPageEl = $(".quiz-page");
let quizFinishPageEl = $(".quiz-finish-page");
let highScorePageEl = $(".high-score-page");

let topBarEl = $(".top-bar");
let answerResultEl = $(".answer-result");

let timerEl = $("#timer-number");
let questionEl = $(".question");
let answer1El = $("#answer-1");
let answer2El = $("#answer-2");
let answer3El = $("#answer-3");
let answer4El = $("#answer-4");

// set up event listeners
highScoresBtnEl.click(viewHighScores)
backBtnEl.click(goBack);
startBtnEl.click(startQuiz);

answer1El.click(choseIncorrect);

// define our questions along with their answers, identifying the correct answer as well.
let questions = [
    {
        questionText: "testQuestion",
        answers: [
            {
                text: "falseAnswer",
                isCorrect: false,
            },
            {
                text: "otherFalse",
                isCorrect: false,
            },
            {
                text: "correctAnswer",
                isCorrect: true,
            },
            {
                text: "falseFalse",
                isCorrect: false,
            }
        ]
    },
    {
        questionText: "otherTestQuestion",
        answers: [
            {
                text: "falseAnswer",
                isCorrect: false,
            },
            {
                text: "correctAnswer",
                isCorrect: true,
            },
            {
                text: "otherFalse",
                isCorrect: false,
            },
            {
                text: "falseFalse",
                isCorrect: false,
            }
        ]
    },
];

// function for shuffling the contents of the questions array so that the quiz is randomized
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


// define functions for use in event listeners

function startQuiz() {
    // hide every other page
    hidePage(landingPageEl);
    hidePage(quizPageEl);
    hidePage(quizFinishPageEl);
    hidePage(topBarEl);
    hidePage(answerResultEl);
    // display quiz page and top bar
    showBlockPage(topBarEl);
    showBlockPage(quizPageEl);

    startTimer()
}

let timeLeft = 60;

function startTimer() {
    // let timeLeft = timerEl.text();

    let countDownTimer = setInterval(function(){
        timeLeft--
        // timerEl.text(timeLeft);
        if(timeLeft == 0) {
            endGame();
        }
    }, 1000)
}


function choseIncorrect() {
    // decrease the timer by 10s and move on to the next question
    timerEl.text(timeLeft-10);

}

function viewHighScores() {
    // hide every other page
    hidePage(landingPageEl);
    hidePage(quizPageEl);
    hidePage(quizFinishPageEl);
    hidePage(topBarEl);
    hidePage(answerResultEl);

    // show high score page
    showFlexPage(highScorePageEl)
}

function goBack() {

    hidePage(quizPageEl);
    hidePage(quizFinishPageEl);
    hidePage(topBarEl);
    hidePage(answerResultEl);
    hidePage(highScorePageEl);

    showBlockPage(topBarEl);
    showFlexPage(landingPageEl)
}

// define functions for changing visibility of different pages
function hidePage(page) {
    page.removeClass(["d-flex", "d-block"]);
    page.addClass("d-none");
}

function showFlexPage(page) {
    page.removeClass("d-none");
    page.addClass("d-flex");
}

function showBlockPage(page) {
    page.removeClass("d-none");
    page.addClass("d-block");
}