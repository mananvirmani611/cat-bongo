
document.getElementById("left-button").addEventListener("click", myFunctionR);

function myFunctionL() {
  document.getElementById("main").classList.add("invisible");
  document.getElementById("imgL").classList.remove("invisible");

  var audio = new Audio('voice1.wav');
  audio.play();

setTimeout( function(){
  document.getElementById("imgL").classList.add("invisible");
  document.getElementById("main").classList.remove("invisible");
},100);

}


document.getElementById("right-button").addEventListener("click", myFunctionL);
function myFunctionR() {
  document.getElementById("main").classList.add("invisible");
  document.getElementById("imgR").classList.remove("invisible");

  var audio = new Audio('voice2.wav');
  audio.play();

setTimeout( function(){
  document.getElementById("imgR").classList.add("invisible");
  document.getElementById("main").classList.remove("invisible");
},100);

}
