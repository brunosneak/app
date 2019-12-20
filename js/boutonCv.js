'use strict';

var persoPause = document.getElementsByClassName('persoPause');
var persoPauseLeft = persoPause[0].offsetLeft;

function auCliqueDuBoutonCv(){
    var pMc = document.getElementsByClassName('pMc');
    var mBc = document.getElementsByClassName('mBc');
    var monBody = document.getElementById('monBody');
    mBc[0].addEventListener('click', function(){
        if(pMc[0].style.display == "flex"){
        pMc[0].style.display = "none";
        monBody.style.overflow = "overlay";
        animationBoutonBurgerRetour();
        persoPause[0].style.display = "none";
        }else{
            pMc[0].style.display = "flex";
            monBody.style.overflow = "hidden";
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
    auCliqueDuBoutonCv();
});