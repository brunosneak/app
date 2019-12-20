'use strict';

var persoPause = document.getElementsByClassName('persoPause');
var persoPauseLeft = persoPause[0].offsetLeft;

function auCliqueDuBoutonJeu(){
    var pMj = document.getElementsByClassName('pMj');
    var mBj = document.getElementsByClassName('mBj');
    mBj[0].addEventListener('click', function(){
        if(pMj[0].style.display == "flex"){
        pMj[0].style.display = "none";
        animationBoutonBurgerRetour();
        requestAnimationFrame(animationDuJeu);
        persoPause[0].style.display = "none";
        }else{
            pMj[0].style.display = "flex";
            animationBoutonBurgerAller();
            cancelAnimationFrame(rafId);
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
    auCliqueDuBoutonJeu();
});