function carregar(){
    var fundo = window.document.getElementById('container');
    var ola = window.document.getElementById('titulo');
    var secao =window.document.getElementById('section');
    
    var tempo = new Date();
    var hora =tempo.getHours();

    var hora = 17;
    
    
if (hora<=12&&hora>=4){
    fundo.style.backgroundImage="url('manha.jpg')";
    ola.innerHTML=`Olá, Bom dia!`
}else if (hora<18){
    fundo.style.backgroundImage="url('tarde.png')";
    ola.innerHTML=`Olá, Boa tarde!`
}else{
    fundo.style.backgroundImage="url('noite.jpg')";
    ola.innerHTML=`Olá, Boa noite!`;
  
 

}


}