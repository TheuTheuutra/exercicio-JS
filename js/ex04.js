function calculo(){

    var km = parseFloat(document.getElementById('km').value);
    var v1 = parseFloat(document.getElementById('v1').value);
    var conv = km/8
    var preco = conv*v1
    alert("Você andou KM's "+km+" , o valor do combustivel está R$ "+ v1+ " e você gastou R$"+preco);

}