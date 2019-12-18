"use strict";

/*********************************************************************************************************************/
/*********************************************INITIALISATION**********************************************************/
/*********************************************************************************************************************/

var fantomeVertContact = document.getElementById('fantomeVertContact');
var masqueFantomeVertContact = document.getElementById('masqueFantomeVertContact');
var fantomeVertContactLeft = fantomeVertContact.offsetLeft;
var ver = document.getElementById('ver');
var masqueVer = document.getElementById('masqueVer');
var verLeft = ver.offsetLeft;
var stopIntFant;
var stopIntVer;

var animeFantome = function(){
    stopIntFant = setInterval(function(){
        fantomeVertContactLeft -= 185.5;
        fantomeVertContact.style.left = fantomeVertContactLeft + "px";
            if(fantomeVertContactLeft <= -2800){
                fantomeVertContactLeft = -32;
                clearInterval(stopIntFant);
            };
    }, 200);
};
animeFantome();

masqueFantomeVertContact.addEventListener('click', function(){
    clearInterval(stopIntFant);
});

var animeVer = function(){
    stopIntVer = setInterval(function(){
        verLeft -= 459;
        ver.style.left = verLeft + "px";
            if(verLeft <= -4500){
                verLeft = 0;
                clearInterval(stopIntVer);
            };
    }, 200);
};
animeVer();