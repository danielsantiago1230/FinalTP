
function botonesVideo(){
    let video=document.querySelector("video");
    let botonPlay=document.querySelector("#play");
    let botonPause=document.querySelector("#pause");

    botonPlay.addEventListener("click",()=>{
        video.play();
    })
    botonPause.addEventListener("click",()=>{
        video.pause();
    })
}
botonesVideo();

/* Está funcion la saque de https://lineadecodigo.com/html5/tiempo-visualizado-del-video-en-html5/ que explica lo que necesitamos para la duración. Supongo que esto lo veremos más adelante 
function hora(segundos){
    
    var d=new Date(segundos*1000); 
     Ajuste de las 23 horas
    var hora = (d.getHours()==0)?23:d.getHours()-1;
    var hora = (hora<9)?"0"+hora:hora;
    var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
    var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
    return hora+":"+minuto+":"+segundo;	 

   }

    */
