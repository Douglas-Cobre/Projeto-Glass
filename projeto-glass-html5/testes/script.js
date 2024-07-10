function contar(){
    var inicio = window.document.getElementById("inicio")
    var final = window.document.getElementById("final")
    var passo = window.document.getElementById("passo")
    var res = window.document.getElementById("segunda")

    if (inicio.value.lenght == 0 || final.value.lenght == 0 || passo.value.lenght == 0){
        window.alert("[ERRO] faltam dados")
    }else{
        res.innerHTML = "Contando"
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        for(let c = 1 ; c <= f ; c +=p){
            res.innerHTML += `${c}`
        }
    }
}