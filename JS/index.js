document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelector(".img-centrale");
  const overlayImage = document.querySelector("#overlay-centrale");
  const divs = document.querySelectorAll(".hidden-div");

  let isVisible = false;
  let isAnimating = false;

  overlayImage.addEventListener("click", function() {
    if (isAnimating) return;

    isVisible = !isVisible;
    isAnimating = true;

    if (isVisible) {
      divs.forEach((div, index) => {
        setTimeout(() => {
          div.classList.add("show");
          if (index === divs.length - 1) {
            isAnimating = false; // Fin de l'animation
          }
        }, index * 200);   
        
        div.addEventListener("click", function () {
          const id = div.id.replace('div', '')
          const modal = document.getElementById('modal' + id)
          modal.style.display = "block"
          
          modal.querySelector('.close').addEventListener("click", function () {
            modal.style.display = "none"
          })

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          } 
        })

      });      

      image.classList.remove("animation-breathing");
      overlayImage.classList.remove("animation-breathing");      
    } else {
      [...divs].reverse().forEach((div, index) => {
        setTimeout(() => {
          div.classList.remove("show");
          if (index === divs.length - 1) {
            isAnimating = false; // Fin de l'animation
          }
        }, index * 200);        
      });      

      image.classList.add("animation-breathing");
      overlayImage.classList.add("animation-breathing");
    }
  });
});
