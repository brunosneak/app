'use strict';

/*************************************************************************************************************************/
/******************************************AU CLIC DU BOUTON BURGER*******************************************************/
/*************************************************************************************************************************/

function animationBoutonBurgerAller(){
    var firstLine = document.getElementsByClassName('first_line');
    var secondLine = document.getElementsByClassName('second_line');
    var thirdLine = document.getElementsByClassName('third_line');
    firstLine[0].style = "left: 5px; transform: rotate(45deg); width: 53%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
    secondLine[0].style = "opacity: 0; transition: opacity .5s";
    thirdLine[0].style = "left: 4px; transform: rotate(-45deg); width: 53%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
};

function animationBoutonBurgerRetour(){
    var firstLine = document.getElementsByClassName('first_line');
    var secondLine = document.getElementsByClassName('second_line');
    var thirdLine = document.getElementsByClassName('third_line');
    firstLine[0].style = "left: 0; transform: rotate(0); width: 50%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
    secondLine[0].style = "opacity: 1; transition: opacity .5s";
    thirdLine[0].style = "left: 0; transform: rotate(0); width: 50%; transform-origin: top left; transition: transform .5s, width .5s, left .5s";
};

function auCliqueDuBouton(){
    var pageMenu = document.getElementsByClassName('pageMenu');
    var boutonMenu = document.getElementsByClassName('menu_burger');
    boutonMenu[0].addEventListener('click', function(){
        if(pageMenu[0].style.display == "flex"){
        pageMenu[0].style.display = "none";
        animationBoutonBurgerRetour();
        requestAnimationFrame(animationDuJeu);
        }else{
            pageMenu[0].style.display = "flex";
            animationBoutonBurgerAller();
            cancelAnimationFrame(rafId);
        };
    });
};

auCliqueDuBouton();

    // /!\ REGLER PROBLEME BOUTON MENU ACCUEIL ET CELUI DU JEU /!\

/*************************************************************************************************************************/
/**************************************************PARALLAX***************************************************************/
/*************************************************************************************************************************/

    // var parallax = document.getElementsByClassName("fond3");

    // function mainParallax(){
    // window.addEventListener('mousemove', function(event){
    //     // var stock = [event.clientY,event.clientX];
    //     // parallax[0].style.left = stock[1] + "px";
    //     });
    // };
    // mainParallax();
