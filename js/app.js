const email=document.getElementById("email");
const asunto=document.getElementById("asunto");
const mesnsaje=document.getElementById("mensaje");
const bntEnviar=document.getElementById("enviar");
const bntReset=document.getElementById("resetBtn");
const formo=document.getElementById("enviar-mail")

App();

function App(){

    document.addEventListener("DOMContentLoaded",iniciarApp);
    email.addEventListener("blur",validarCampo);
    asunto.addEventListener("blur",validarCampo);
    mensaje.addEventListener("blur",validarCampo);

    function validarCampo(){
        validarLongitd(this);

        if(email.value.length>0 && asunto.value.length>0 && mensaje.value.length>0){
            bntEnviar.disabled=false;
        }
    }

    formo=document.addEventListener("submit",enviarMail);

    
    

}

//------------------------------------------
function enviarMail(e){

    //al enviar mail aparee el stiker de carga
    const spinnerGif=document.querySelector("#spinner");
    spinnerGif.style.display="block";

    //agregar gif de enviador completado

    const gifEnviado=document.createElement("img");
    gifEnviado.src="img/mail.gif";
    gifEnviado.style.display="block"


    // despues de un tiempo se quita el stiker
    setTimeout(function(){
        spinnerGif.style.display="none";
        document.querySelector("#loaders").appendChild(gifEnviado);

        setTimeout(function(){
            gifEnviado.remove();
            formo.reset();
        },3000)
    },3000);



    e.preventDefault();
}

//------------------------------------------
function validarLongitd(campo){
    if (campo.value.length>0){
        campo.style.borderBottomColor="green"
        campo.classList.remove("error");
    }
    else{
        campo.style.borderBottomColor="red"
        campo.classList.add("error");
    } 
}


//------------------------------------------
function iniciarApp(){
    bntEnviar.disabled=true;
}