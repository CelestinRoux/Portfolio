document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-title");

    projects.forEach((project) => {
        project.addEventListener("click", function () {
            projects.forEach((otherProject) => {
                if (otherProject !== project) {
                    otherProject.parentElement.classList.remove("open");
                    document.querySelector("#project" + otherProject.id).style.display = "none";
                }
            });

            if (project.parentElement.classList.contains("open")) {
                project.parentElement.classList.remove("open")
                document.querySelector("#project" + project.id).style.display = "none"
            } else {
                project.parentElement.classList.add("open")
                document.querySelector("#project" + project.id).style.display = "flex"
            }
        })
    })


    var nbr = 0;
    const carrouselContainers = document.querySelectorAll(".carrousel-container");

    carrouselContainers.forEach((carrouselContainer) => {
        var project_name = carrouselContainer.id.split('-')[0]
        console.log(project_name)
        switch(project_name) {
            case 'pickomino':
                nbr = 4
                break
            case 'puissance4':
                nbr = 6
                break
            case 'antoineFactory':
                nbr = 5
                break
            case 'EMS':
                nbr = 6
                break
            case 'velo':
                nbr = 5
                break
        }

        for(i=1; i<=nbr; i++){
            var div = document.createElement("div")
            div.className = "carrousel-element"
            if (project_name == "pickomino"){
                var video = document.createElement("video");
                video.src = "../Img/"+project_name+"/vi"+i+".webm";
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.style.width = "100%";
                video.style.height = "auto";
                div.appendChild(video);
            }else{
                var image = document.createElement("img");
                image.src = "../Img/"+project_name+"/im"+i+".png";
                image.style.width = "100%";
                image.style.height = "auto";
                div.appendChild(image);
            }
            carrouselContainer.appendChild(div)
        }

        var p = 0; 

        carrouselContainer.parentElement.querySelector(".d").addEventListener("click", function () {
            if(p>-carrouselContainer.childNodes.length+2)
                p--;
            else
                p=0
            carrouselContainer.style.transform = "translate("+p*100+"%)"
            carrouselContainer.style.transition = "all 0.5s ease"
        })

        carrouselContainer.parentElement.querySelector(".g").addEventListener("click", function () {
            if(p<0)
                p++;
            else
                p=-carrouselContainer.childNodes.length+2
            carrouselContainer.style.transform = "translate("+p*100+"%)"
            carrouselContainer.style.transition = "all 0.5s ease"
        })
    })
})