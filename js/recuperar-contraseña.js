window.onload = function(){
    document.getElementById("recuperar-boton").onclick=iniciarSesion;   
}

function validarEspacios(e){
    var correo = document.getElementById("recuperar-email").value;
    var contraseña = document.getElementById("recuperar-contraseña").value;
    var contraseña2 = document.getElementById("recuperar-validar-contraseña").value;

	expresion =  /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(correo === "" || contraseña === "" || contraseña2 === ""){
		Swal.fire({
            title: "Completar los campos",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(!(expresionCorreo.test(correo))){
		Swal.fire({
            title: "Correo no valido",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(correo.length > 100 || correo.length < 6){
        Swal.fire({
            title: "El correo debe tener entre 6 y 100 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(!(expresion.test(contraseña))){
		Swal.fire({
            title: "Contraseña no valida",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(contraseña.length > 20 || contraseña.length < 5){
        Swal.fire({
            title: "Contraseña debe tener entre 6 y 20 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        });         
    }
    else if(!(expresion.test(contraseña2))){
		Swal.fire({
            title: "Contraseña no valida",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(contraseña2.length > 20 || contraseña2.length < 5){
        Swal.fire({
            title: "Contraseña debe tener entre 6 y 20 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        });         
    }
    else if(contraseña != contraseña2){
        Swal.fire({
            title: "Las contraseñas no coinciden",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else{
        Swal.fire({
            title: "Esta a punto de cambiar su contraseña",
            text: "Hemos enviado un mensaje a su correo electronico para validar la peticion",
            timer: 6000,
        icon: 'success',
        showConfirmButton: false,
        }); 
        e.preventDefault();	
    }
}
function iniciarSesion(e){
	validarEspacios(e);	
	e.preventDefault();
}
