let flipp = 1;
let flippers = document.getElementsByClassName("flip");
for (i = 0; i < flippers.length; i++) {

      flippers[i].style.display = "none";
      if ((i+1) >= flippers.length) {
            i=0;
      }
      flippers[i+1].style.display = "block";
      

}