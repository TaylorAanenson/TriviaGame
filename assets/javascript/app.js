// Start game
function startGame(){
    $('#start').hide();
    $('#counter').show();
    $('#body').show();
    $('#year-founded').show();
    gameTimer = setInterval(yearFoundedTimer, 1000);
}

// Question timers
var seconds = 15;
var gameTimer;
$('#timer').text(seconds)

function yearFoundedTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        yearFounded();
    }
}

function firstFilmTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        firstFilm();
    }
}

function woodysSayingTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        woodysSaying();
    }
}

function dugBreedTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        dugBreed();
    }
}

function kevinFoodTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        kevinFood();
    }
}

function monstersPowerTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        monstersPower();
    }
}

function bugScareTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        bugScare();
    }
}

function nemoGangTimer(){
    seconds--;
    $('#timer').text(seconds)
    if (seconds == 0){
        clearInterval(gameTimer);
        nemoGang();
    }
}

// After question timers
var afterQuestionSeconds = 5;
var afterQuestionTimer;

function afterYearFoundedTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#year-founded-correct').hide();
        $('#year-founded-incorrect').hide();
        $('#year-founded-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Pixar Trivia!');
        $('#counter').show();
        $('#first-film').show();
        gameTimer = setInterval(firstFilmTimer, 1000);
    }
}

function afterFirstFilmTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#first-film-correct').hide();
        $('#first-film-incorrect').hide();
        $('#first-film-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Pixar Trivia!');
        $('#counter').show();
        $('#woodys-saying').show();
        gameTimer = setInterval(woodysSayingTimer, 1000);
    }
}

function afterWoodysSayingTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#woodys-saying-correct').hide();
        $('#woodys-saying-incorrect').hide();
        $('#woodys-saying-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Pixar Trivia!');
        $('#counter').show();
        $('#dug-breed').show();
        gameTimer = setInterval(dugBreedTimer, 1000);
    }
}

function afterDugBreedTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#dug-breed-correct').hide();
        $('#dug-breed-incorrect').hide();
        $('#dug-breed-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Pixar Trivia!');
        $('#counter').show();
        $('#kevin-food').show();
        gameTimer = setInterval(kevinFoodTimer, 1000);
    }
}

function afterKevinFoodTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#kevin-food-correct').hide();
        $('#kevin-food-incorrect').hide();
        $('#kevin-food-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Pixar Trivia!');
        $('#counter').show();
        $('#monsters-power').show();
        gameTimer = setInterval(monstersPowerTimer, 1000);
    }
}

function afterMonstersPowerTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#monsters-power-correct').hide();
        $('#monsters-power-incorrect').hide();
        $('#monsters-power-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Pixar Trivia!');
        $('#counter').show();
        $('#bug-scare').show();
        gameTimer = setInterval(bugScareTimer, 1000);
    }
}

function afterBugScareTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#bug-scare-correct').hide();
        $('#bug-scare-incorrect').hide();
        $('#bug-scare-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Pixar Trivia!');
        $('#counter').show();
        $('#nemo-gang').show();
        gameTimer = setInterval(nemoGangTimer, 1000);
    }
}

function afterNemoGangTimer(){
    afterQuestionSeconds--;
    if (afterQuestionSeconds == 0){
        clearInterval(afterQuestionTimer);
        seconds = 15;
        $('#timer').text(seconds);
        afterQuestionSeconds = 5;
        $('#nemo-gang-correct').hide();
        $('#nemo-gang-incorrect').hide();
        $('#nemo-gang-out').hide();
        $('#correct-answer').hide();
        $('#title').text('Good Job!');
        $('#counter').hide();
        endGame();
        $('#end-game').show();
    }
}

