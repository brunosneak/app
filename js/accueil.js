'use strict';


var persoAcc = document.getElementById('persoAcc');
var masquePersoAcc = document.getElementById('masquePersoAcc');
var start = document.getElementById('start');
var croix = document.getElementById('croix');
var boiteInfo = document.getElementById('boiteInfo');
var persoAccLeft = persoAcc.offsetLeft;
var stopPersoAcc;

window.addEventListener("load", function(){
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

    croix.addEventListener('click', function(){
        boiteInfo.style = "opacity: 0; transition: opacity .5s";
        setTimeout(function(){
            boiteInfo.style.display = "none";
        },500);
    });
});