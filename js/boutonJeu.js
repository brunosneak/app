'use strict';

function auCliqueDuBoutonJeu(){
    var pMj = document.getElementsByClassName('pMj');
    var mBj = document.getElementsByClassName('mBj');
    mBj[0].addEventListener('click', function(){
        if(pMj[0].style.display == "flex"){
        pMj[0].style.display = "none";
        animationBoutonBurgerRetour();
        requestAnimationFrame(animationDuJeu);
        persoPause.style.display = "none";
        }else{
            pMj[0].style.display = "flex";
            animationBoutonBurgerAller();
            cancelAnimationFrame(rafId);
            persoPause.style.display = "block";
            var persoId = setInterval(function(){
                persoPauseLeft -= 200;
                elements.persoPause.style.left = persoPauseLeft + "px";
                if(persoPauseLeft <= -800){
                    persoPauseLeft = 200;
                    clearInterval(persoId);
                };
            }, 300);
        };
    });
};

auCliqueDuBoutonJeu();