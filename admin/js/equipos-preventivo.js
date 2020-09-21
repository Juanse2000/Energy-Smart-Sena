window.onload = function(){
    document.getElementById("boton-agregar-equipo-preventivo").onclick=agregarPreventivo;
    document.getElementById("boton-modificar-equipo-preventivo1").onclick=modificarPreventivo;
    document.getElementById("boton-eliminar-equipo-preventivo1").onclick=eliminarPreventivo;
    document.getElementById("boton-modificar-equipo-preventivo2").onclick=modificarPreventivo2;
    document.getElementById("boton-eliminar-equipo-preventivo2").onclick=eliminarPreventivo;
}

function validarEspacios(e){
	var codigoEquipo = document.getElementById("codigo-equipo").value;
    var fechaIngreso = document.getElementById("fecha-ingreso-preventivo").value;
    var fechaSalida = document.getElementById("fecha-salida-preventivo").value;
    var administrador = document.getElementById("administrador-preventivo").value;
    var tipo = document.getElementById("tipo-preventivo").value;
    var observaciones = document.getElementById("texto-preventivo").value;

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

function agregarPreventivo(e){
	validarEspacios(e);	
	e.preventDefault();
}

function editarEquipo1(e){
    var codigoEquipo = document.getElementById("codigo-equipo1").value;
    var fechaIngreso = document.getElementById("fecha-ingreso-preventivo1").value;
    var fechaSalida = document.getElementById("fecha-salida-preventivo1").value;
    var administrador = document.getElementById("administrador-preventivo1").value;
    var tipo = document.getElementById("tipo-preventivo1").value;
    var observaciones = document.getElementById("texto-preventivo1").value;

    if(codigoEquipo === "" && fechaIngreso === "" && fechaSalida === "" && administrador === "" && tipo === "" && observaciones === ""){
		Swal.fire({
            title: "No modifico ningun elemento",
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
            confirmButtonText: 'Si, modificar',
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

function modificarPreventivo(e){
	editarEquipo1(e);	
	e.preventDefault();
}

function editarEquipo1(e){
    var codigoEquipo = document.getElementById("codigo-equipo2").value;
    var fechaIngreso = document.getElementById("fecha-ingreso-preventivo2").value;
    var fechaSalida = document.getElementById("fecha-salida-preventivo2").value;
    var administrador = document.getElementById("administrador-preventivo2").value;
    var tipo = document.getElementById("tipo-preventivo2").value;
    var observaciones = document.getElementById("texto-preventivo2").value;

    if(codigoEquipo === "" && fechaIngreso === "" && fechaSalida === "" && administrador === "" && tipo === "" && observaciones === ""){
		Swal.fire({
            title: "No modifico ningun elemento",
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
            confirmButtonText: 'Si, modificar',
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

function modificarPreventivo2(e){
	editarEquipo1(e);	
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
            'Se ha eliminado este registro del inventario de mantenimiento Preventivo',
            'success',
          )
        }
      })
    }

function eliminarPreventivo(e){
	eliminarEquipo1(e);	
	e.preventDefault();
}