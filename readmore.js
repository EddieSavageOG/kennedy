function readMore() {
      let togg = document.querySelectorAll(".toggle");
      let mores = document.querySelectorAll(".more");

      if (togg[0].innerText === "read more") {
          for (let i = 0; i < mores.length; i++) {
              mores[i].style.display = "block";
          };
          togg[0].innerText = "read less";
      } else {
          for (let i = 0; i < mores.length; i++) {
              mores[i].style.display = "none";
          };
          togg[0].innerText = "read more";
      }
  }
  