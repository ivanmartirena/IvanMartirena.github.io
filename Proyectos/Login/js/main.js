
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