var balance = 200
var your_bet = 0

var start_count = 0
var end_count = 0

var your_points = 0
var dealer_points = 0

var your_hand_aces = 0
var dealer_hand_aces = 0

Cards = [["2", "Spade", 2], ["3", "Spade", 3], ["4", "Spade", 4], ["5", "Spade", 5], ["6", "Spade", 6], ["7", "Spade", 7], ["8", "Spade", 8], ["9", "Spade", 9], ["10", "Spade", 10], ["Jack", "Spade", 10], ["Queen", "Spade", 10], ["King", "Spade", 10], ["Ace", "Spade", 11], ["2", "Heart", 2], ["3", "Heart", 3], ["4", "Heart", 4], ["5", "Heart", 5], ["6", "Heart", 6], ["7", "Heart", 7], ["8", "Heart", 8], ["9", "Heart", 9], ["10", "Heart", 10], ["Jack", "Heart", 10], ["Queen", "Heart", 10], ["King", "Heart", 10], ["Ace", "Heart", 11], ["2", "Club", 2], ["3", "Club", 3], ["4", "Club", 4], ["5", "Club", 5], ["6", "Club", 6], ["7", "Club", 7], ["8", "Club", 8], ["9", "Club", 9], ["10", "Club", 10], ["Jack", "Club", 10], ["Queen", "Club", 10], ["King", "Club", 10], ["Ace", "Club", 11], ["2", "Diamond", 2], ["3", "Diamond", 3], ["4", "Diamond", 4], ["5", "Diamond", 5], ["6", "Diamond", 6], ["7", "Diamond", 7], ["8", "Diamond", 8], ["9", "Diamond", 9], ["10", "Diamond", 10], ["Jack", "Diamond", 10], ["Queen", "Diamond", 10], ["King", "Diamond", 10], ["Ace", "Diamond", 11]]

your_hand = []
dealer_hand = []

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function bet_ten() {
    if (your_bet + 10 < balance || your_bet + 10 === balance) {
        your_bet += 10;
        document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$";

        removeAllChildNodes(document.getElementById("card_images_player"))
        removeAllChildNodes(document.getElementById("card_images_dealer"))

        document.getElementById("status_text").innerHTML = ""
        document.getElementById("dealer_points").innerHTML = ""
        document.getElementById("your_points").innerHTML = ""
    }
}

function bet_twentyfive() {
    if (your_bet + 25 < balance || your_bet + 25 === balance) {
        your_bet += 25;
        document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$";

        removeAllChildNodes(document.getElementById("card_images_player"))
        removeAllChildNodes(document.getElementById("card_images_dealer"))

        document.getElementById("status_text").innerHTML = ""
        document.getElementById("dealer_points").innerHTML = ""
        document.getElementById("your_points").innerHTML = ""
    }
}

function bet_fifty() {
    if (your_bet + 50 < balance || your_bet + 50 === balance) {
        your_bet += 50;
        document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$";

        removeAllChildNodes(document.getElementById("card_images_player"))
        removeAllChildNodes(document.getElementById("card_images_dealer"))

        document.getElementById("status_text").innerHTML = ""
        document.getElementById("dealer_points").innerHTML = ""
        document.getElementById("your_points").innerHTML = ""
    }
}

function bet_hundred() {
    if (your_bet + 100 < balance || your_bet + 100 === balance) {
        your_bet += 100;
        document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$";

        removeAllChildNodes(document.getElementById("card_images_player"))
        removeAllChildNodes(document.getElementById("card_images_dealer"))

        document.getElementById("status_text").innerHTML = ""
        document.getElementById("dealer_points").innerHTML = ""
        document.getElementById("your_points").innerHTML = ""
    }
}

function bet_all() {
    your_bet = balance
    document.getElementById("your_bet").innerHTML = "Your bet: " + balance + "$";

    removeAllChildNodes(document.getElementById("card_images_player"))
    removeAllChildNodes(document.getElementById("card_images_dealer"))

    document.getElementById("status_text").innerHTML = ""
        document.getElementById("dealer_points").innerHTML = ""
        document.getElementById("your_points").innerHTML = ""
}

function clear_bet() {
    your_bet = 0
    document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$"
}

function won() {
    document.getElementById("status_text").innerText = "You won: " + your_bet * 2 + "$"

    document.getElementById("dealer_points").innerText = dealer_points
    document.getElementById("your_points").innerText = your_points

    balance += your_bet * 2
    document.getElementById("balance").innerHTML = "Balance: " + balance + "$"

    your_bet = 0
    document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$"
}

function loss() {
    document.getElementById("status_text").innerText = "You lost: " + your_bet + "$"

    document.getElementById("dealer_points").innerText = dealer_points
    document.getElementById("your_points").innerText = your_points

    balance -= your_bet
    document.getElementById("balance").innerHTML = "Balance: " + balance + "$"

    your_bet = 0
    document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$"
}

function draw() {
    document.getElementById("status_text").innerText = "It's a draw!"

    document.getElementById("dealer_points").innerText = dealer_points
    document.getElementById("your_points").innerText = your_points

    your_bet = 0
    document.getElementById("your_bet").innerHTML = "Your bet: " + your_bet + "$"
}

