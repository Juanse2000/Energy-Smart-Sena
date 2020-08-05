window.onload = function(){ 
    document.getElementById("mensaje-boton").onclick=mensaje;  
}
function mensajeEnviar(e){
    var nombre= document.getElementById("mensaje-nombre").value;
    var correo = document.getElementById("mensaje-email").value;
    var telefono= document.getElementById("mensaje-telefono").value;
    var mensaje = document.getElementById("texto-mensaje").value;

    telefonox = /\d/;
	expresion =  /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || correo === "" || telefono === "" | mensaje === ""){
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
    else if(!(expresion.test(nombre))){
		Swal.fire({
            title: "Nombre no valido",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(nombre.length > 100 || nombre.length < 6){
        Swal.fire({
            title: "El nombre debe tener entre 6 y 100 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(!(telefonox.test(telefono))){
		Swal.fire({
            title: "Telefono no valido",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else if(telefono.length > 10 || telefono.length < 10){
        Swal.fire({
            title: "El telefono debe tener 10 caracteres",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else{
    Swal.fire({
        title: "Mensaje Enviado correctamente",
        timer: 1000,
    icon: 'success',
    showConfirmButton: false,
    }); 
    e.preventDefault();
    }
}

function mensaje(e){
	mensajeEnviar(e);	
	e.preventDefault();
}
