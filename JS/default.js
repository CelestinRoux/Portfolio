document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("button-menu");
  let lien = document.getElementById("div-lien");

  menu.addEventListener("click", () => {
    lien.classList.toggle("show");

    if (lien.classList.contains("show")) {
      lien.style.display = "flex";
    } else {
      lien.style.display = "none";
    }

    menu.classList.toggle("active");
  });
});
