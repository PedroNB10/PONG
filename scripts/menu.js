var pvp_button = document.getElementById("PVP-button")
var pvcpu_button = document.getElementById("PVCPU-button")


var tipo_jogo = 'none'
var ponto_atual = ''


var level_selected = false
var level

function PvpModeSelected() {
    pvp_button.style.background = "red"
    pvcpu_button.style.background = "deepskyblue"
    tipo_jogo = 'PVP'

}

function PvcpuModeSelected() {
    pvcpu_button.style.background = "green"
    pvp_button.style.background = "deepskyblue"
    tipo_jogo = 'PVCPU'
}

function PvpModeSelelctedEnter() {
    if (pvp_button.style.background == "deepskyblue" && pvcpu_button.style.background == "green" || pvp_button.style.background == "deepskyblue") {
    pvp_button.style.background = "#FF00CE"

    }
}

function PvpModeSelelctedLeave() {

    if (pvp_button.style.background != "red") {
        pvp_button.style.background = "deepskyblue"
    }

}

function PvcpuModeSelelctedEnter() {
    if (pvcpu_button.style.background == "deepskyblue" && pvp_button.style.background == "red" || pvcpu_button.style.background == "deepskyblue") {
        pvcpu_button.style.background = "#FF00CE"

    }
}

function PvcpuModeSelelctedLeave() {

    if (pvcpu_button.style.background != "green") {
        pvcpu_button.style.background = "deepskyblue"
    }

}

function Level01Selected() {
    document.getElementById("level1").style.background = "#11114E"
    document.getElementById("level2").style.background = "deepskyblue"
    document.getElementById("level3").style.background = "deepskyblue"
    level_selected = true
    level = 1

}

function Level01Enter() {
    if (document.getElementById("level1").style.background == "deepskyblue" ) {
        document.getElementById("level1").style.background = "#FF00CE"

    }
}

function Level01Leave() {

    if (level == 3 || level == 2)  {
        
        document.getElementById("level1").style.background = "deepskyblue"
       
    }

}

function Level02Enter() {
    if (document.getElementById("level2").style.background == "deepskyblue") {
        document.getElementById("level2").style.background = "#FF00CE"

    }
}

function Level02Leave() {

    if (level == 1 || level == 3)  {
        
        document.getElementById("level2").style.background = "deepskyblue"
       
    }

}

function Level03Enter() {
    if (document.getElementById("level3").style.background == "deepskyblue") {
        document.getElementById("level3").style.background = "#FF00CE"

    }
}

function Level03Leave() {

    if (level == 2 || level == 1)  {
        
        document.getElementById("level3").style.background = "deepskyblue"
       
    }

}


function Level02Selected() {
    document.getElementById("level1").style.background = "deepskyblue"
    document.getElementById("level2").style.background = "#11114E"
    document.getElementById("level3").style.background = "deepskyblue"
    level_selected = true
    level = 2

}

function Level03Selected() {
    document.getElementById("level1").style.background = "deepskyblue"
    document.getElementById("level2").style.background = "deepskyblue"
    document.getElementById("level3").style.background = "#11114E"
    level_selected = true
    level = 3

}

function StartGame() {
    var a = document.getElementById('hyperlink');

    if (pvp_button.style.background == "red" && level_selected == true && level == 1) {
        a.href = "./pages/PVP_nivel_01.html"
    }

    else if (pvp_button.style.background == "red" && level_selected == true && level == 2) {
        a.href = "./pages/PVP_nivel_02.html"
    }

    else if (pvp_button.style.background == "red" && level_selected == true && level == 3) {
        a.href = "./pages/PVP_nivel_03.html"
    }

    else if (pvcpu_button.style.background == "green" && level_selected == true && level == 1) {
        a.href = "./pages/PVCPU_nivel_01.html"
    }

    else if (pvcpu_button.style.background == "green" && level_selected == true && level == 2) {
        a.href = "./pages/PVCPU_nivel_02.html"
    }
    
    else if (pvcpu_button.style.background == "green" && level_selected == true && level == 3) {
        a.href = "./pages/PVCPU_nivel_03.html"
    }

}




