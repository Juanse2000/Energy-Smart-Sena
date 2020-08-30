window.onload = function(){
    document.getElementById("login-boton").onclick=iniciarSesion;   
}

function validarEspacios(e){
    var correo = document.getElementById("login-email").value;
    var contraseña = document.getElementById("login-contraseña").value;

	expresion =  /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(correo === "" || contraseña === ""){
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
    else{
        if(contraseña == "123456" && correo == "admin@gmail.com"){
            window.location.href = '../admin/interface-admin.html'
        }
        else if( contraseña == "987654" && correo == "cliente1@gmail.com"){
            window.location.href = '../cliente/interfaz-cliente.html'
        } 
        else{
            Swal.fire({
                title: "credenciales no validas",
                timer: 1000,
            icon: 'error',
            showConfirmButton: false,
            }); 
        }
        e.preventDefault();	
    }
}
function iniciarSesion(e){
	validarEspacios(e);	
	e.preventDefault();
}
