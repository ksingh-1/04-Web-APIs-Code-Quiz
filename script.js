
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
    }
}

$("#start-button").one("click", function() {
    $("p, #start-button").hide();
    $("#answers-button").show();
    gameStart();
    startTimer();
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
    }
}
    



// Questions

var questions = [
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
        question: "the .md in the README.md stands for?",
        answers: ["Made Directory", "Mark Down", "Mc Donalds", "Managed Dropdown"],
        correct: "Mark Down"
    },
    {
        question: "What does .js stand for?",
        answers: ["Java Source", "Justified Source", "Justified Script", "Javascript"],
        correct: "Javascript"
    },

]