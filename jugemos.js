/*  Hice este programa con el fin de hacer escalable el juego, pensando en un rompecabezas*/
function dragAndDrop(){
    const imagenes=document.querySelectorAll("img");
    const destinoImagenes=document.querySelectorAll(".cajas");
    const reniciar=document.querySelector("#reniciar")
    
    imagenes.forEach(imagen =>{
        imagen.addEventListener("dragstart",(evento)=>{
            evento.dataTransfer.setData(`Text`,`${imagen.getAttribute("src")}`);
            
        });
        imagen.addEventListener("dragend",()=>{
            imagen.style.visibility="hidden";
        });
    })
    destinoImagenes.forEach(destinoImagen =>{
        
        destinoImagen.addEventListener("dragover",(evento)=> evento.preventDefault())
        destinoImagen.addEventListener("drop",(evento)=>{
            const dataImagen=evento.dataTransfer.getData("Text");
            destinoImagen.innerHTML=`<img class="cajas" src="${dataImagen}">`;
        })
    })

    reniciar.addEventListener("click",()=>{
        window.location.reload();
    })
    
    
}
dragAndDrop();