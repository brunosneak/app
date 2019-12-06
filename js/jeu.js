"use strict";

/*********************************************************************************************************************/
/*********************************************INITIALISATION**********************************************************/
/*********************************************************************************************************************/

var decors = [document.getElementById('fenetreGauche'),document.getElementById('fenetreDroite'),document.getElementById('pieceJs'),document.getElementById('boulePiqueCollision'),document.getElementById('heroCollision'),document.getElementById('font_vert'),document.getElementById('hero'),document.getElementById('fantomeCollision'),document.getElementById('fantome'),document.getElementById('masqueInsecte'),document.getElementById('insecte'),document.getElementById('masqueInsecte2'),document.getElementById('insecte2'),document.getElementById('pieceCss3'),document.getElementById('pieceHtml5'),document.getElementsByClassName('resultat'),document.getElementsByClassName('score'),document.getElementsByClassName('menu_burger'),document.getElementsByClassName('affichage')];

var masqueHero = decors[4];
var hero = decors[6];
var heroLeft = hero.style.left = -14;
var fantome = decors[8];
var fantomeLeft = fantome.style.left;
var insecte = decors[10];
var insecteLeft = insecte.style.left;
var insecte2 = decors[12];
var insecte2Left = insecte2.style.left;
var scoreTotal = 0;
var stockageInnerHtml = decors[15][0].innerHTML;
var rafId;
var pageMenu = document.getElementsByClassName('pageMenu');
var gameOver = document.createElement('p');
gameOver.className = "gameOver";
gameOver.innerHTML = "game over";

setInterval(function(){
    heroLeft -= 120;
    fantomeLeft -= 120;
}, 200);

setInterval(function(){
    insecteLeft -= 286;
    insecte2Left -= 286;
    }, 100);
    
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
        fenetreGaucheTop -= 6;
        decors[0].style.top = fenetreGaucheTop + "px";

        var fenetreDroiteTop = decors[1].offsetTop;
        fenetreDroiteTop -= 6;
        decors[1].style.top = fenetreDroiteTop + "px";

        var pieceJsTop = decors[2].offsetTop;
        pieceJsTop -= 6;
        decors[2].style.top = pieceJsTop + "px";

        var boulePiqueTop = decors[3].offsetTop;
        boulePiqueTop -= 6;
        decors[3].style.top = boulePiqueTop + "px";

        var fantomeTop = decors[7].offsetTop;
        fantomeTop -= 7;
        decors[7].style.top = fantomeTop + "px";

        var insecteTop = decors[9].offsetTop;
        insecteTop -= 6;
        decors[9].style.top = insecteTop + "px";

        var insecteTop2 = decors[11].offsetTop;
        insecteTop2 -= 6;
        decors[11].style.top = insecteTop2 + "px";

        var pieceCss3Top = decors[13].offsetTop;
        pieceCss3Top -= 6;
        decors[13].style.top = pieceCss3Top + "px";

        var pieceHtml5Top = decors[14].offsetTop;
        pieceHtml5Top -= 6;
        decors[14].style.top = pieceHtml5Top + "px";

        if(decors[15][0].innerHTML >= 500){
            fenetreGaucheTop -= 2;
            fenetreDroiteTop -= 2;
            pieceJsTop -= 2;
            boulePiqueTop -= 2;
            fantomeTop -= 2;
            insecteTop -= 2;
            insecteTop2 -= 2;
            pieceCss3Top -= 2;
            pieceHtml5Top -= 2;
            decors[0].style.top = fenetreGaucheTop + "px";
            decors[1].style.top = fenetreDroiteTop + "px";
            decors[2].style.top = pieceJsTop + "px";
            decors[3].style.top = boulePiqueTop + "px";
            decors[7].style.top = fantomeTop + "px";
            decors[9].style.top = insecteTop + "px";
            decors[11].style.top = insecteTop2 + "px";
            decors[13].style.top = pieceCss3Top + "px";
            decors[14].style.top = pieceHtml5Top + "px";
        }

        if(decors[15][0].innerHTML >= 1000){
            fenetreGaucheTop -= 2;
            fenetreDroiteTop -= 2;
            pieceJsTop -= 2;
            boulePiqueTop -= 2;
            fantomeTop -= 2;
            insecteTop -= 2;
            insecteTop2 -= 2;
            pieceCss3Top -= 2;
            pieceHtml5Top -= 2;
            decors[0].style.top = fenetreGaucheTop + "px";
            decors[1].style.top = fenetreDroiteTop + "px";
            decors[2].style.top = pieceJsTop + "px";
            decors[3].style.top = boulePiqueTop + "px";
            decors[7].style.top = fantomeTop + "px";
            decors[9].style.top = insecteTop + "px";
            decors[11].style.top = insecteTop2 + "px";
            decors[13].style.top = pieceCss3Top + "px";
            decors[14].style.top = pieceHtml5Top + "px";
        }

        if(decors[15][0].innerHTML >= 2000){
            fenetreGaucheTop -= 2;
            fenetreDroiteTop -= 2;
            pieceJsTop -= 2;
            boulePiqueTop -= 2;
            fantomeTop -= 2;
            insecteTop -= 2;
            insecteTop2 -= 2;
            pieceCss3Top -= 2;
            pieceHtml5Top -= 2;
            decors[0].style.top = fenetreGaucheTop + "px";
            decors[1].style.top = fenetreDroiteTop + "px";
            decors[2].style.top = pieceJsTop + "px";
            decors[3].style.top = boulePiqueTop + "px";
            decors[7].style.top = fantomeTop + "px";
            decors[9].style.top = insecteTop + "px";
            decors[11].style.top = insecteTop2 + "px";
            decors[13].style.top = pieceCss3Top + "px";
            decors[14].style.top = pieceHtml5Top + "px";
        }

