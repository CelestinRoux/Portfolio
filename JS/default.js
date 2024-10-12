let fleche = document.getElementById("button-fleche");
let lien = document.getElementById("div-lien");
fleche.addEventListener("click", () => {
  if(getComputedStyle(lien).display != "none"){
    lien.style.display = "none";
  } else {
    lien.style.display = "flex";
  }
  
})