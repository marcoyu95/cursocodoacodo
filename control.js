window.onload=function(){
var form = document.querySelector('form');//obtengo valores necesarios para validar
var usuario = document.getElementById('user');
var contraseña = document.getElementById('pass');

form.onsubmit = function(e){//evento

    if (usuario.value === '' || contraseña.value === '') {//valida campos vacios
        e.preventDefault();
        alert("Completá ambos datos!");
    }else if(!usuario.value.includes('@')){//usuario incorrecto sin @
        e.preventDefault();
        alert("Falta el arroba ('@') en el usuario");
        }else if(usuario.value.length==1){//usuario incorrecto solo pone "@"
            e.preventDefault();
            alert("Usuario incorrecto");
            }else if(cantidadRepeticionesEnCadena(usuario.value,"@")>1){//usuario incorrecto con 2 o más @
                e.preventDefault();
                alert("Usuario incorrecto ya que contiene más de un arroba ('@')");
                }
    }
}

function cantidadRepeticionesEnCadena (cadena,caracter){
    var repeticiones = 0;
    for(var i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter) 
            repeticiones++;
    }
    return repeticiones;
}