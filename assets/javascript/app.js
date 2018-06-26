// Timer
var seconds = 60;
var timer;
$('#timer').text(seconds)
function startTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(timer);
    }
}

// Start game
$('#start').on('click',function(){
    timer = setInterval(startTimer, 1000);
    $('#counter').show();
    $('#body').show();
    $('#counter').append(this);
    $('#start').hide();
});

// Questions
var correct = 0;
var incorrect = 0;
var unanswered = 0;
function yearFounded(){
    var answer = document.forms['year-founded']['year-founded'].value;
    if (answer == '1986'){
        $('#year-founded-correct').show();
        $('#year-founded').html($('#year-founded-correct'));
    }
    console.log(answer);
}
function firstFilm(){
    var answer = document.forms['first-film']['first-film'].value;
    if (answer == 'toy-story'){
        correctAnswer = 1;
        wrongAnswer = 0;
    }else{
        correctAnswer = 0;
        wrongAnswer = 1;
    }
    console.log(answer)
    console.log(correctAnswer);
    console.log(wrongAnswer);
}