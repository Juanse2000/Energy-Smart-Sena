window.onload = function(){
    document.getElementById("boton-agregar-equipo").onclick=registrarme;   
    document.getElementById("boton-editar-equipo-1").onclick=editar1;  
    document.getElementById("boton-eliminar-equipo-1").onclick=eliminar1;  
    document.getElementById("boton-editar-equipo-2").onclick=editar2;  
    document.getElementById("boton-eliminar-equipo-2").onclick=eliminar1;  
    document.getElementById("boton-editar-equipo-3").onclick=editar3;  
    document.getElementById("boton-eliminar-equipo-3").onclick=eliminar1;  
    document.getElementById("boton-editar-equipo-4").onclick=editar4;  
    document.getElementById("boton-eliminar-equipo-4").onclick=eliminar1;  
    document.getElementById("boton-editar-equipo-5").onclick=editar5;  
    document.getElementById("boton-eliminar-equipo-5").onclick=eliminar1;  
    document.getElementById("boton-editar-equipo-6").onclick=editar6;  
    document.getElementById("boton-eliminar-equipo-6").onclick=eliminar1;  
}

function validarEspacios(e){
	var procesador = document.getElementById("procesador").value;
    var ram = document.getElementById("ram").value;
    var tarjetaGrafica = document.getElementById("tarjeta-grafica").value;
    var almacenamiento = document.getElementById("tipo-almacenamiento").value;
    var pantalla = document.getElementById("pantalla").value;
    var board = document.getElementById("board").value;
    var fuente = document.getElementById("fuente").value;

    if(procesador === "" || ram === "" || tarjetaGrafica === "" || almacenamiento === "" || pantalla === "" || board === "" || fuente === ""){
		Swal.fire({
            title: "Debe completar los campos",
            timer: 2000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else{
        Swal.fire({
            title: '¿Seguro que quiere agregar un nuevo Equipo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, agregar',
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Nuevo Equipo Agregado',
                'Ha agregado un nuevo equipo al inventario',
                'success',
              )
            }
          })
    }

}

function registrarme(e){
	validarEspacios(e);	
	e.preventDefault();
}

function editarEquipo1(e){
    var procesador = document.getElementById("procesador1").value;
    var ram = document.getElementById("ram1").value;
    var tarjetaGrafica = document.getElementById("tarjeta-grafica1").value;
    var almacenamiento = document.getElementById("tipo-almacenamiento1").value;
    var pantalla = document.getElementById("pantalla1").value;
    var board = document.getElementById("board1").value;
    var fuente = document.getElementById("fuente1").value;
    var estado = document.getElementById("estado1").value;

    if(procesador === "" && ram === "" && tarjetaGrafica === "" && almacenamiento === "" && pantalla === "" && board === "" && fuente === "" && estado === ""){
		Swal.fire({
            title: "No modifico ningun elemento",
            timer: 3000,
        icon: 'warning',
        showConfirmButton: false,
        }); 
    }
    else{
        Swal.fire({
            title: '¿Seguro que quiere modificar los valores del equipo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, modificar',
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Valores Modificados Correctamente',
                'Se han modificado los valores del equipo',
                'success',
              )
            }
          })
        }

        
    }

function editar1(e){
	editarEquipo1(e);	
	e.preventDefault();
}

function eliminarEquipo1(e){
    Swal.fire({
        title: '¿Seguro que quiere eliminar este Equipo?',
        text: 'No podra revertir esta accion',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Equipo Eliminado Correctamente',
            'Se ha eliminado este equipo de los registros',
            'success',
          )
        }
      })
    }

function eliminar1(e){
	eliminarEquipo1(e);	
	e.preventDefault();
}

function editarEquipo2(e){
  var procesador = document.getElementById("procesador2").value;
  var ram = document.getElementById("ram2").value;
  var tarjetaGrafica = document.getElementById("tarjeta-grafica2").value;
  var almacenamiento = document.getElementById("tipo-almacenamiento2").value;
  var pantalla = document.getElementById("pantalla2").value;
  var board = document.getElementById("board2").value;
  var fuente = document.getElementById("fuente2").value;
  var estado = document.getElementById("estado2").value;

  if(procesador === "" && ram === "" && tarjetaGrafica === "" && almacenamiento === "" && pantalla === "" && board === "" && fuente === "" && estado === ""){
  Swal.fire({
          title: "No modifico ningun elemento",
          timer: 3000,
      icon: 'warning',
      showConfirmButton: false,
      }); 
  }
  else{
      Swal.fire({
          title: '¿Seguro que quiere modificar los valores del equipo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, modificar',
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Valores Modificados Correctamente',
              'Se han modificado los valores del equipo',
              'success',
            )
          }
        })
      }

      
  }

function editar2(e){
editarEquipo2(e);	
e.preventDefault();
}

function eliminarEquipo2(e){
  Swal.fire({
      title: '¿Seguro que quiere eliminar este Equipo?',
      text: 'No podra revertir esta accion',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Equipo Eliminado Correctamente',
          'Se ha eliminado este equipo de los registros',
          'success',
        )
      }
    })
  }

function eliminar2(e){
eliminarEquipo2(e);	
e.preventDefault();
}

