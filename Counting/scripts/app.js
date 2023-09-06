var count = 0

var text_original_font_size = "130px Poppins"

document.getElementById("screen").innerHTML = count

function add() {
    count += 1

    if (count.toString().length === 3) {
        document.getElementById("screen").style = "font: 100px Poppins;"
    }

    if (count.toString().length === 4) {
        document.getElementById("screen").style = "font: 80px Poppins;"
    }

    if (count.toString().length === 5) {
        document.getElementById("screen").style = "font: 70px Poppins;"
    }

    if (count.toString().length === 6) {
        document.getElementById("screen").style = "font: 60px Poppins;"
    }

    if (count.toString().length === 7) {
        document.getElementById("screen").style = "font: 50px Poppins;"
    }

    if (count.toString().length === 8) {
        document.getElementById("screen").style = "font: 45px Poppins;"
    }

    if (count.toString().length === 9) {
        document.getElementById("screen").style = "font: 40px Poppins;"
    }

    if (count.toString().length === 10) {
        document.getElementById("screen").style = "font: 35px Poppins;"
    }

    if (count.toString().length === 11) {
        document.getElementById("screen").style = "font: 30px Poppins;"
    }

    if (count.toString().length === 12) {
        document.getElementById("screen").style = "font: 30px Poppins;"
    }

    if (count.toString().length === 13) {
        document.getElementById("screen").style = "font: 25px Poppins;"
    }

    if (count.toString().length === 14) {
        document.getElementById("screen").style = "font: 25px Poppins;"
    }

    if (count.toString().length === 15) {
        document.getElementById("screen").style = "font: 25px Poppins;"
    }

    document.getElementById("screen").innerHTML = count

}

function subtract() {
    count -= 1

    if (count.toString().length === 1) {
        document.getElementById("screen").style = "font: 130px Poppins;"
    }

    if (count.toString().length === 2) {
        document.getElementById("screen").style = "font: 130px Poppins;"
    }
    
    if (count.toString().length === 3) {
        document.getElementById("screen").style = "font: 100px Poppins;"
    }

    if (count.toString().length === 4) {
        document.getElementById("screen").style = "font: 80px Poppins;"
    }

    if (count.toString().length === 5) {
        document.getElementById("screen").style = "font: 70px Poppins;"
    }

    if (count.toString().length === 6) {
        document.getElementById("screen").style = "font: 60px Poppins;"
    }

    if (count.toString().length === 7) {
        document.getElementById("screen").style = "font: 50px Poppins;"
    }

    if (count.toString().length === 8) {
        document.getElementById("screen").style = "font: 45px Poppins;"
    }

    if (count.toString().length === 9) {
        document.getElementById("screen").style = "font: 40px Poppins;"
    }

    if (count.toString().length === 10) {
        document.getElementById("screen").style = "font: 35px Poppins;"
    }

    if (count.toString().length === 11) {
        document.getElementById("screen").style = "font: 30px Poppins;"
    }

    if (count.toString().length === 12) {
        document.getElementById("screen").style = "font: 30px Poppins;%"
    }

    if (count.toString().length === 13) {
        document.getElementById("screen").style = "font: 25px Poppins;"
    }

    if (count.toString().length === 14) {
        document.getElementById("screen").style = "font: 25px Poppins;"
    }

    if (count.toString().length === 15) {
        document.getElementById("screen").style = "font: 25px Poppins;"
    }

    document.getElementById("screen").innerHTML = count
}

function clear1() {
    count = 0
    document.getElementById("screen").innerHTML = count
    document.getElementById("screen").style = "font: 130px Poppins;"
}