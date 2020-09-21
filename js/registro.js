window.onload = function(){
    document.getElementById("registrarse-boton").onclick=registrarme;   
}

function validarEspacios(e){
	var nombre = document.getElementById("registro-nombre").value;
    var correo = document.getElementById("registro-email").value;
    var contraseña = document.getElementById("registro-contraseña").value;
    var confirmarContraseña = document.getElementById("registro-validar-contraseña").value;
    var rol = document.getElementById("registro-rol").value;
    var check = document.getElementById("registro-check").checked;

	expresion =  /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || correo === "" || contraseña === "" || confirmarContraseña === "" || rol === "" || check === false){
		Swal.fire({
            title: "Debe completar los campos",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(!(expresionCorreo.test(correo))){
		Swal.fire({
            title: "Correo invalido",
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
    else if(confirmarContraseña.length < 6){
        Swal.fire({
            title: "La contraseña debe tener mas de 6 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(!(expresion.test(confirmarContraseña))){
		Swal.fire({
            title: "Contraseña de confirmacion no valida",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(contraseña.length < 6){
        Swal.fire({
            title: "La contraseña debe tener mas de 6 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
	}
	else if(!(expresion.test(nombre))){
		Swal.fire({
            title: "Nombre no valido",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(nombre.length > 20 || nombre.length < 6){
        Swal.fire({
            title: "El nombre debe tener entre 6 y 20 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(contraseña != confirmarContraseña){
        Swal.fire({
            title: "Las contraseñas no coinciden",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else{        
        if(rol == 'Administrador') {
            Swal.fire({
                title: "Registrado correctamente",
                text: 'Se ha registrado como administrador',
                timer: 4000,
            icon: 'success',
            showConfirmButton: false,
            });
        }
        else if(rol == 'Cliente') {
            Swal.fire({
                title: "Registrado correctamente",
                text: 'Se ha registrado como cliente',
                timer: 4000,
            icon: 'success',
            showConfirmButton: false,
            });
        }
    e.preventDefault();
    }
}

function registrarme(e){
	validarEspacios(e);	
	e.preventDefault();
}
