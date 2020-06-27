let ubicacionPrincipal = window.pageYOffset;

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActaul = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActaul){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal=desplazamientoActaul; 
})

//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo= true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=true;
    }
    enlacesHeader.classList.toggle("menudos")
})

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".go-top-container")
        .classList.add("show");
    }else{
        document.querySelector(".go-top-container")
        .classList.remove("show");
    }
}

document.querySelector(".go-top-container")
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})