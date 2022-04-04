
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
    
    video.addEventListener("timeupdate",()=>{
        /*Uso los parsefloat con el tofixed para pasar el numero de segundos con coma flotante a segundos sin decimal */
        let segundos=parseFloat(video.currentTime).toFixed(0);
        let segundosTotales=parseFloat(video.duration).toFixed(0);
        document.getElementById("duracion").innerHTML = `${secondsToString(segundosTotales)} / ${secondsToString(segundos)}`;	  
      })
}
botonesVideo();
/* está función la encontré en internet */
function secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }
