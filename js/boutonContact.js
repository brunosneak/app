'use strict';

function auCliqueDuBoutonContact(){
    var pMcontact = document.getElementsByClassName('pMcontact');
    var mBcontact = document.getElementsByClassName('mBcontact');
    mBcontact[0].addEventListener('click', function(){
        if(pMcontact[0].style.display == "flex"){
        pMcontact[0].style.display = "none";
        animationBoutonBurgerRetour();
        }else{
            pMcontact[0].style.display = "flex";
            animationBoutonBurgerAller();
        };
    });
};

window.addEventListener("load", function(){
    auCliqueDuBoutonContact();
});