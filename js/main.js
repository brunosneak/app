'use strict';

window.addEventListener("load", function(){

    //fonction lors du clique du bouton menu burger
    function auCliqueDuBouton(){
        let bouton = document.getElementById('menu_burger');
        bouton.onclick = function(){
            alert('coucou');
        }
    };
    // execution de la fonction menu burger
    auCliqueDuBouton();

    
    var parallax = document.getElementsByClassName("fond3");

    function mainParallax(){
    window.addEventListener('mousemove', function(event){
        // var stock = [event.clientY,event.clientX];
        // parallax[0].style.left = stock[1] + "px";
        });
    };
    mainParallax();
});
