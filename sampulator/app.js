window.addEventListener('keyup', function (input){
  var key = String.fromCharCode(input.keyCode);

  var music = document.getElementById("music-" + key.toLowerCase());

  if(music){
    music.currentTime = 0;
    music.play();
  };

  var key = key.toLowerCase();
  var button = document.getElementById(key);
  var rowOne = ["q", "w", "e", "r", "t"];
  var rowTwo = ["a", "s", "d", "f", "g"];

  if(rowOne.indexOf(key) >= 0){
    buttonActive("activeR1");
  } else if(rowTwo.indexOf(key) >= 0) {
    buttonActive("activeR2");
  }

  function buttonActive(active){
    if(button.classList.contains(active)){
      button.classList.remove(active);
      button.classList.remove('active');
    }

    button.classList.add('active');
    button.classList.add(active);

    button.addEventListener('animationend', function(){
      button.classList.remove(active);
      button.classList.remove('active');
    });
  }
});
