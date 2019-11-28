"use strict";

window.addEventListener("load", function(){

    var monHero = document.getElementById("hero");
    var positionLeftHero = monHero.style.left;
    // var positionYHero = monHero.offsetTop;


    window.addEventListener("keydown", function(event){

        var position = event.keyCode;

        switch(position){
            // flèche directionnelle gauche
            case 37:
                positionLeftHero -= 50;
                monHero.style.left = positionLeftHero + "px";
                monHero.style.transform = "";
            break;
            // flèche directionnelle droite
            case 39:
                positionLeftHero += 50;
                monHero.style.left = positionLeftHero + "px";
                monHero.style.transform = "scaleX(-1)";
            break;
        }

    });

});