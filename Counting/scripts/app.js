var count = 0

document.getElementById("screen").innerHTML = count

function add() {
    count += 1
    if (count === 100) {
        document.getElementById("screen").style = "font: 100px Poppins; padding-top: 25px;"
    }
    if (count === 1000) {
        document.getElementById("screen").style = "font: 70px Poppins; padding-top: 50px;"
    }
    if (count === 10000) {
        document.getElementById("screen").style = "font: 60px Poppins; padding-top: 60px;"
    }
    if (count === 100000) {
        document.getElementById("screen").style = "font: 50px Poppins; paddnig-top: 70px"
    }
    document.getElementById("screen").innerHTML = count
    console.log(document.getElementById("screen").clientWidth)
}

function subtract() {
    count -= 1
    if (count === -1) {
        count = 0
    }
    if (count === 99) {
        document.getElementById("screen").style = "font: 130px Poppins; padding-top: 0px;"
    }
    if (count === 999) {
        document.getElementById("screen").style = "font: 100px Poppins; padding-top: 25px;"
    }
    if (count === 9999) {
        document.getElementById("screen").style = "font: 70px Poppins; padding-top: 50px;"
    }
    if (count === 99999) {
        document.getElementById("screen").style = "font: 60px Poppins; paddin-top: 60px;"
    }
    document.getElementById("screen").innerHTML = count
}

function clear1() {
    count = 0
    document.getElementById("screen").innerHTML = count
    document.getElementById("screen").style = "font: 130px Poppins; padding-top: 0px;"
}