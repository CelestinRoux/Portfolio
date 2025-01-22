document.addEventListener("DOMContentLoaded", function () {
    const objectifs = document.querySelectorAll(".objectif-title");

    objectifs.forEach((objectif) => {
        objectif.addEventListener("click", function () {
            objectifs.forEach((otherObjectif) => {
                if (otherObjectif !== objectif) {
                    otherObjectif.parentElement.classList.remove("open");
                    document.querySelector("#objectif" + otherObjectif.id).style.display = "none";
                }
            });

            if (objectif.parentElement.classList.contains("open")) {
                objectif.parentElement.classList.remove("open")
                document.querySelector("#objectif" + objectif.id).style.display = "none"
            } else {
                objectif.parentElement.classList.add("open")
                document.querySelector("#objectif" + objectif.id).style.display = "flex"
            }
        })
    })
})