
document.oncontextmenu = function(){return false;}

function header(){
    window.addEventListener("scroll", function(){
        var header = document.querySelector(".navbar");
        let a_inicio = document.querySelector("#Inicio");
        let navbar_collapse =document.querySelector(".container-content-header");
        let img_me = document.querySelector("#AboutMe");
       // 

        if(window.scrollY>50){
            header.classList.add('fixed-top'); //Fijo el Header
            header.classList.add('navbar-dark', 'bg-dark') //Le cambio las clases a dark
            header.classList.add('animate__animated','animate__slideInDown'); //Le doy animacion a las nuevas clases
            navbar_collapse.style.background="#212529";
            navbar_collapse.style.color="#white";
        
            
        }else{
            navbar_collapse.style.background="transparent";
            header.classList.remove('navbar-dark', 'bg-dark','animate__animated','animate__slideInDown')
            a_inicio.classList.add('active');
            img_me.classList.remove('animate__animated','animate__fadeInUp');

            
        }

        if(window.scrollY>145){
            img_me.classList.add('animate__animated','animate__slideInUp'); //Agrego animacion a la imagen

        }else{
            img_me.classList.remove('animate__animated','animate__fadeInUp'); 

        }


    })

}

//Boton de subir arriba

buttonUp = document.getElementById("content_arrow-up");

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    window.scrollTo (0, currentScroll / currentScroll );
  
}

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (window.scrollY >= 100){ //Aparece el BotonUP en Scoll >= 100
        buttonUp.style.display="block";
        buttonUp.style.transform = "scale(1)";
       
    } else 
    if(window.scrollY < 600){ //Desaparezco el ButtonUP
        buttonUp.style.transform = "scale(0)";
    }

}

buttonUp.addEventListener("click", scrollUp);


//Alerta de "No hay Proyectos"
let clas = document.querySelector("#IrProyectos");
let hasClaseDisable = clas.classList.contains( 'disabled' );
let mensaje_error =document.getElementById("Alert_Disabled")
let buscar = document.getElementById("BuscadorBlog");

    function buscador(){

        if(hasClaseDisable==true){
            mensaje_error.style.display="block";
            setTimeout(() => {
                mensaje_error.style.display="none";
                
              }, 3000);

    }else{
       
        if(buscar.value=="Proyectos"){
            window.location.href="/Proyectos/proyectos.html";
        }else 
            if(buscar.value=="Login"){
                window.location.href= "/Proyectos/Login/index.html";
            }else
                 if(buscar.value==""){
                 window.location.href= "/Proyectos/Login/index.html";

            }
        }
    }

    