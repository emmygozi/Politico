

/* if (screen.width <= 720) {
  document.getElementById("mynav-flex-container").style.display = "flex";
  document.getElementById("nav-flex-container").style.display = "none";
  document.getElementById("image-text").style.width = "100%";

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

}
 */

let dropContainer = document.getElementById("drop-down-container");
ham.onclick = function() {
  ham.style.height = "2rem";
  if (dropContainer.style.display == "block") {
    dropContainer.style.display = "none";
  } else {
    dropContainer.style.display = "block";
  }
};
