var lista = [];
function inserir(){
    let valor = document.getElementById('valor').value;
    //push método de inserir
    lista.push(valor);
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}
function exibir(){
    var res = document.getElementById('res');
    //limpa antes de exibir
    res.innerHTML = "";
    for(let i = 0; i < lista.length; i++){
        res.innerHTML += lista[i]+ "-";
       
    }
    document.getElementById('valor').focus();
}
function remover(){
    let valor = document.getElementById('valor').value;
    for (let i = 0; i < lista.length; i++){
        if(lista[i] == valor)
//splice método de remover
//1º parametro do splice - item a ser removido
//2º parametro do splice - qtd  de itens que vão ser removidos
        lista.splice(i, 1);
    }
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}

function menor(){
    var mvalor = lista.reduce(function(a, b){
        return Math.min(a,b);
    })
    document.getElementById('res').innerHTML = mvalor;
}
function maior(){
    var mvalor = lista.reduce(function(a, b){
        return Math.max(a,b);
    })
    document.getElementById('res').innerHTML = mvalor;
}