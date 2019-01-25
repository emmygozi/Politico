if (screen.width <= 720) {
  let tableName = document.getElementsByTagName("table")[0];
  tableName.style.height = "50vh";
  tableName.style.width = "80%";
  tableName.style.fontSize = "2rem";

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
      dropContainer.style.width = "100vh";
    }
  };
}
