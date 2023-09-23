function resultado()
{
    var nome = document.getElementById('nome').value;
    var v1 = parseFloat(document.getElementById('v1').value);
    var v2 = parseFloat(document.getElementById('v2').value);
    var v3 = parseFloat(document.getElementById('v3').value);
    var q1 = parseFloat(document.getElementById('q1').value);
    var q2 = parseFloat(document.getElementById('q2').value);
    var q3 = parseFloat(document.getElementById('q3').value);
    var t = q1*v1+q2*v2+q3*v3;
    alert("Olá "+ nome +" O resultado do seus produtos é: R$ "+t);
    
    
}