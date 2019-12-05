"use strict";

/*********************************************************************************************************************/
/*********************************************INITIALISATION**********************************************************/
/*********************************************************************************************************************/

var decors = [document.getElementById('fenetreGauche'),document.getElementById('fenetreDroite'),document.getElementById('pieceJs'),document.getElementById('boulePique'),document.getElementById('masqueHero'),document.getElementById('font_vert'),document.getElementById('hero'),document.getElementById('masqueFantome'),document.getElementById('fantome'),document.getElementById('masqueInsecte'),document.getElementById('insecte'),document.getElementById('masqueInsecte2'),document.getElementById('insecte2')];
var masqueHero = decors[4];
var hero = decors[6];
var heroLeft = hero.style.left;
var fantome = decors[8];
var fantomeLeft = fantome.style.left;
var insecte = decors[10];
var insecteLeft = insecte.style.left;
var insecte2 = decors[12];
var insecte2Left = insecte2.style.left;
    
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

/*************************************************************************************************************************/
/***********************************POSITIONNEMENT DEPART ALEATOIRE DU DECORS*********************************************/
/*************************************************************************************************************************/

    var animationDuJeu = function(){
        
        var positionDeDepartFenetre = function(element1, element2){
            element1.style.bottom = "-" + Math.floor(Math.random()*1000) - element1.offsetHeight + "px";
            element2.style.bottom = element1.style.bottom;
        }
        
        var positionDeDepartObjet = function(element){
            element.style.bottom = "-" + Math.floor(Math.random()*1000) - element.offsetHeight + "px";
        }

/*************************************************************************************************************************/
/*********************************************ANIMATION DU DECORS*********************************************************/
/*************************************************************************************************************************/

    var slideUp = function(){

        var fenetreGaucheTop = decors[0].offsetTop;
        fenetreGaucheTop -= 5;
        decors[0].style.top = fenetreGaucheTop + "px";

        var fenetreDroiteTop = decors[1].offsetTop;
        fenetreDroiteTop -= 5;
        decors[1].style.top = fenetreDroiteTop + "px";

        var pieceTop = decors[2].offsetTop;
        pieceTop -= 5;
        decors[2].style.top = pieceTop + "px";

        var boulePiqueTop = decors[3].offsetTop;
        boulePiqueTop -= 5;
        decors[3].style.top = boulePiqueTop + "px";

        var fantomeTop = decors[7].offsetTop;
        fantomeTop -= 5;
        decors[7].style.top = fantomeTop + "px";

        var insecteTop = decors[9].offsetTop;
        insecteTop -= 5;
        decors[9].style.top = insecteTop + "px";

        var insecteTop2 = decors[11].offsetTop;
        insecteTop2 -= 5;
        decors[11].style.top = insecteTop2 + "px";

/*************************************************************************************************************************/
/*********************************************RETOUR CASE DEPART**********************************************************/
/*************************************************************************************************************************/

        var fond_vert = document.getElementById('fond_vert');
        var fenetreCoinBasGauche = decors[0].offsetTop + decors[0].offsetHeight;
        var pieceCoinBasGauche = decors[2].offsetTop + decors[2].offsetHeight;
        var boulePiqueCoinBasGauche = decors[3].offsetTop + decors[3].offsetHeight;
        var fantomeCoinBasGauche = decors[7].offsetTop + decors[7].offsetHeight;
        var insecteCoinBasGauche = decors[9].offsetTop + decors[9].offsetHeight;
        var insecte2CoinBasGauche = decors[11].offsetTop + decors[11].offsetHeight;

        if(fond_vert.offsetTop >= fenetreCoinBasGauche){
            decors[0].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[1].style.top = decors[0].style.top;
        }

        if(fond_vert.offsetTop >= pieceCoinBasGauche){
            decors[2].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[2].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

        if(fond_vert.offsetTop >= boulePiqueCoinBasGauche){
            decors[3].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[3].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

        if(fond_vert.offsetTop >= fantomeCoinBasGauche){
            decors[7].style.top = fond_vert.offsetHeight + "px";
            decors[7].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

        if(fond_vert.offsetTop >= insecteCoinBasGauche){
            decors[9].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
        }

        if(fond_vert.offsetTop >= insecte2CoinBasGauche){
            decors[11].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
        }
    };

/*************************************************************************************************************************/
/******************************************DEPLACEMENT DU PERSONNAGE******************************************************/
/*************************************************************************************************************************/

    var coordonneesMasqueX = masqueHero.offsetLeft;
    var coordonneesMasqueY = masqueHero.offsetTop;

    window.addEventListener("keydown", function(event){

        var position = event.keyCode;

        switch(position){
            // flèche directionnelle gauche
            case 37:
                coordonneesMasqueX -= 10;
                masqueHero.style.left = coordonneesMasqueX + "px";
                masqueHero.style.transform = "";
            break;
            // flèche directionnelle haut
            case 38:
                coordonneesMasqueY -= 10;
                masqueHero.style.top = coordonneesMasqueY + "px";
            break;
            // flèche directionnelle droite
            case 39:
                coordonneesMasqueX += 10;
                masqueHero.style.left = coordonneesMasqueX + "px";
                masqueHero.style.transform = "scaleX(-1)";
            break;
            // flèche directionnelle bas
            case 40:
                coordonneesMasqueY += 10;
                masqueHero.style.top = coordonneesMasqueY + "px";
            break
        };

    });

/*************************************************************************************************************************/
/*******************************************ANIMATION DU PERSONNAGE*******************************************************/
/*************************************************************************************************************************/

    var mouvementHero = function(){
        heroLeft -= 120;
        if(heroLeft < -360){
            heroLeft = -14;
        };
        hero.style.left = heroLeft + "px";
    };
    
/*************************************************************************************************************************/
/********************************************ANIMATION DU FANTOME*********************************************************/
/*************************************************************************************************************************/

    var mouvementFantome = function(){
        fantomeLeft -= 120;
        if(fantomeLeft < -840){
            fantomeLeft = 0;
        };
        fantome.style.left = fantomeLeft + "px";
    };
    
/*************************************************************************************************************************/
/*******************************************ANIMATION DE L'INSECTE********************************************************/
/*************************************************************************************************************************/

    var mouvementInsecte = function(){
        insecteLeft -= 286;
        if(insecteLeft < -4290){
            insecteLeft = 0;
        };
        insecte.style.left = insecteLeft + "px";
    };
    

/*************************************************************************************************************************/
/******************************************ANIMATION DE L'INSECTE 2*******************************************************/
/*************************************************************************************************************************/

    var mouvementInsecte2 = function(){
        insecte2Left -= 286;
        if(insecte2Left < -4290){
            insecte2Left = 0;
        };
        insecte2.style.left = insecte2Left + "px";
    };
    

/*************************************************************************************************************************/
/********************************************DETECTEUR DE COLLISION*******************************************************/
/*************************************************************************************************************************/

    var coordonneesMasque = masqueHero.getBoundingClientRect();
    var coordonneesFantome = decors[7].getBoundingClientRect();
    var coordonneesBoulePique = decors[3].getBoundingClientRect();
    var coordonneesPieceJs = decors[2].getBoundingClientRect();

    if(masqueHero.offsetLeft <= 110){
        masqueHero.style.left = "110px";
    };
    if(masqueHero.offsetLeft >= 920){
        masqueHero.style.left = "920px";
    };

    if(coordonneesMasque.x < coordonneesFantome.x + coordonneesFantome.width &&
        coordonneesMasque.x + coordonneesMasque.width > coordonneesFantome.x &&
        coordonneesMasque.y < coordonneesFantome.y + coordonneesFantome.height &&
        coordonneesMasque.height + coordonneesMasque.y > coordonneesFantome.y || 

        coordonneesMasque.x < coordonneesBoulePique.x + coordonneesBoulePique.width &&
        coordonneesMasque.x + coordonneesMasque.width > coordonneesBoulePique.x &&
        coordonneesMasque.y < coordonneesBoulePique.y + coordonneesBoulePique.height &&
        coordonneesMasque.height + coordonneesMasque.y > coordonneesBoulePique.y){
        alert("You are dead");
    };

    if(coordonneesMasque.x < coordonneesPieceJs.x + coordonneesPieceJs.width &&
        coordonneesMasque.x + coordonneesMasque.width > coordonneesPieceJs.x &&
        coordonneesMasque.y < coordonneesPieceJs.y + coordonneesPieceJs.height &&
        coordonneesMasque.height + coordonneesMasque.y > coordonneesPieceJs.y){
            var fond_vert = document.getElementById('fond_vert');
            decors[2].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[2].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

/*************************************************************************************************************************/
/*******************************************EXECUTION DES FONCTIONS*******************************************************/
/*************************************************************************************************************************/

    positionDeDepartFenetre(decors[0], decors[1]);
    positionDeDepartObjet(decors[2]);
    positionDeDepartObjet(decors[3]);
    positionDeDepartObjet(decors[7]);
    positionDeDepartObjet(decors[9]);
    positionDeDepartObjet(decors[11]);
    slideUp();
    mouvementHero();
    mouvementFantome();
    mouvementInsecte();
    mouvementInsecte2();
    requestAnimationFrame(animationDuJeu);
};

/*************************************************************************************************************************/
/*****************************************AU CHARGEMENT DE LA FENETRE*****************************************************/
/*************************************************************************************************************************/

window.addEventListener("load", function(){
    // animationDuJeu();
});