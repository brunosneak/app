'use strict';

function auCliqueDuBoutonJeu(){
    var pMj = document.getElementsByClassName('pMj');
    var mBj = document.getElementsByClassName('mBj');
    mBj[0].addEventListener('click', function(){
        if(pMj[0].style.display == "flex"){
        pMj[0].style.display = "none";
        animationBoutonBurgerRetour();
        requestAnimationFrame(animationDuJeu);
        }else{
            pMj[0].style.display = "flex";
            animationBoutonBurgerAller();
            cancelAnimationFrame(rafId);
        };
    });
};

auCliqueDuBoutonJeu();