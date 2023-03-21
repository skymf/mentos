const body = document.querySelector("body"),
      navbartoside = body.querySelector(".navbartoside"),
      togglehome = body.querySelector(".toggle"),
      searchbtn = body.querySelector(".searchbox");

      togglehome.addEventListener("click", () =>{
        navbartoside.classList.toggle("close");
      });
      