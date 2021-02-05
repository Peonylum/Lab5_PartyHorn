// main.js

// TODO
var number = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var aud = document.getElementById("horn-sound");
var volImg = document.getElementById("volume-image");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var soundImg = document.getElementById("sound-image");
var honkBtn = document.getElementById("honk-btn");

number.addEventListener("input", function() {
    slider.value = number.value;
    aud.volume = number.value/100;
    honkBtn.disabled = false;

    if(number.value >= 67 && number.value <=100) {
        volImg.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(number.value >= 34 && number.value <=66) {
        volImg.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(number.value >= 1 && number.value <=33) {
        volImg.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        volImg.src = "./assets/media/icons/volume-level-0.svg";
        honkBtn.disabled = true;
        slider.value = 0;
    }
});

slider.addEventListener("input", function() {
    number.value = slider.value;
    aud.volume = slider.value/100;
    honkBtn.disabled = false;

    if(slider.value >= 67 && slider.value <=100) {
        volImg.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(slider.value >= 34 && slider.value <=66) {
        volImg.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(slider.value >= 1 && slider.value <=33) {
        volImg.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        volImg.src = "./assets/media/icons/volume-level-0.svg";
        honkBtn.disabled = true;
    }
});

airHorn.addEventListener("input", function() {
    aud.src = "./assets/media/audio/air-horn.mp3";
    soundImg.src = "./assets/media/images/air-horn.svg";
});

carHorn.addEventListener("input", function() {
    aud.src = "./assets/media/audio/car-horn.mp3";
    soundImg.src = "./assets/media/images/car.svg";
});

partyHorn.addEventListener("input", function() {
    aud.src = "./assets/media/audio/party-horn.mp3";
    soundImg.src = "./assets/media/images/party-horn.svg";
});

honkBtn.addEventListener("click", function(e) {
    e.preventDefault();
    aud.play();
});


