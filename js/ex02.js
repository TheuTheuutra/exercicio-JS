function celsius()
{
    var graus = parseFloat(document.getElementById('graus').value);
    conversao = graus*1.8+32
    document.getElementById('resultado').innerHTML = conversao;
    
}

function fahrenheit()
{
    var graus = parseFloat (document.getElementById('graus').value);
    conversao = (graus-32)/1.8
    document.getElementById('resultado').innerHTML = conversao;
    
}