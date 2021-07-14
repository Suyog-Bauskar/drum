function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = $("." + currentKey);
  activeButton.addClass("pressed");
  setTimeout(function() {
      activeButton.removeClass("pressed");
  }, 100);

}

$(document).on("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

$(".w").click(function() {
    makeSound("w");

    buttonAnimation("w");
});

$(".a").click(function() {
    makeSound("a");

    buttonAnimation("a");
});

$(".s").click(function() {
    makeSound("s");

    buttonAnimation("s");
});

$(".d").click(function() {
    makeSound("d");

    buttonAnimation("d");
});

$(".j").click(function() {
    makeSound("j");

    buttonAnimation("j");
});

$(".k").click(function() {
    makeSound("k");

    buttonAnimation("k");
});

$(".l").click(function() {
    makeSound("l");

    buttonAnimation("l");
});
