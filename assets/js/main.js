window.onload = function () {
  let carta_presentacion = document.querySelector(".presentacion");
  let mostrar_presentacion = document.querySelector(".mostrar_presentacion");
  let icono_cerrar = document.querySelector("#icono_cerrar");


  if (carta_presentacion) {
    
    icono_cerrar.addEventListener("click", function () {
      carta_presentacion.classList.remove("animate__fadeInUp");
      carta_presentacion.style.display = "none";
      mostrar_presentacion.style.display = "flex";
    });
    mostrar_presentacion.addEventListener("click", function () {
      carta_presentacion.classList.add("animate__fadeInUp");
      carta_presentacion.style.display = "block";
      mostrar_presentacion.style.display = "none";
    });
  }
  //Al hacer scroll el header se pone fijo
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("header-fixed",window.scrollY>100);
  });
  //Condicion de grilla en proyectos
  let card = document.querySelectorAll(".card").length;
  if(card > 1 && card < 3){ document.querySelector(".contenedor_card").classList.add("gridTemplate2")
  }else if(card === 1){document.querySelector(".contenedor_card").classList.add("gridTemplate1")  
  }else{ document.querySelector(".contenedor_card").classList.add("gridTemplate3")}

//Redireccionar segun donde hizo click
let e_commerce = document.getElementById("e-commerce");
e_commerce.addEventListener("click", function(){
  window.location.href="ivanmartirena.github.io/proyecto_veterinaria";
});
};
