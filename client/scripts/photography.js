function changeClass(menuItem){
  return function(){
    menuItem.classList.add('active');
  };
};

window.addEventListener('load', function(){
  var menuItem = document.querySelectorAll('.type');

  for(var i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', changeClass(menuItem[i]));
  }
});
