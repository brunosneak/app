"use strict";

/*********************************************************************************************************************/
/*********************************************INITIALISATION**********************************************************/
/*********************************************************************************************************************/

var fantomeVert = document.getElementById('fantomeVert');
var masqueFantomeVert = document.getElementById('masqueFantomeVert');
var fantomeVertLeft = fantomeVert.offsetLeft;
var ver = document.getElementById('ver');
var masqueVer = document.getElementById('masqueVer');
var verLeft = ver.offsetLeft;
var stopIntFant;
var stopIntVer;

var animeFantome = function(){
    stopIntFant = setInterval(function(){
        fantomeVertLeft -= 185.5;
        fantomeVert.style.left = fantomeVertLeft + "px";
            if(fantomeVertLeft <= -2800){
                fantomeVertLeft = -32;
                clearInterval(stopIntFant);
            };
    }, 200);
};
animeFantome();

masqueFantomeVert.addEventListener('click', function(){
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