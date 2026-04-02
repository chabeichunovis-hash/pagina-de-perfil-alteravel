const paragrafo = document.getElementById("paragrafo");
const botao2 = document.getElementById("mudarEstilo");

paragrafo.style.color = "black";

botao2.addEventListener("click", function(){ 
if (paragrafo.style.color === "black"){
    paragrafo.style.color = "red";
    paragrafo.style.fontFamily = "Arial";
    paragrafo.style.fontSize = "30px"
}
else if (paragrafo.style.color === "red"){
    paragrafo.style.color = "black";
    paragrafo.style.fontFamily = "Arial";
    paragrafo.style.fontSize = "30px"
}});