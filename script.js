nomedosEstudantes=[]

function enviar(){
    var nome1=document.getElementById("nameOfTheStudent1").value;//Estamos pegando o nome que esta escrito no input
    var nome2=document.getElementById("nameOfTheStudent2").value;//Estamos pegando o nome que esta escrito no input
    var nome3=document.getElementById("nameOfTheStudent3").value;//Estamos pegando o nome que esta escrito no input
 nomedosEstudantes.push(nome1);//colocando o nome no array
 nomedosEstudantes.push(nome2);//colocando o nome no array
 nomedosEstudantes.push(nome3);//colocando o nome no array

 console.log(nomedosEstudantes);
document.getElementById("displayName").innerHTML=nomedosEstudantes;//mostrando o array na tela
document.getElementById("botaoenviar").style.display = "none ";
document.getElementById("sortButton").style.display = "inline-block";

}
function ordenar(){
nomedosEstudantes.sort();//ordenar o array
document.getElementById("displayName").innerHTML=nomedosEstudantes;

};