function get_card() {
    if (start_count > 0) {
        var a_card = Cards[Math.floor(Math.random()*Cards.length)];
        your_hand.push(a_card)

        if (a_card[0] === "Ace") {
            your_hand_aces += 1
        }

        var image = document.createElement("img");
        image.setAttribute("src", "images/" + a_card[1] + "/" + a_card[0] + ".png");
        image.setAttribute("class", "player_card_image")
        document.getElementById("card_images_player").appendChild(image);

        var a_card_index = Cards.indexOf(a_card)
        if (a_card_index !== -1) {
            Cards.splice(a_card_index, 1);
        }
    }
}

function dealer_get_card() {
    var a_card = Cards[Math.floor(Math.random()*Cards.length)];
    dealer_hand.push(a_card)

    if (a_card[0] === "Ace") {
        dealer_hand_aces += 1
    }

    var image = document.createElement("img");
        image.setAttribute("src", "images/" + a_card[1] + "/" + a_card[0] + ".png");
        image.setAttribute("class", "dealer_card_image")
        document.getElementById("card_images_dealer").appendChild(image);

    var a_card_index = Cards.indexOf(a_card)
    if (a_card_index !== -1) {
        Cards.splice(a_card_index, 1);
    }
}

function start() {
    if (your_bet > 0) {
        if (start_count < 1) {

            start_count += 1
            end_count = 0

            your_hand = []
            dealer_hand = []
            
            get_card()
            get_card()
            dealer_get_card()
        }
    }
}

function end() {
    if (end_count < 1) {

        console.log("dealer aces: " + dealer_hand_aces)
        console.log("your aces: " + your_hand_aces)
        
        end_count +=1
        start_count = 0

        your_points = 0
        dealer_points = 0


        let your_hand_length = your_hand.length
        for (var i = 0; i < your_hand_length; i++) {
            your_points += your_hand[i][2]
        }

        let dealer_hand_length = dealer_hand.length
        for (var i = 0; i < dealer_hand_length; i++) {
            dealer_points += dealer_hand[i][2]
        }

        if (your_points > 21 && your_hand_aces === 1 || your_points > 21 && your_hand_aces > 1) {
            while (your_hand_aces > 0) {
                your_hand_aces -= 1
                your_points -= 10
            }
        }

        if (dealer_points > 21 && dealer_hand_aces > 0 || dealer_points > 21 && dealer_hand_aces > 1) {
            while (dealer_hand_aces > 0) {
                dealer_hand_aces -= 1
                dealer_points -= 10
            }
        }

        if (dealer_points === 16 || dealer_points < 16) {
            while (dealer_points === 16 || dealer_points < 16) {
                dealer_get_card()

                dealer_points = 0

                let dealer_hand_length = dealer_hand.length
                for (var i = 0; i < dealer_hand_length; i++) {
                    dealer_points += dealer_hand[i][2]
                }
            }
        }
    
        if (your_points > dealer_points && your_points === 21 || your_points > dealer_points && your_points < 21) {
            won()
        }
        if (your_points < 21 && dealer_points > 21) {
            won()
        }
        if (dealer_points > your_points && dealer_points === 21 || dealer_points > your_points && dealer_points < 21) {
            loss()
        }
        if (dealer_points < 21 && your_points > 21) {
            loss()
        }
        if (your_points === dealer_points) {
            draw()
        }
        if (your_points > 21 && dealer_points > 21) {
            draw()
        }

        console.log(your_hand)
        console.log(dealer_hand)

        Cards = [["2", "Spade", 2], ["3", "Spade", 3], ["4", "Spade", 4], ["5", "Spade", 5], ["6", "Spade", 6], ["7", "Spade", 7], ["8", "Spade", 8], ["9", "Spade", 9], ["10", "Spade", 10], ["Jack", "Spade", 10], ["Queen", "Spade", 10], ["King", "Spade", 10], ["Ace", "Spade", 11], ["2", "Heart", 2], ["3", "Heart", 3], ["4", "Heart", 4], ["5", "Heart", 5], ["6", "Heart", 6], ["7", "Heart", 7], ["8", "Heart", 8], ["9", "Heart", 9], ["10", "Heart", 10], ["Jack", "Heart", 10], ["Queen", "Heart", 10], ["King", "Heart", 10], ["Ace", "Heart", 11], ["2", "Club", 2], ["3", "Club", 3], ["4", "Club", 4], ["5", "Club", 5], ["6", "Club", 6], ["7", "Club", 7], ["8", "Club", 8], ["9", "Club", 9], ["10", "Club", 10], ["Jack", "Club", 10], ["Queen", "Club", 10], ["King", "Club", 10], ["Ace", "Club", 11], ["2", "Diamond", 2], ["3", "Diamond", 3], ["4", "Diamond", 4], ["5", "Diamond", 5], ["6", "Diamond", 6], ["7", "Diamond", 7], ["8", "Diamond", 8], ["9", "Diamond", 9], ["10", "Diamond", 10], ["Jack", "Diamond", 10], ["Queen", "Diamond", 10], ["King", "Diamond", 10], ["Ace", "Diamond", 11]]

        console.log(your_points)
        console.log(dealer_points)

        your_hand_aces = 0
        dealer_hand_aces = 0
    }
}
