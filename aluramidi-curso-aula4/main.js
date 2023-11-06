function tocaSom (idElementosAudio) {
    document.querySelector(idElementosAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
 let contador = 0;
 while (contador<listaDeElementos.length){
 listaDeElementos[contador].onclick= function(){
    tocaSom(idAudio)}
 }