'use strict';

/*************************************************************************************************************************/
/******************************************AU CLIC DU BOUTON BURGER*******************************************************/
/*************************************************************************************************************************/

var firstLine = document.getElementsByClassName('first_line');
var secondLine = document.getElementsByClassName('second_line');
var thirdLine = document.getElementsByClassName('third_line');

function animationBoutonBurgerAller(){
    firstLine[0].style = "left: 5px; transform: rotate(45deg); width: 53%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
    secondLine[0].style = "opacity: 0; transition: opacity .5s";
    thirdLine[0].style = "left: 4px; transform: rotate(-45deg); width: 53%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
};

function animationBoutonBurgerRetour(){
    firstLine[0].style = "left: 0; transform: rotate(0); width: 50%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
    secondLine[0].style = "opacity: 1; transition: opacity .5s";
    thirdLine[0].style = "left: 0; transform: rotate(0); width: 50%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
};