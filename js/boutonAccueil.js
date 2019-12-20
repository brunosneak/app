'use strict';

var persoPause = document.getElementsByClassName('persoPause');
var persoPauseLeft = persoPause[0].offsetLeft;

function auCliqueDuBoutonAccueil(){
    var pMa = document.getElementsByClassName('pMa');
    var mBa = document.getElementsByClassName('mBa');
    mBa[0].addEventListener('click', function(){
        if(pMa[0].style.display == "flex"){
        pMa[0].style.display = "none";
        animationBoutonBurgerRetour();
        persoPause[0].style.display = "none";
        }else{
            pMa[0].style.display = "flex";
            animationBoutonBurgerAller();
            persoPause[0].style.display = "block";
            var persoId = setInterval(function(){
                persoPauseLeft -= 200;
                persoPause[0].style.left = persoPauseLeft + "px";
                if(persoPauseLeft <= -800){
                    persoPauseLeft = 200;
                    clearInterval(persoId);
                };
            }, 300);
        };
    });
};

window.addEventListener("load", function(){
    auCliqueDuBoutonAccueil();
});