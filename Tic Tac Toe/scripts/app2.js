theme = 1
x = 0

var top_left_status = false
var top_middle_status = false
var top_right_status = false

var middle_left_status = false
var middle_middle_status = false
var middle_right_status = false

var bottom_right_status = false
var bottom_middle_status = false
var bottom_left_status = false

var top_left_x = false
var top_middle_x = false
var top_right_x = false

var middle_left_x = false
var middle_middle_x = false
var middle_right_x = false

var bottom_left_x = false
var bottom_middle_x = false
var bottom_right_x = false

var top_left_o = false
var top_middle_o = false
var top_right_o = false

var middle_left_o = false
var middle_middle_o = false
var middle_right_o = false

var bottom_left_o = false
var bottom_middle_o = false
var bottom_right_o = false


let cells = ["top_left", "top_middle", "top_right", "middle_left", "middle_middle", "middle_right", "bottom_left", "bottom_middle", "bottom_right"]

function play_again() {
    document.location.reload()
}

function check_stuff() {
    if (top_left_status) {
        var index = cells.indexOf("top_left")
        if (index > -1){
            cells.splice(index, 1)
        }
    }
    if (top_middle_status) {
        var index = cells.indexOf("top_middle")
        if (index > -1) {
        cells.splice(index, 1)
        }
    }
    if (top_right_status) {
        var index = cells.indexOf("top_right")
        if (index > -1) {
            cells.splice(index, 1)
        }
    }
    if (middle_left_status) {
        var index = cells.indexOf("middle_left")
        if (index > -1) {
            cells.splice(index, 1)
        }
    }
    if (middle_middle_status) {
        var index = cells.indexOf("middle_middle")
        if (index > -1) {
            cells.splice(index, 1)
        }
    }
    if (middle_right_status) {
        var index = cells.indexOf("middle_right")
        if (index > -1) {
            cells.splice(index, 1)
        }
    }
    if (bottom_left_status) {
        var index = cells.indexOf("bottom_left")
        if (index > -1) {
            cells.splice(index, 1)
        }
    }
    if (bottom_middle_status) {
        var index = cells.indexOf("bottom_middle")
        if (index > -1) {
            cells.splice(index, 1)
        }
    }
    if (bottom_right_status) {
        var index = cells.indexOf("bottom_right")
        if (index > -1) {
            cells.splice(index, 1)
        }
    }
}

function everything_true() {
    top_left_status = true
    top_middle_status = true
    top_right_status = true
    middle_left_status = true
    middle_middle_status = true
    middle_right_status = true
    bottom_left_status = true
    bottom_middle_status = true
    bottom_right_status = true
}

function top_left() {
    if (!top_left_status) {
        top_left_status = true
        top_left_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("top_left").appendChild(image);
        if (top_left_x && top_middle_x && top_right_x || top_left_x && middle_middle_x && bottom_right_x || top_left_x && middle_left_x && bottom_left_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}

function top_middle() {
    if (!top_middle_status) {
        top_middle_status = true
        top_middle_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("top_middle").appendChild(image);
        if (top_middle_x && top_left_x && top_right_x || top_middle_x && middle_middle_x && bottom_middle_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}

function top_right() {
    if (!top_right_status) {
        top_right_status = true
        top_right_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("top_right").appendChild(image);
        if (top_right_x == true && top_middle_x && top_left_x || top_right_x && middle_middle_x && bottom_left_x || top_right_x && middle_right_x && bottom_right_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}
//function that checks everything instead of copy paste bullshit
function middle_left() {
    if (!middle_left_status) {
        middle_left_status = true
        middle_left_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("middle_left").appendChild(image);
        if (middle_left_x && top_left_x && bottom_left_x || middle_left_x && middle_middle_x && middle_right_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}

function middle_middle() {
    if (!middle_middle_status) {
        middle_middle_status = true
        middle_middle_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("middle_middle").appendChild(image);
        if (middle_middle_x && top_left_x && bottom_right_x || middle_middle_x && top_right_x && bottom_left_x || middle_middle_x && middle_left_x && middle_right_x || middle_middle_x && top_middle_x && bottom_middle_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}

function middle_right() {
    if (!middle_right_status) {
        middle_right_status = true
        middle_right_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("middle_right").appendChild(image);
        if (middle_right_x && top_right_x && bottom_right_x || middle_right_x && middle_middle_x && middle_left_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}

function bottom_left() {
    if (!bottom_left_status) {
        bottom_left_status = true
        bottom_left_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("bottom_left").appendChild(image);
        if (bottom_left_x && middle_left_x && top_left_x || bottom_left_x && middle_middle_x && top_right_x || bottom_left_x && bottom_middle_x && bottom_right_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}

function bottom_middle() {
    if (!bottom_middle_status) {
        bottom_middle_status = true
        bottom_middle_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("bottom_middle").appendChild(image);
        if (bottom_middle_x && bottom_left_x && bottom_right_x || bottom_middle_x && middle_middle_x && top_middle_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}

function bottom_right() {
    if (!bottom_right_status) {
        bottom_right_status = true
        bottom_right_x = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("bottom_right").appendChild(image);
        if (bottom_right_x && middle_right_x && top_right_x || bottom_right_x && middle_middle_x && top_left_x || bottom_right_x && bottom_middle_x && bottom_left_x) {
            document.getElementById("message").innerHTML = "You Won!"
            everything_true()
            return
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            check_stuff()
            var random_cell = cells[Math.floor(Math.random()*cells.length)]
            var image2 = document.createElement("img");
            image2.setAttribute("src", "images/theme" + theme + "/o.png")
            setTimeout(() => {  document.getElementById(random_cell).appendChild(image2); }, 500);
            window[random_cell + "_status"] = true
            window[random_cell + "_o"] = true
            if (top_left_o && top_middle_o && top_right_0 || middle_left_o && middle_middle_o && middle_right_o || bottom_left_o && bottom_middle_o && bottom_right_o || top_left_o && middle_left_o && bottom_left_o || top_middle_o && middle_middle_o && bottom_middle_o || top_right_o && middle_right_o && bottom_right_o || top_left_o && middle_middle_o && bottom_right_o || top_right_o && middle_middle_o && bottom_left_o) {
                document.getElementById("message").innerHTML = "You Lost"
                everything_true()
                return
            }
            x += 1
        }
    }
}








//setTimeout(() => {  console.log(x); }, 1000);