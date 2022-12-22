var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keydown(function () {
  nextSequence();
});

function nextSequence() {
  userClickedPattern = [];
  level += 1;
  var random = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColor[random];
  gamePattern.push(randomChosenColour);

  $("h1").text("Level " + level);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playAudio(randomChosenColour);
}

$("div.btn").click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playAudio(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(contador) {
  if (userClickedPattern[contador] === gamePattern[contador]) {
    console.log("Bien");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Mal");
  }
}

function playAudio(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  //audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
