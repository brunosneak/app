'use strict';

function auCliqueDuBoutonAccueil(){
    var pMa = document.getElementsByClassName('pMa');
    var mBa = document.getElementsByClassName('mBa');
    mBa[0].addEventListener('click', function(){
        if(pMa[0].style.display == "flex"){
        pMa[0].style.display = "none";
        animationBoutonBurgerRetour();
        }else{
            pMa[0].style.display = "flex";
            animationBoutonBurgerAller();
        };
    });
};

auCliqueDuBoutonAccueil();