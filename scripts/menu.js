var pvp_button = document.getElementById("PVP-button")
var pvcpu_button = document.getElementById("PVCPU-button")


var tipo_jogo = 'none'
var ponto_atual = ''
var escolha_da_dificuldade = false
var dificuldade = 0
// pvcpu_button.style.color = "green"
// pvp_button.style.color = "red"


function PvpModeSelected(){
    pvp_button.style.background = "red"
    pvcpu_button.style.background = "deepskyblue"
    tipo_jogo='PVP'
}

function PvcpuModeSelected(){
    pvcpu_button.style.background = "green"
    pvp_button.style.background = "deepskyblue"
    tipo_jogo='PVCPU'
}

function StartGame(){

    var a = document.getElementById('hyperlink'); //or grab it by tagname etc
    a.href = "./start.html"

}




