

/*-Funcão Tema--*/
function tema(){
    const corFundo = getComputedStyle(document.body).backgroundColor;
    const splineEscura = document.querySelector(".spline-escura");
    const splineClara = document.querySelector(".spline-clara");

    if (corFundo === "rgb(0, 0, 0)"){

        document.querySelector(".divBtnTema").style.flexDirection = "row-reverse"; 
        document.querySelector(".spanBtn").innerHTML = '☼︎'
        splineEscura.style.display = "none";
        splineClara.style.display = "block";
        document.documentElement.setAttribute('tema', 'light');
    }
    else{
        document.documentElement.removeAttribute('tema');
        document.querySelector(".divBtnTema").style.flexDirection = "row"; 
        document.querySelector(".spanBtn").innerHTML = '­­⏾'
        splineClara.style.display = "none";
        splineEscura.style.display = "block";
    }
}


/*Função animação Section Sobre*/

document.addEventListener("DOMContentLoaded", () => {
    const containerSobre = document.querySelector('.conteinerSobre');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
           
            if (entry.isIntersecting) {
                containerSobre.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

  
    observer.observe(containerSobre);
});
   