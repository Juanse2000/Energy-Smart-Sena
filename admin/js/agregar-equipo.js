window.onload = function(){
    document.getElementById("boton-agregar-equipo").onclick=registrarme;   
}

function validarEspacios(e){
	var procesador = document.getElementById("procesador").value;
    var ram = document.getElementById("ram").value;
    var tarjetaGrafica = document.getElementById("tarjeta-grafica").value;
    var almacenamiento = document.getElementById("tipo-almacenamiento").value;
    var pantalla = document.getElementById("pantalla").value;
    var board = document.getElementById("board").checked;
    var fuente = document.getElementById("fuente").checked;

	expresion =  /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(procesador === "" || ram === "" || tarjetaGrafica === "" || almacenamiento === "" || pantalla === "" || board === "" || fuente === ""){
		Swal.fire({
            title: "Debe completar los campos",
            timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }

}

function registrarme(e){
	validarEspacios(e);	
	e.preventDefault();
}