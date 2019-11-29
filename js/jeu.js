"use strict";

window.addEventListener("load", function(){

    // var monHero = document.getElementById("hero");
    // var positionLeftHero = monHero.offsetLeft;
    // // var positionYHero = monHero.offsetTop;


    // window.addEventListener("keydown", function(event){

    //     var position = event.keyCode;

    //     switch(position){
    //         // flèche directionnelle gauche
    //         case 37:
    //             positionLeftHero -= 20;
    //             monHero.style.left = positionLeftHero + "px";
    //             monHero.style.transform = "";
    //         break;
    //         // flèche directionnelle droite
    //         case 39:
    //             positionLeftHero += 20;
    //             monHero.style.left = positionLeftHero + "px";
    //             monHero.style.transform = "scaleX(-1)";
    //         break;
    //     }

    // });

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    
    var fenetre = document.getElementById('fenetreGauche');

    var fenetreAnimee = function(){
        
        var positionFenetre = fenetre.offsetTop;
            positionFenetre -= 2;
            fenetre.style.top = positionFenetre + "px";

            requestAnimationFrame(fenetreAnimee);
    };

});