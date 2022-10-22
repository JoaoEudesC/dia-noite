

var a = document.getElementById("msg")
var b = document.getElementById("imagem")    // comando para selecionar os elementos do html 
var body = document.querySelector("body")



function carregar(){

var time = new Date()
var hora = time.getHours()     // comando para pegar as horas atuais 





a.innerHTML= `agora sao ${hora} horas`



if (hora < 12){ 



b.src = 'manha.webp'
body.style.backgroundColor="#A8BEE6"       //comando para a manhã

}



else if( hora <= 18){

b.src='tarde.jpeg'  
body.style.backgroundColor= "#F75B43"    // comando para a tarde

}




else{

console.log("boa noite")

body.style.backgroundColor="#2E292C"    //comando para a noite
b.src ='noite.jpeg'
}









}











