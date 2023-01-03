
let BDusr=["admin","empleado"];
let BDpwd=["admin","empleado"];

function login(){
    let inputUser = document.getElementById("inputUser");
    let inputPass = document.getElementById("inputPass");
    let userExists = 0;
    let PswdCorrect = 0;
    let count = 0;
    BDusr.forEach(function (v, i, a) { //Recorro el array
        count++;
        if (inputUser.value == v) { //Verifico si el usuario esta en el array
            console.log('Usuario existe ' + i)
            userExists = 1;
            if (inputPass.value == BDpwd[i]) { //Compruebo si la contraseña coincide
                PswdCorrect = 1;
            }
        }
        if(count==BDusr.length){
       

            if (userExists == 1) { //Si usuario existe...
                inputUser.classList.remove('is-invalid');

                if (PswdCorrect == 1) { //Y si la contraseña coincide
                    inputPass.classList.add('is-valid');
                    inputPass.classList.remove('is-invalid');

                } else { //si la Contraseña  no coincide
                    inputPass.classList.add('is-invalid');

                }
            } else { //Usuario no existe
                inputUser.classList.add('is-invalid');

            }
        }
        });
}

function register(){
    let button_register = document.getElementById("Registrar");
    let container_login = document.getElementById("container_form_login");
    let container_register = document.getElementById("container_form_register");
    let container_imagen = document.getElementById("container_imagen");

    button_register.addEventListener('click', function(){ //Texto de NO tienes cuenta
        container_imagen.classList.add('toggle');
        container_login.style.display="none";
        container_register.style.display="block";
        container_register.classList.add('toggle');

    })

    let button_iniciar_sesion = document.getElementById("iniciar_sesion");

    button_iniciar_sesion.addEventListener('click', function(){ //Texto de iniciar sesion
        container_register.style.display="none";
        container_login.style.display="block";   
        container_imagen.classList.remove('animate__fadeInRight','toggle');
        container_imagen.classList.add('animate__fadeInLeft');
        container_register.classList.remove('toggle');
    })
}