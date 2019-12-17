'use strict';

var heroAccueil = document.getElementById('heroAccueil');
var masqueHeroAccueil = document.getElementById('masqueHeroAccueil');
var heroAccueilLeft = heroAccueil.offsetLeft;
var stopHeroAccueil;
var start = document.getElementById('start');

var animeHeroAccueil = function(){
    stopHeroAccueil = setInterval(function(){
        heroAccueilLeft -= 156;
        heroAccueil.style.left = heroAccueilLeft + "px";
            if(heroAccueilLeft <= -2300){
                clearInterval(stopHeroAccueil);
            };
    }, 200);
};

start.addEventListener('click', function(){
    animeHeroAccueil();
    setTimeout(function(){
        window.location.href = "jeu.html";
    },4000);
});