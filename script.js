
$(document).ready(function() {
    var counter=-1;
    var userChoice= [];
    var userArr=[];
    var scores=100;

    function initializeGame() {
        $("#title").text("Coding Quiz");
        counter=-1;
        userChoice=[];
        scores=100;
        $("#main").show();
        $("#back", "#clear").hide();
    };
};

function frontPage (){
    pageTitleE1.textContent="Code Quiz Challenge!"
    introButtonE1.textContent="Start Quiz Now"
}

});

function gameStart() {
    if (counter===questions.length) {
        gameOver();
    }else if (scores <=0) {
        scores=0;
        gameover();
    }else {
        counter++;
        showQuestions();
    };
};

var remainTime=30;
var startCountdown="";
function timer() {
    startCountdown=
        setInterval(function (){
            countTimer()
        }, 1000);
    
    function countTimer() {
        document.getElementById("timer").innerHTML=remainTime+ "Time Left";
        remainTime--;
            if (remainTime===0{
                clearInterval(startCountdown);
                endGame();
        };
    };      
    
    introButtonE1.addEventListener("click", timer);
    introButtonE1.addEventListener("click", startGame);
    function startGame(){
        function showQuestion(){
            var currentQuestion=questions[currentQuestionIndex];
            if (currentQuestionIndex==questions.length){
                endgame();
                return;
            }
            buttonsBoxE1.innerHTML="";
            questionsE1.textContent=currentQuestion.question;

        function questionClick(){
            if(this.value===questions[currentQuestionIndex].correct){
                optionNode.textContent="Correct";
                currentQuestionIndex++;
            }else{
                if (remainTime>5){
                    remainTime-=5;
                }else{
                    remainTime=1;
                }
                    optionNode.textContent="Wrong";
                    currentQuestionIndex++;
                };
            };
        };
    showQuestion(); 

var pageTitleE1=document.getElementById("title");
var boxE1=document.getElementById("box");
var timerE1=document.getElementById("timer");
var buttonsBoxE1=document.getElementById("buttonsBox");
var formBoxE1=document.getElementById("formBox");
var scoresBoxE1=document.getElementById("scoresBox");
var introE1=document.querySelector(".intro");
var introButtonE1=document.querySelector(".introButton");
var questionButtonE1=document.querySelector(".questionButton");
var questionsE1=document.querySelector(".questions");
var scoreE1=document.querySelector(".score");



// Questions

var questions=[
    {
        question: "What are if/else statements encapsulated by?",
        answers: ["Brackets", "Quotation Marks", "Curly Brackets", "Parentheses"],
        correct: "Parentheses"
    },
    {
        question: "[0,1,2,3] represents a?",
        answers: ["Series of Numbers", "Array", "Method", "Function"],
        correct: "Array"
    },
    {
        question: "The .md in the README.md stands for?",
        answers: ["Made Directory", "Mark Down", "Mc Donalds", "Managed Dropdown"],
        correct: "Mark Down"
    },
    {
        question: "What does .js stand for?",
        answers: ["Java Source", "Justified Source", "Justified Script", "Javascript"],
        correct: "Javascript"
    },

]