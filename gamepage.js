// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas
var guess = 1;
// até acerto

function submit() {
var x = document.getElementById("guessField").value;
if(x == y)
{
    alert("PARABÉNS!!!, você acertou em" + guess + "tentativas(s)! ");
    guess = 1;
}
else if(x > y)
{
    guess++;
    alert("Opa, resposta errada!! Tente um número menor");
}
else
{
    guess++;
    alert("Opa, resposta errada!! Tente um número maior");
}
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
