function valor(){
    larg = parseFloat(document.getElementById('larg').value);
    com = parseFloat(document.getElementById('com').value);
    area = larg*com;
    val = area*36;
    alert("Para você aseentar sua casa com um preço de R$ 36,00 por M2 será: R$ "+val);

}