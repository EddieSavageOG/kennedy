flipping(); 

function flipping () {
let flippers = document.getElementsByClassName("flip");

for (let i = 0; i < flippers.length; i++) {
      console.log("three")
      if (flippers[i].style.display != "block") {
            flippers[i].style.color = "red";
            console.log("one")
      }else{
      flippers[i].style.display = "block";
      console.log("yes")
      }

      setTimeout(function() {flipping()}, 5000);
}
};