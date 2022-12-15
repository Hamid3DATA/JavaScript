theme = 1
x = 0
o = 0
cell_status = "o"

var top_left_status = false
var top_middle_status = false
var top_right_status = false

var middle_left_status = false
var middle_middle_status = false
var middle_right_status = false

var bottom_right_status = false
var bottom_middle_status = false
var bottom_left_status = false


let cells = ["top_left", "top_middle", "top_right", "middle_left", "middle_middle", "middle_right", "bottom_left", "bottom_middle", "bottom_right"]


function top_left() {
    if (!top_left_status) {
        top_left_status = true
        var top_left_x = true //maybe use this instead of top_left_status since maybe i will use that for "o" aswell
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("top_left").appendChild(image);
        if (top_left_status && top_middle_status && top_right_status || top_left_status && middle_middle_status && bottom_right_status || top_left_status && middle_left_status && bottom_left_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("top_left")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function top_middle() {
    if (!top_middle_status) {
        top_middle_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("top_middle").appendChild(image);
        if (top_middle_status && top_left_status && top_right_status || top_middle_status && middle_middle_status && bottom_middle_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("top_middle")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function top_right() {
    if (!top_right_status) {
        top_right_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("top_right").appendChild(image);
        if (top_right_status == true && top_middle_status && top_left_status || top_right_status && middle_middle_status && bottom_left_status || top_right_status && middle_right_status && bottom_right_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("top_right")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function middle_left() {
    if (!middle_left_status) {
        middle_left_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("middle_left").appendChild(image);
        if (middle_left_status && top_left_status && bottom_left_status || middle_left_status && middle_middle_status && middle_right_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("middle_left")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function middle_middle() {
    if (!middle_middle_status) {
        middle_middle_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("middle_middle").appendChild(image);
        if (middle_middle_status && top_left_status && bottom_right_status || middle_middle_status && top_right_status && bottom_left_status || middle_middle_status && middle_left_status && middle_right_status || middle_middle_status && top_middle_status && bottom_middle_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("middle_middle")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function middle_right() {
    if (!middle_right_status) {
        middle_right_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("middle_right").appendChild(image);
        if (middle_right_status && top_right_status && bottom_right_status || middle_right_status && middle_middle_status && middle_left_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("middle_right")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function bottom_left() {
    if (!bottom_left_status) {
        bottom_left_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("bottom_left").appendChild(image);
        if (bottom_left_status && middle_left_status && top_left_status || bottom_left_status && middle_middle_status && top_right_status || bottom_left_status && bottom_middle_status && bottom_right_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("bottom_left")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function bottom_middle() {
    if (!bottom_middle_status) {
        bottom_middle_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("bottom_middle").appendChild(image);
        if (bottom_middle_status && bottom_left_status && bottom_right_status || bottom_middle_status && middle_middle_status && top_middle_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("bottom_middle")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}

function bottom_right() {
    if (!bottom_right_status) {
        bottom_right_status = true
        x += 1
        var image = document.createElement("img");
        image.setAttribute("src", "images/theme" + theme + "/x.png");
        document.getElementById("bottom_right").appendChild(image);
        if (bottom_right_status && middle_right_status && top_right_status || bottom_right_status && middle_middle_status && top_left_status || bottom_right_status && bottom_middle_status && bottom_left_status) {
            console.log("you won (x)")
        }
        if (x === 1 || x === 3 || x === 5 || x === 7 || x === 9) {
            const index = cells.indexOf("bottom_right")
            if (index > -1) {
                cells.splice(index, 1)
                console.log(cells)
                var random_cell = cells[Math.floor(Math.random()*cells.length)]
                var image2 = document.createElement("img");
                image2.setAttribute("src", "images/theme" + theme + "/o.png")
                document.getElementById(random_cell).appendChild(image2)
                window[random_cell + "_status"] = true
                x += 1
            }
        }
    }
}








//setTimeout(() => {  console.log(x); }, 1000);