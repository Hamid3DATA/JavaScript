// setting all variables (not all of them have values yet)
var selected = ""
var pc_selected = ["rock", "paper", "scissors"]
var theme = localStorage.getItem("theme")

var gamestatus
var wins = localStorage.getItem("wins")
var losses = localStorage.getItem("losses")
var draws = localStorage.getItem("draws")

var randomchoice = pc_selected[Math.floor(Math.random()*pc_selected.length)]

var wins_text = document.createTextNode("wins: " + wins)
document.getElementById("wins").appendChild(wins_text)

var losses_text = document.createTextNode("losses: " + losses)
document.getElementById("losses").appendChild(losses_text)

var draws_text = document.createTextNode("draws: " + draws)
document.getElementById("draws").appendChild(draws_text)

var button = localStorage.getItem("button")

//if variable button has no value (there is nothing in localStorage yet) add "Start" to the button ()
if (button === null) {
    document.getElementById("restart").innerHTML = "Start"
} else {
    document.getElementById("restart").innerHTML = button
}

// when you press "start" button the "guide" text will dissapear
if (localStorage.getItem("button") === "Restart") {
    document.getElementById("guide1").innerHTML = ""
    document.getElementById("guide2").innerHTML = ""
    document.getElementById("guide3").innerHTML = ""
}

//if theme1 is selected -> variable theme = 1 will be saved in localStorage -> refresh page
function select_theme_1() {
    localStorage.setItem("theme", 1)
    document.location.reload()
}

//if theme2 is selected -> variable theme = 2 will be saved in localStorage -> refresh page
function select_theme_2() {
    localStorage.setItem("theme", 2)
    document.location.reload()
}

//if theme3 is selected -> variable theme = 3 will be saved in localStorage -> refresh page
function select_theme_3() {
    localStorage.setItem("theme", 3)
    document.location.reload()
}

//if "rock" button is pressed -> remove previous image -> variable selected = "rock" -> add rock image
function rock() {
    document.getElementById("user_image").innerHTML = "";
    selected = "rock"
    var image = document.createElement("img");
    image.setAttribute("src", "images/theme" + theme + "/rock1.png");
    document.getElementById("user_image").appendChild(image);
}

//if "paper" button is pressed -> remove previous image -> variable selected = "paper" -> add paper image
function paper() {
    document.getElementById("user_image").innerHTML = "";
    selected = "paper"
    var image = document.createElement("img");
    image.setAttribute("src", "images/theme" + theme + "/paper1.png")
    document.getElementById("user_image").appendChild(image);
}

//if "scissors" button is pressed -> remove previous image -> variable selected = "scissors" -> add scissors image
function scissors() {
    document.getElementById("user_image").innerHTML = "";
    selected = "scissors"
    var image = document.createElement("img");
    image.setAttribute("src", "images/theme" + theme + "/scissors1.png")
    document.getElementById("user_image").appendChild(image);
}

/*if "start" button is pressed -> check randomchoice variable value and add an image related to the value "rock" = rock image ETC. ->
check randomchoice and selected variable and decides the winner by the rules of rock-paper-scissors ->
variable gamestatus = win/loss/draw -> variable wins, losses or draws gets + 1 in scoreboard then it will be saved in localStorage ->
and so on with all possible outcomes
It also checkes wether you have selected anything yet*/
function ready() {
    if (selected === "rock" || selected === "paper" || selected === "scissors") {
        if (randomchoice === "rock") {
            document.getElementById("pc_image").innerHTML = "";
            var image = document.createElement("img");
            image.setAttribute("src", "images/theme" + theme + "/rock2.png")
            document.getElementById("pc_image").appendChild(image);

            if (selected === "rock") {
                gamestatus = "draw"
                draws = parseInt(draws) + 1
                localStorage.setItem("draws", draws)
                document.getElementById("draws").innerHTML = "";
                var text = document.createTextNode("draws: " + draws)
                document.getElementById("draws").appendChild(text)
            }

            if (selected === "paper") {
                gamestatus = "win"
                wins = parseInt(wins) + 1
                localStorage.setItem("wins", wins)
                document.getElementById("wins").innerHTML = "";
                var text = document.createTextNode("wins: " + wins)
                document.getElementById("wins").appendChild(text)
            }

            if (selected === "scissors") {
                gamestatus = "loss"
                losses = parseInt(losses) + 1
                localStorage.setItem("losses", losses)
                document.getElementById("losses").innerHTML = "";
                var text = document.createTextNode("losses: " + losses)
                document.getElementById("losses").appendChild(text)
            }
        }
        
        if (randomchoice === "paper") {
            document.getElementById("pc_image").innerHTML = "";
            var image = document.createElement("img");
            image.setAttribute("src", "images/theme" + theme + "/paper2.png")
            document.getElementById("pc_image").appendChild(image);

            if (selected === "rock") {
                gamestatus = "loss"
                losses = parseInt(losses) + 1
                localStorage.setItem("losses", losses)
                document.getElementById("losses").innerHTML = "";
                var text = document.createTextNode("losses: " + losses)
                document.getElementById("losses").appendChild(text)
            }

            if (selected === "paper") {
                gamestatus = "draw"
                draws = parseInt(draws) + 1
                localStorage.setItem("draws", draws)
                document.getElementById("draws").innerHTML = "";
                var text = document.createTextNode("draws: " + draws)
                document.getElementById("draws").appendChild(text)
            }

            if (selected === "scissors") {
                gamestatus = "win"
                wins = parseInt(wins) + 1
                localStorage.setItem("wins", wins)
                document.getElementById("wins").innerHTML = "";
                var text = document.createTextNode("wins: " + wins)
                document.getElementById("wins").appendChild(text)
            }
        }

        if (randomchoice === "scissors") {
            document.getElementById("pc_image").innerHTML = "";
            var image = document.createElement("img");
            image.setAttribute("src", "images/theme" + theme + "/scissors2.png")
            document.getElementById("pc_image").appendChild(image);

            if (selected === "rock") {
                gamestatus = "win"
                wins = parseInt(wins) + 1
                localStorage.setItem("wins", wins)
                document.getElementById("wins").innerHTML = "";
                var text = document.createTextNode("wins: " + wins)
                document.getElementById("wins").appendChild(text)
            }

            if (selected === "paper") {
                gamestatus = "loss"
                losses = parseInt(losses) + 1
                localStorage.setItem("losses", losses)
                document.getElementById("losses").innerHTML = "";
                var text = document.createTextNode("losses: " + losses)
                document.getElementById("losses").appendChild(text)
            }

            if (selected === "scissors") {
                gamestatus = "draw"
                draws = parseInt(draws) + 1
                localStorage.setItem("draws", draws)
                document.getElementById("draws").innerHTML = "";
                var text = document.createTextNode("draws: " + draws)
                document.getElementById("draws").appendChild(text)
            }
        }
    }
}

// if refresh button is pressed -> refresh the page
function refresh() {
    document.location.reload()
}


/*if restart(or "start" at first site vist) button is pressed ->
wins = 0, losses = 0, draws = 0, button = Restart will be saved in localStorage ->
wins, losses, draws and button values will be taken from localStorage ->
refresh the page*/

function restart() {
    localStorage.setItem("button", "Restart")
    localStorage.setItem("wins", 0)
    localStorage.setItem("losses", 0)
    localStorage.setItem("draws", 0)
    localStorage.getItem("wins")
    localStorage.getItem("losses")
    localStorage.getItem("draws")
    document.location.reload()
}






// from https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("theme_modal");

// Get the button that opens the modal
var btn = document.getElementById("select_theme_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}