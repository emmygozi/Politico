if (screen.width <= 720) {
    document.getElementById("mynav-flex-container").style.display = "flex";
    document.getElementById("signup-image-case").style.display = "none";
    document.getElementById("signup-case").style.width = "100%";
    document.getElementById("signup-header").style.textAlign = "center";
    let signupFlexContainer = document.getElementsByClassName(
      "signup-flex-container"
    );
    let signupInputCase = document.getElementById("signup-input-case").style;
    let smallFontSize = document.getElementsByClassName("small-font-size");
    let button = document.getElementsByClassName("button");
  
    for (let i = 0; i < signupFlexContainer.length; i++) {
      signupFlexContainer[i].style.height = "95vh";
    }
  
    for (let i = 0; i < smallFontSize.length; i++) {
      smallFontSize[i].style.marginTop = "-1.2rem";
      smallFontSize[i].style.fontSize = "22px";
    }
  
    for (let i = 0; i < button.length; i++) {
      button[i].style.fontSize = "25px";
    }
  
    let navStyles = document.getElementsByClassName("nav-styles"),
      i;
  
    for (let i = 0; i < navStyles.length - 1; i++) {
      navStyles[i].style.display = "none";
    }
  
    let pushRight = document.getElementById("push-right").style;
    pushRight.width = "100%";
    pushRight.backgroundColor = "#141534";
  
    let reg = document.getElementById("reg");
    reg.innerHTML = "POLITICO";
    reg.style.fontSize = "30px";
    let ham = document.getElementById("ham");
    ham.innerHTML = "<i class='fa fa-bars'>";
    ham.style.display = "block";
    ham.style.float = "right";
    ham.style.fontSize = "30px";
  
    let dropContainer = document.getElementById("drop-down-container");
    ham.onclick = function() {
      if (dropContainer.style.display == "block") {
        dropContainer.style.display = "none";
      } else {
        dropContainer.style.display = "block";
      }
    };
  }
  
