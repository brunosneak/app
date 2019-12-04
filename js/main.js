'use strict';

/*************************************************************************************************************************/
/*****************************************AU CHARGEMENT DE LA FENETRE*****************************************************/
/*************************************************************************************************************************/
window.addEventListener("load", function(){

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
        var boutonMenu = document.getElementById('menu_burger');
        boutonMenu.addEventListener('click', function(){
            if(pageMenu[0].style.display == "flex"){
            pageMenu[0].style.display = "none";
            animationBoutonBurgerRetour()
            }else{
                pageMenu[0].style.display = "flex";
                animationBoutonBurgerAller();
            };
        });
    };

    // execution de la fonction menu burger //

    auCliqueDuBouton();

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
    
});