function editarEquipo3(e){
  var procesador = document.getElementById("procesador3").value;
  var ram = document.getElementById("ram3").value;
  var tarjetaGrafica = document.getElementById("tarjeta-grafica3").value;
  var almacenamiento = document.getElementById("tipo-almacenamiento3").value;
  var pantalla = document.getElementById("pantalla3").value;
  var board = document.getElementById("board3").value;
  var fuente = document.getElementById("fuente3").value;
  var estado = document.getElementById("estado3").value;

  if(procesador === "" && ram === "" && tarjetaGrafica === "" && almacenamiento === "" && pantalla === "" && board === "" && fuente === "" && estado === ""){
  Swal.fire({
          title: "No modifico ningun elemento",
          timer: 3000,
      icon: 'warning',
      showConfirmButton: false,
      }); 
  }
  else{
      Swal.fire({
          title: '¿Seguro que quiere modificar los valores del equipo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, modificar',
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Valores Modificados Correctamente',
              'Se han modificado los valores del equipo',
              'success',
            )
          }
        })
      }

      
  }

function editar3(e){
editarEquipo3(e);	
e.preventDefault();
}

function eliminarEquipo3(e){
  Swal.fire({
      title: '¿Seguro que quiere eliminar este Equipo?',
      text: 'No podra revertir esta accion',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Equipo Eliminado Correctamente',
          'Se ha eliminado este equipo de los registros',
          'success',
        )
      }
    })
  }

function eliminar3(e){
eliminarEquipo3(e);	
e.preventDefault();
}



function editarEquipo4(e){
  var procesador = document.getElementById("procesador4").value;
  var ram = document.getElementById("ram4").value;
  var tarjetaGrafica = document.getElementById("tarjeta-grafica4").value;
  var almacenamiento = document.getElementById("tipo-almacenamiento4").value;
  var pantalla = document.getElementById("pantalla4").value;
  var board = document.getElementById("board4").value;
  var fuente = document.getElementById("fuente4").value;
  var estado = document.getElementById("estado4").value;

  if(procesador === "" && ram === "" && tarjetaGrafica === "" && almacenamiento === "" && pantalla === "" && board === "" && fuente === "" && estado === ""){
  Swal.fire({
          title: "No modifico ningun elemento",
          timer: 3000,
      icon: 'warning',
      showConfirmButton: false,
      }); 
  }
  else{
      Swal.fire({
          title: '¿Seguro que quiere modificar los valores del equipo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, modificar',
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Valores Modificados Correctamente',
              'Se han modificado los valores del equipo',
              'success',
            )
          }
        })
      }

      
  }

function editar4(e){
editarEquipo4(e);	
e.preventDefault();
}

function eliminarEquipo4(e){
  Swal.fire({
      title: '¿Seguro que quiere eliminar este Equipo?',
      text: 'No podra revertir esta accion',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Equipo Eliminado Correctamente',
          'Se ha eliminado este equipo de los registros',
          'success',
        )
      }
    })
  }

function eliminar4(e){
eliminarEquipo4(e);	
e.preventDefault();
}

function editarEquipo5(e){
var procesador = document.getElementById("procesador5").value;
var ram = document.getElementById("ram5").value;
var tarjetaGrafica = document.getElementById("tarjeta-grafica5").value;
var almacenamiento = document.getElementById("tipo-almacenamiento5").value;
var pantalla = document.getElementById("pantalla5").value;
var board = document.getElementById("board5").value;
var fuente = document.getElementById("fuente5").value;
var estado = document.getElementById("estado5").value;

if(procesador === "" && ram === "" && tarjetaGrafica === "" && almacenamiento === "" && pantalla === "" && board === "" && fuente === "" && estado === ""){
Swal.fire({
        title: "No modifico ningun elemento",
        timer: 3000,
    icon: 'warning',
    showConfirmButton: false,
    }); 
}
else{
    Swal.fire({
        title: '¿Seguro que quiere modificar los valores del equipo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar',
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Valores Modificados Correctamente',
            'Se han modificado los valores del equipo',
            'success',
          )
        }
      })
    }

    
}

function editar5(e){
editarEquipo5(e);	
e.preventDefault();
}

function eliminarEquipo5(e){
Swal.fire({
    title: '¿Seguro que quiere eliminar este Equipo?',
    text: 'No podra revertir esta accion',
    icon: 'error',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Equipo Eliminado Correctamente',
        'Se ha eliminado este equipo de los registros',
        'success',
      )
    }
  })
}

function eliminar5(e){
eliminarEquipo5(e);	
e.preventDefault();
}

function editarEquipo6(e){
var procesador = document.getElementById("procesa dor6").value;
var ram = document.getElementById("ram6").value;
var tarjetaGrafica = document.getElementById("tarjeta-grafica6").value;
var almacenamiento = document.getElementById("tipo-almacenamiento6").value;
var pantalla = document.getElementById("pantalla6").value;
var board = document.getElementById("board6").value;
var fuente = document.getElementById("fuente6").value;
var estado = document.getElementById("estado6").value;

if(procesador === "" && ram === "" && tarjetaGrafica === "" && almacenamiento === "" && pantalla === "" && board === "" && fuente === "" && estado === ""){
Swal.fire({
        title: "No modifico ningun elemento",
        timer: 3000,
    icon: 'warning',
    showConfirmButton: false,
    }); 
}
else{
    Swal.fire({
        title: '¿Seguro que quiere modificar los valores del equipo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar',
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Valores Modificados Correctamente',
            'Se han modificado los valores del equipo',
            'success',
          )
        }
      })
    }

    
}

function editar6(e){
editarEquipo6(e);	
e.preventDefault();
}

function eliminarEquipo6(e){
Swal.fire({
    title: '¿Seguro que quiere eliminar este Equipo?',
    text: 'No podra revertir esta accion',
    icon: 'error',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Equipo Eliminado Correctamente',
        'Se ha eliminado este equipo de los registros',
        'success',
      )
    }
  })
}

function eliminar6(e){
eliminarEquipo6(e);	
e.preventDefault();
}