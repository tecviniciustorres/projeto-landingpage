var setaesquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex"
}

function RolarparaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setadireita.style ="display:flex"
    setaesquerda.style ="display:none"
}

