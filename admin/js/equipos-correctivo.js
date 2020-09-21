window.onload = function(){
    document.getElementById("boton-agregar-equipo-correctivo").onclick=agregarCorrectivo;
    document.getElementById("boton-modificar-equipo-correctivo1").onclick=modificarCorrectivo;
    document.getElementById("boton-eliminar-equipo-correctivo1").onclick=eliminarCorrectivo;
}

function validarEspacios(e){
	var codigoEquipo = document.getElementById("codigo-equipo-correctivo").value;
    var fechaIngreso = document.getElementById("fecha-ingreso-correctivo").value;
    var fechaSalida = document.getElementById("fecha-salida-correctivo").value;
    var administrador = document.getElementById("admin-correctivo").value;
    var tipo = document.getElementById("tipo-correctivo").value;
    var observaciones = document.getElementById("texto-correctivo").value;

    if(codigoEquipo === "" || fechaIngreso === "" || fechaSalida === "" || administrador === "" || tipo === "" || observaciones === ""){
		Swal.fire({
            title: "Debe completar los campos",
            timer: 3000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else{
        Swal.fire({
            title: '¿Seguro que quiere agregar un nuevo equipo a mantenimiento preventivo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, agregar',
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Nuevo Equipo Agregado',
                'Ha agregado un nuevo equipo al mantenimiento preventivo',
                'success',
              )
            }
          })
    }

}

function agregarCorrectivo(e){
	validarEspacios(e);	
	e.preventDefault();
}

function modificarCorrectivo(e){
	var codigoEquipo = document.getElementById("codigo-pc-correctivo1").value;
    var fechaIngreso = document.getElementById("fecha-ingreso-correctivo1").value;
    var fechaSalida = document.getElementById("fecha-salida-correctivo1").value;
    var administrador = document.getElementById("administrador-correctivo1").value;
    var tipo = document.getElementById("tipo-m-correctivo1").value;
    var observaciones = document.getElementById("texto-correctivo1").value;

    if(codigoEquipo === "" && fechaIngreso === "" && fechaSalida === "" && administrador === "" && tipo === "" && observaciones === ""){
		Swal.fire({
            title: "Debe completar los campos",
            timer: 3000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else{
        Swal.fire({
            title: '¿Seguro que quiere realizar los cambios?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, agregar',
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Valores Modificados Correctamente',
                'Se han modificado los valores del registro',
                'success',
              )
            }
          })
    }

}

function modificarCorrectivo(e){
	validarEspacios(e);	
	e.preventDefault();
}

function eliminarEquipo1(e){
    Swal.fire({
        title: '¿Seguro que quiere eliminar este registro?',
        text: 'No podra revertir esta accion',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Registro Eliminado Correctamente',
            'Se ha eliminado este registro del inventario de mantenimiento Correctivo',
            'success',
          )
        }
      })
    }

function eliminarCorrectivo(e){
	eliminarEquipo1(e);	
	e.preventDefault();
}