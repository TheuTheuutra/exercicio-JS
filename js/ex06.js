function imcH(){

    var altH = parseFloat(document.getElementById('altH').value);
    var imcH = (72.7*altH) - 58;

    document.getElementById('resultado').innerHTML = imcH;
}

function imcF(){

    var altF = parseFloat(document.getElementById('altF').value);
    var imcF = (62.1*altF) - 44.7;

    document.getElementById('resultado').innerHTML = imcF;
}