// Questions
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function yearFounded(){
    var answer = document.forms['year-founded']['year-founded'].value;
    if (answer == '1986'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#year-founded').hide();
        $('#year-founded-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterYearFoundedTimer, 1000);
    }else if (answer == '1993'||answer == '1990'||answer == '1989'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was 1986');
        $('#correct-answer').show();
        $('#year-founded').hide();
        $('#year-founded-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterYearFoundedTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was 1986');
        $('#correct-answer').show();
        $('#year-founded').hide();
        $('#year-founded-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterYearFoundedTimer, 1000);
    }
}

function firstFilm(){
    var answer = document.forms['first-film']['first-film'].value;
    if (answer == 'toy-story'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#first-film').hide();
        $('#first-film-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterFirstFilmTimer, 1000);
    }else if (answer == 'a-bugs-life'||answer == 'monsters-inc'||answer == 'finding-nemo'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Toy Story');
        $('#correct-answer').show();
        $('#first-film').hide();
        $('#first-film-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterFirstFilmTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Toy Story');
        $('#correct-answer').show();
        $('#first-film').hide();
        $('#first-film-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterFirstFilmTimer, 1000);
    }
}

function woodysSaying(){
    var answer = document.forms['woodys-saying']['woodys-saying'].value;
    if (answer == 'snake'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#woodys-saying').hide();
        $('#woodys-saying-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterWoodysSayingTimer, 1000);
    }else if (answer == 'reach'||answer == 'deputy'||answer == 'town'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Andy');
        $('#correct-answer').show();
        $('#woodys-saying').hide();
        $('#woodys-saying-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterWoodysSayingTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Andy');
        $('#correct-answer').show();
        $('#woodys-saying').hide();
        $('#woodys-saying-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterWoodysSayingTimer, 1000);
    }
}

function dugBreed(){
    var answer = document.forms['dug-breed']['dug-breed'].value;
    if (answer == 'golden-retriever'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#dug-breed').hide();
        $('#dug-breed-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterDugBreedTimer, 1000);
    }else if (answer == 'doberman-pinscher'||answer == 'bulldog'||answer == 'rottweiler'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Golden Retriever');
        $('#correct-answer').show();
        $('#dug-breed').hide();
        $('#dug-breed-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterDugBreedTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Golden Retriever');
        $('#correct-answer').show();
        $('#dug-breed').hide();
        $('#dug-breed-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterDugBreedTimer, 1000);
    }
}

function kevinFood(){
    var answer = document.forms['kevin-food']['kevin-food'].value;
    if (answer == 'chocolate'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#kevin-food').hide();
        $('#kevin-food-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterKevinFoodTimer, 1000);
    }else if (answer == 'crackers'||answer == 'granola'||answer == 'chips'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Chocolate');
        $('#correct-answer').show();
        $('#kevin-food').hide();
        $('#kevin-food-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterKevinFoodTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Chocolate');
        $('#correct-answer').show();
        $('#kevin-food').hide();
        $('#kevin-food-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterKevinFoodTimer, 1000);
    }
}

function monstersPower(){
    var answer = document.forms['monsters-power']['monsters-power'].value;
    if (answer == 'screams'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#monsters-power').hide();
        $('#monsters-power-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterMonstersPowerTimer, 1000);
    }else if (answer == 'laughs'||answer == 'crys'||answer == 'whispers'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Screams');
        $('#correct-answer').show();
        $('#monsters-power').hide();
        $('#monsters-power-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterMonstersPowerTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Screams');
        $('#correct-answer').show();
        $('#monsters-power').hide();
        $('#monsters-power-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterMonstersPowerTimer, 1000);
    }
}

function bugScare(){
    var answer = document.forms['bug-scare']['bug-scare'].value;
    if (answer == 'bird'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#bug-scare').hide();
        $('#bug-scare-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterBugScareTimer, 1000);
    }else if (answer == 'frog'||answer == 'spider'||answer == 'mouse'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was A Bird');
        $('#correct-answer').show();
        $('#bug-scare').hide();
        $('#bug-scare-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterBugScareTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was A Bird');
        $('#correct-answer').show();
        $('#bug-scare').hide();
        $('#bug-scare-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterBugScareTimer, 1000);
    }
}

function nemoGang(){
    var answer = document.forms['nemo-gang']['nemo-gang'].value;
    if (answer == 'gill'){
        $('#title').text('Correct!');
        $('#counter').hide();
        $('#nemo-gang').hide();
        $('#nemo-gang-correct').show();
        clearInterval(gameTimer);
        correct++;
        afterQuestionTimer = setInterval(afterNemoGangTimer, 1000);
    }else if (answer == 'bloat'||answer == 'peach'||answer == 'bubbles'){
        $('#title').text('Nope!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Gill');
        $('#correct-answer').show();
        $('#nemo-gang').hide();
        $('#nemo-gang-incorrect').show();
        clearInterval(gameTimer);
        incorrect++;
        afterQuestionTimer = setInterval(afterNemoGangTimer, 1000);
    }else if (seconds == 0){
        $('#title').text('Out of time!');
        $('#counter').hide();
        $('#correct-answer').text('The correct answer was Gill');
        $('#correct-answer').show();
        $('#nemo-gang').hide();
        $('#nemo-gang-out').show();
        clearInterval(gameTimer);
        unanswered++;
        afterQuestionTimer = setInterval(afterNemoGangTimer, 1000);
    }
}

function endGame(){
    $('#correct').text('Correct: '+correct)
    $('#incorrect').text('Incorrect: '+incorrect)
    $('#unanswered').text('Unanswered: '+unanswered)
}

function tryAgain(){
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    seconds = 15;
    $('#end-game').hide();
    $('#title').text('Pixar Trivia!');
    $('#counter').show();
    $('#year-founded').show();
    gameTimer = setInterval(yearFoundedTimer, 1000);
}