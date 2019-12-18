'use strict';

var persoAcc = document.getElementById('persoAcc');
var masquePersoAcc = document.getElementById('masquePersoAcc');
var persoAccLeft = persoAcc.offsetLeft;
var stopPersoAcc;
var start = document.getElementById('start');

var animePersoAcc = function(){
    stopPersoAcc = setInterval(function(){
        persoAccLeft -= 164.7;
        persoAcc.style.left = persoAccLeft + "px";
            if(persoAccLeft <= -2300){
                clearInterval(stopPersoAcc);
            };
    }, 200);
};

start.addEventListener('click', function(){
    animePersoAcc();
    setTimeout(function(){
        window.location.href = "jeu.html";
    },3000);
});