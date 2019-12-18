'use strict';

var persoAcc = document.getElementById('persoAcc');
var masquePersoAcc = document.getElementById('masquePersoAcc');
var persoAccLeft = persoAcc.offsetLeft;
var stoppersoAcc;
var start = document.getElementById('start');

var animepersoAcc = function(){
    stoppersoAcc = setInterval(function(){
        persoAccLeft -= 164.7;
        persoAcc.style.left = persoAccLeft + "px";
            if(persoAccLeft <= -2300){
                clearInterval(stoppersoAcc);
            };
    }, 200);
};

start.addEventListener('click', function(){
    animepersoAcc();
    setTimeout(function(){
        window.location.href = "jeu.html";
    },3000);
});