/*************************************************************************************************************************/
/*********************************************RETOUR CASE DEPART**********************************************************/
/*************************************************************************************************************************/

        var fond_vert = document.getElementById('fond_vert');
        var fenetreYHeight = decors[0].offsetTop + decors[0].offsetHeight;
        var pieceJsYHeight = decors[2].offsetTop + decors[2].offsetHeight;
        var boulePiqueYHeight = decors[3].offsetTop + decors[3].offsetHeight;
        var fantomeYHeight = decors[7].offsetTop + decors[7].offsetHeight;
        var insecteYHeight = decors[9].offsetTop + decors[9].offsetHeight;
        var insecte2YHeight = decors[11].offsetTop + decors[11].offsetHeight;
        var pieceCss3YHeight = decors[13].offsetTop + decors[13].offsetHeight;
        var pieceHtml5YHeight = decors[14].offsetTop + decors[14].offsetHeight;

        if(fond_vert.offsetTop >= fenetreYHeight){
            decors[0].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[1].style.top = decors[0].style.top;
        }

        if(fond_vert.offsetTop >= pieceJsYHeight){
            decors[2].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[2].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

        if(fond_vert.offsetTop >= boulePiqueYHeight){
            decors[3].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[3].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

        if(fond_vert.offsetTop >= fantomeYHeight){
            decors[7].style.top = fond_vert.offsetHeight + "px";
            decors[7].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

        if(fond_vert.offsetTop >= insecteYHeight){
            decors[9].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
        }

        if(fond_vert.offsetTop >= insecte2YHeight){
            decors[11].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
        }

        if(fond_vert.offsetTop >= pieceCss3YHeight){
            decors[13].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[13].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
        }

        if(fond_vert.offsetTop >= pieceHtml5YHeight){
            decors[14].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[14].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
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
            // case 38:
            //     coordonneesMasqueY -= 10;
            //     masqueHero.style.top = coordonneesMasqueY + "px";
            // break;
            // flèche directionnelle droite
            case 39:
                coordonneesMasqueX += 10;
                masqueHero.style.left = coordonneesMasqueX + "px";
                masqueHero.style.transform = "scaleX(-1)";
            break;
            // flèche directionnelle bas
            // case 40:
            //     coordonneesMasqueY += 10;
            //     masqueHero.style.top = coordonneesMasqueY + "px";
            // break
        };

    });

/*************************************************************************************************************************/
/*******************************************ANIMATION DU PERSONNAGE*******************************************************/
/*************************************************************************************************************************/
    
var mouvementHero = function(){
    heroLeft;
    if(heroLeft < -360){
        heroLeft = -14;
    };
    hero.style.left = heroLeft + "px";
};

/*************************************************************************************************************************/
/********************************************ANIMATION DU FANTOME*********************************************************/
/*************************************************************************************************************************/

    var mouvementFantome = function(){
        fantomeLeft;
        if(fantomeLeft < -840){
            fantomeLeft = 0;
        };
        fantome.style.left = fantomeLeft + "px";
    };
    
/*************************************************************************************************************************/
/*******************************************ANIMATION DE L'INSECTE********************************************************/
/*************************************************************************************************************************/

    var mouvementInsecte = function(){
        insecteLeft;
        if(insecteLeft < -4290){
            insecteLeft = 0;
        };
        insecte.style.left = insecteLeft + "px";
    };
    

/*************************************************************************************************************************/
/******************************************ANIMATION DE L'INSECTE 2*******************************************************/
/*************************************************************************************************************************/

    var mouvementInsecte2 = function(){
        insecte2Left;
        if(insecte2Left < -4290){
            insecte2Left = 0;
        };
        insecte2.style.left = insecte2Left + "px";
    };
    

/*************************************************************************************************************************/
/********************************************DETECTEUR DE COLLISION*******************************************************/
/*************************************************************************************************************************/

    var collision = function(){

        var coordonneesMasque = masqueHero.getBoundingClientRect();
        var coordonneesFantome = decors[7].getBoundingClientRect();
        var coordonneesBoulePique = decors[3].getBoundingClientRect();
        var coordonneesPieceJs = decors[2].getBoundingClientRect();
        var coordonneesPieceCss3 = decors[13].getBoundingClientRect();
        var coordonneesPieceHtml5 = decors[14].getBoundingClientRect();

        if(masqueHero.offsetLeft <= 130){
            masqueHero.style.left = "130px";
        };
        if(masqueHero.offsetLeft >= 930){
            masqueHero.style.left = "930px";
        };

        if(coordonneesMasque.x < coordonneesFantome.x + coordonneesFantome.width &&
            coordonneesMasque.x + coordonneesMasque.width > coordonneesFantome.x &&
            coordonneesMasque.y < coordonneesFantome.y + coordonneesFantome.height &&
            coordonneesMasque.height + coordonneesMasque.y > coordonneesFantome.y || 

            coordonneesMasque.x < coordonneesBoulePique.x + coordonneesBoulePique.width &&
            coordonneesMasque.x + coordonneesMasque.width > coordonneesBoulePique.x &&
            coordonneesMasque.y < coordonneesBoulePique.y + coordonneesBoulePique.height &&
            coordonneesMasque.height + coordonneesMasque.y > coordonneesBoulePique.y){
                pageMenu[0].style.display = "flex";
                cancelAnimationFrame(rafId);
                decors[17][0].style.display = 'none';
                decors[18][0].appendChild(gameOver);
        };

        if(coordonneesMasque.x < coordonneesPieceJs.x + coordonneesPieceJs.width &&
            coordonneesMasque.x + coordonneesMasque.width > coordonneesPieceJs.x &&
            coordonneesMasque.y < coordonneesPieceJs.y + coordonneesPieceJs.height &&
            coordonneesMasque.height + coordonneesMasque.y > coordonneesPieceJs.y){
                var fond_vert = document.getElementById('fond_vert');
                decors[2].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
                decors[2].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
                scoreTotal += 100;
            }
        
        if(coordonneesMasque.x < coordonneesPieceCss3.x + coordonneesPieceCss3.width &&
        coordonneesMasque.x + coordonneesMasque.width > coordonneesPieceCss3.x &&
        coordonneesMasque.y < coordonneesPieceCss3.y + coordonneesPieceCss3.height &&
        coordonneesMasque.height + coordonneesMasque.y > coordonneesPieceCss3.y){
            var fond_vert = document.getElementById('fond_vert');
            decors[13].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[13].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
            scoreTotal += 50;
        }

        if(coordonneesMasque.x < coordonneesPieceHtml5.x + coordonneesPieceHtml5.width &&
        coordonneesMasque.x + coordonneesMasque.width > coordonneesPieceHtml5.x &&
        coordonneesMasque.y < coordonneesPieceHtml5.y + coordonneesPieceHtml5.height &&
        coordonneesMasque.height + coordonneesMasque.y > coordonneesPieceHtml5.y){
            var fond_vert = document.getElementById('fond_vert');
            decors[14].style.top = fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            decors[14].style.left = (Math.floor(Math.random() * (880 - 120 + 1)) + 140) + "px";
            scoreTotal += 25;
        }
    };
    
    decors[15][0].innerHTML = stockageInnerHtml + scoreTotal;
    decors[15][1].innerHTML = decors[15][0].innerHTML;

/*************************************************************************************************************************/
/*******************************************EXECUTION DES FONCTIONS*******************************************************/
/*************************************************************************************************************************/

    rafId = requestAnimationFrame(animationDuJeu);

    positionDeDepartFenetre(decors[0], decors[1]);
    positionDeDepartObjet(decors[2]);
    positionDeDepartObjet(decors[3]);
    positionDeDepartObjet(decors[7]);
    positionDeDepartObjet(decors[9]);
    positionDeDepartObjet(decors[11]);
    positionDeDepartObjet(decors[13]);
    positionDeDepartObjet(decors[14]);
    slideUp();
    mouvementHero();
    mouvementFantome();
    mouvementInsecte();
    mouvementInsecte2();
    collision();
};


/*************************************************************************************************************************/
/*****************************************AU CHARGEMENT DE LA FENETRE*****************************************************/
/*************************************************************************************************************************/

window.addEventListener("load", function(){
    // animationDuJeu();
});