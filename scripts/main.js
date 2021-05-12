let miImagen = document.querySelector("img");
miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute("src");
    if (miSrc === "images/luces-en-oscuridad.jpg"){
        miImagen.setAttribute("src","images/vela-en-manos.jpg");
    }else{
        miImagen.setAttribute("src","images/luces-en-oscuridad.jpg");
    }
}

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario(){
    let miNombre = prompt("Por favor, ingresa tu nombre");
    if (!miNombre){
        estableceNombreUsuario()
    }else{
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Bienvenido a nuestra plataforma, " + miNombre;
    }
    
}

if (!localStorage.getItem("nombre")){
    estableceNombreUsuario();
}else{
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Es genial tenerte de nuevo en nuestra plataforma, " + nombreAlmacenado;
}

miBoton.onclick = function(){
    estableceNombreUsuario();
}