window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
var intro = document.querySelector("#intro");
var options = {
    strings: ["Hello world!", "I'm Noah Fleitz"]
    , typeSpeed: 70
    , showCursor: false
    , backDelay: 1000
    , backSpeed: 50
    , smartBackspace: true
}
new WOW().init();
//Colors order: Red, Blue, Green
var colors = ["#e53935", "#00b4ff", "#00E676"];
const red = "#e53935";
const blue = "#00b4ff";
const green = "#00E676";
let colorElement = document.querySelectorAll(".color")
    , labelTag = document.getElementsByTagName("label")
    , submit = document.querySelector("[type='Submit']")
    , social = document.getElementById("social")
    , heart = document.querySelector(".fa-heart")
    , scene = document.querySelectorAll("#scene div")
    , colorBtn = document.querySelector(".color-btn")
    , initalColor = colors[Math.floor(Math.random() * colors.length)];
//Color Randomizer
var body = document.getElementsByTagName("body");

function colorChange(color) {
    //Iterates over all elements with class "color"
    for (var i = 0; i < colorElement.length; i++) {
        //if node is header change Bg-color else "else = text" change color
        if (colorElement[i].nodeName === "HEADER") {
            colorElement[i].style.backgroundColor = initalColor;
            colorElement[i].style.backgroundColor = color;
        }
        else if (colorElement[i].nodeName === "H1" || colorElement[i].nodeName === "P") {
            colorElement[i].style.color = initalColor;
            colorElement[i].style.color = color;
        }
        else if (colorElement[i].nodeName === "FIGCAPTION" || "FIGURE") {
            colorElement[i].style.backgroundColor = initalColor;
            colorElement[i].style.backgroundColor = color;
        }
    }; //colorElement for-loop
    for (var i = 0; i < labelTag.length; i++) {
        if (labelTag[i].nodeName === "LABEL") {
            labelTag[i].style.color = initalColor;
            labelTag[i].style.color = color;
        }
    }; //labelTag for loop
    submit.style.backgroundColor = initalColor;
    submit.style.backgroundColor = color;
    social.style.backgroundColor = initalColor;
    social.style.backgroundColor = color;
    heart.style.color = initalColor;
    heart.style.color = color;
};

function removeNoScroll(element) {
    element.classList.remove("noScroll");
}

function animationDelay() {
    for (var i = 0; i < scene.length; i++) {
        var currentBubble = scene[i];
        currentBubble.classList.remove("animationDelay");
    };
}

function cookieHandler() {
    //Storing Cookie String into Variable
    var cookie = document.cookie;
    //Spliting Cookie Sting at ";" into an array called cookieArr
    var cookieArr = cookie.split(";");
    //Cookie Object for key value pairs
    var cookieObj = {};
    //for loop through cookieArr
    for (var i = 0; i < cookieArr.length; i++) {
        //current cookie interation
        var currentCookie = cookieArr[i];
        //cookie string trim
        currentCookie = currentCookie.trim();
        //after trim the strings are seperated by the equal sign for key value pairs;
        var currentCookieArr = currentCookie.split("=");
        //cookieObj.prop "Property" is being made for each cookie interation. Each interation is a key value pair.
        cookieObj[currentCookieArr[0]] = currentCookieArr[1];
    }
    //if cookieObj property visited equals "true" 
    if (cookieObj.visited === "true") {
        //add text to span in header element
        intro.innerHTML = "I'm Noah Fleitz";
        //remove noScroll class on body element
        removeNoScroll(body[0]);
        //executes animation delay function
        animationDelay();
    }
    else {
        var typed = new Typed(intro, options);
        window.setTimeout(() => {
            removeNoScroll(body[0]);
        }, 4500)
        colorBtn.style.animationDelay = "4.5s";
    }
    //Cookie Created
    document.cookie = "visited = true;";
}
cookieHandler();
colorChange();