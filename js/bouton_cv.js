'use strict';

function auCliqueDuBoutonCv(){
    var pMc = document.getElementsByClassName('pMc');
    var mBc = document.getElementsByClassName('mBc');
    var monBody = document.getElementById('monBody');
    mBc[0].addEventListener('click', function(){
        if(pMc[0].style.display == "flex"){
        pMc[0].style.display = "none";
        monBody.style.overflow = "initial";
        animationBoutonBurgerRetour();
        }else{
            pMc[0].style.display = "flex";
            monBody.style.overflow = "hidden";
            animationBoutonBurgerAller();
        };
    });
};

auCliqueDuBoutonCv();