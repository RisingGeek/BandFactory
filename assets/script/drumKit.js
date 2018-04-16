window.addEventListener('keydown', playSound);
function playSound(e) {
   var audio = document.querySelectorAll('audio');
   var drumKit = document.getElementById('drumkit');
   var ul = drumKit.querySelector('ul');
   var li = ul.querySelectorAll('li');
   for(var i in audio) {
       if(e.keyCode==audio[i].getAttribute('data-key')) {
           audio[i].play();
           audio[i].currentTime=0;
           li[i].classList.add('playing');
           li[i].addEventListener('transitionend', stopAnimation);
           li[i].addEventListener('webkitTransitionEnd', stopAnimation);
           function stopAnimation() {
               li[i].classList.remove('playing');
           }
           break;
       }
   }
}