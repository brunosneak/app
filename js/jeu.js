"use strict";

/*********************************************************************************************************************/
/*********************************************INITIALISATION**********************************************************/
/*********************************************************************************************************************/

var elements = { 
    fond_vert: document.getElementById('fond_vert'),
    fenetreGauche: document.getElementById('fenetreGauche'),
    fenetreDroite: document.getElementById('fenetreDroite'),
    heroCollision: document.getElementById('heroCollision'),
    hero: document.getElementById('hero'),
    pieceHtml5: document.getElementById('pieceHtml5'),
    pieceCss3: document.getElementById('pieceCss3'),
    pieceJs: document.getElementById('pieceJs'),
    boulePiqueCollision: document.getElementById('boulePiqueCollision'),
    fantomeCollision: document.getElementById('fantomeCollision'),
    fantome: document.getElementById('fantome'),
    menu_burger: document.getElementsByClassName('menu_burger'),
    resultat: document.getElementsByClassName('resultat'),
    pageMenu: document.getElementsByClassName('pageMenu'),
    gameOver: document.getElementsByClassName('gameOver'),
}

var heroLeft = elements.hero.style.left = -10;
var fantomeLeft = elements.fantome.style.left;
var scoreTotal = 0;
var stockageInnerHtml = elements.resultat[0].innerHTML;
var rafId;

/*************************************************************************************************************************/
/************************************************TEMPS ANIMATION**********************************************************/
/*************************************************************************************************************************/

setInterval(function(){
    heroLeft -= 120;
    fantomeLeft -= 120;
}, 200);

/*************************************************************************************************************************/
/***********************************POSITIONNEMENT DEPART ALEATOIRE DU DECORS*********************************************/
/*************************************************************************************************************************/

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    var animationDuJeu = function(){
        
        var positionDeDepartFenetre = function(monObjet1, monObjet2){
            monObjet1.style.bottom = "-" + Math.floor(Math.random()*1000) - monObjet1.offsetHeight + "px";
            monObjet2.style.bottom = monObjet1.style.bottom;
        }
        
        var positionDeDepartObjet = function(monObjet){
            monObjet.style.bottom = "-" + Math.floor(Math.random()*1000) - monObjet.offsetHeight + "px";
        }

/*************************************************************************************************************************/
/*********************************************ANIMATION DU DECORS*********************************************************/
/*************************************************************************************************************************/


    var slideUp = function(){

        var fenetreGaucheTop = elements.fenetreGauche.offsetTop;
        var fenetreDroiteTop = elements.fenetreDroite.offsetTop;
        var pieceJsTop = elements.pieceJs.offsetTop;
        var boulePiqueCollisionTop = elements.boulePiqueCollision.offsetTop;
        var fantomeCollisionTop = elements.fantomeCollision.offsetTop;
        var pieceCss3Top = elements.pieceCss3.offsetTop;
        var pieceHtml5Top = elements.pieceHtml5.offsetTop;

        fenetreGaucheTop -= 6;
        elements.fenetreGauche.style.top = fenetreGaucheTop + "px";


        fenetreDroiteTop -= 6;
        elements.fenetreDroite.style.top = fenetreDroiteTop + "px";


        pieceJsTop -= 6;
        elements.pieceJs.style.top = pieceJsTop + "px";


        boulePiqueCollisionTop -= 6;
        elements.boulePiqueCollision.style.top = boulePiqueCollisionTop + "px";


        fantomeCollisionTop -= 7;
        elements.fantomeCollision.style.top = fantomeCollisionTop + "px";


        pieceCss3Top -= 6;
        elements.pieceCss3.style.top = pieceCss3Top + "px";


        pieceHtml5Top -= 6;
        elements.pieceHtml5.style.top = pieceHtml5Top + "px";

        if(elements.resultat[0].innerHTML >= 1500){
            fenetreGaucheTop -= 2;
            fenetreDroiteTop -= 2;
            pieceJsTop -= 2;
            boulePiqueCollisionTop -= 2;
            fantomeCollisionTop -= 2;
            pieceCss3Top -= 2;
            pieceHtml5Top -= 2;
            elements.fenetreGauche.style.top = fenetreGaucheTop + "px";
            elements.fenetreDroite.style.top = fenetreDroiteTop + "px";
            elements.pieceJs.style.top = pieceJsTop + "px";
            elements.boulePiqueCollision.style.top = boulePiqueCollisionTop + "px";
            elements.fantomeCollision.style.top = fantomeCollisionTop + "px";
            elements.pieceCss3.style.top = pieceCss3Top + "px";
            elements.pieceHtml5.style.top = pieceHtml5Top + "px";
        }

        if(elements.resultat[0].innerHTML >= 2000){
            fenetreGaucheTop -= 2;
            fenetreDroiteTop -= 2;
            pieceJsTop -= 2;
            boulePiqueCollisionTop -= 2;
            fantomeCollisionTop -= 2;
            pieceCss3Top -= 2;
            pieceHtml5Top -= 2;
            elements.fenetreGauche.style.top = fenetreGaucheTop + "px";
            elements.fenetreDroite.style.top = fenetreDroiteTop + "px";
            elements.pieceJs.style.top = pieceJsTop + "px";
            elements.boulePiqueCollision.style.top = boulePiqueCollisionTop + "px";
            elements.fantomeCollision.style.top = fantomeCollisionTop + "px";
            elements.pieceCss3.style.top = pieceCss3Top + "px";
            elements.pieceHtml5.style.top = pieceHtml5Top + "px";
        }

        if(elements.resultat[0].innerHTML >= 2500){
            fenetreGaucheTop -= 2;
            fenetreDroiteTop -= 2;
            pieceJsTop -= 2;
            boulePiqueCollisionTop -= 2;
            fantomeCollisionTop -= 2;
            pieceCss3Top -= 2;
            pieceHtml5Top -= 2;
            elements.fenetreGauche.style.top = fenetreGaucheTop + "px";
            elements.fenetreDroite.style.top = fenetreDroiteTop + "px";
            elements.pieceJs.style.top = pieceJsTop + "px";
            elements.boulePiqueCollision.style.top = boulePiqueCollisionTop + "px";
            elements.fantomeCollision.style.top = fantomeCollisionTop + "px";
            elements.pieceCss3.style.top = pieceCss3Top + "px";
            elements.pieceHtml5.style.top = pieceHtml5Top + "px";
        }

/*************************************************************************************************************************/
/*********************************************RETOUR CASE DEPART**********************************************************/
/*************************************************************************************************************************/

        var fenetreYHeight = elements.fenetreGauche.offsetTop + elements.fenetreGauche.offsetHeight;
        var pieceJsYHeight = elements.pieceJs.offsetTop + elements.pieceJs.offsetHeight;
        var boulePiqueCollisionYHeight = elements.boulePiqueCollision.offsetTop + elements.boulePiqueCollision.offsetHeight;
        var fantomeCollisionYHeight = elements.fantomeCollision.offsetTop + elements.fantomeCollision.offsetHeight;
        var pieceCss3YHeight = elements.pieceCss3.offsetTop + elements.pieceCss3.offsetHeight;
        var pieceHtml5YHeight = elements.pieceHtml5.offsetTop + elements.pieceHtml5.offsetHeight;

        if(elements.fond_vert.offsetTop >= fenetreYHeight){
            elements.fenetreGauche.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            elements.fenetreDroite.style.top = elements.fenetreGauche.style.top;
        }

        if(elements.fond_vert.offsetTop >= pieceJsYHeight){
            elements.pieceJs.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            elements.pieceJs.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
        }

        if(elements.fond_vert.offsetTop >= boulePiqueCollisionYHeight){
            elements.boulePiqueCollision.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            elements.boulePiqueCollision.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
        }

        if(elements.fond_vert.offsetTop >= fantomeCollisionYHeight){
            elements.fantomeCollision.style.top = elements.fond_vert.offsetHeight + "px";
            elements.fantomeCollision.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
        }

        if(elements.fond_vert.offsetTop >= pieceCss3YHeight){
            elements.pieceCss3.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            elements.pieceCss3.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
        }

        if(elements.fond_vert.offsetTop >= pieceHtml5YHeight){
            elements.pieceHtml5.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            elements.pieceHtml5.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
        }
    };

/*************************************************************************************************************************/
/******************************************DEPLACEMENT DU PERSONNAGE******************************************************/
/*************************************************************************************************************************/

    var coordonneesMasqueX = elements.heroCollision.offsetLeft;
    // var coordonneesMasqueY = elements.heroCollision.offsetTop;

    window.addEventListener("keydown", function(event){

        var position = event.keyCode;

        switch(position){
            // flèche directionnelle gauche
            case 37:
                coordonneesMasqueX -= 15;
                elements.heroCollision.style.left = coordonneesMasqueX + "px";
                elements.heroCollision.style.transform = "";
            break;
            // flèche directionnelle haut
            // case 38:
            //     coordonneesMasqueY -= 10;
            //     elements.heroCollision.style.top = coordonneesMasqueY + "px";
            // break;
            // flèche directionnelle droite
            case 39:
                coordonneesMasqueX += 15;
                elements.heroCollision.style.left = coordonneesMasqueX + "px";
                elements.heroCollision.style.transform = "scaleX(-1)";
            break;
            // flèche directionnelle bas
            // case 40:
            //     coordonneesMasqueY += 10;
            //     elements.heroCollision.style.top = coordonneesMasqueY + "px";
            // break
        };
    });

/*************************************************************************************************************************/
/*******************************************ANIMATION DU PERSONNAGE*******************************************************/
/*************************************************************************************************************************/
    
var mouvementHero = function(){
    heroLeft;
    if(heroLeft < -360){
        heroLeft = -10;
    };
    elements.hero.style.left = heroLeft + "px";
};

/*************************************************************************************************************************/
/********************************************ANIMATION DU FANTOME*********************************************************/
/*************************************************************************************************************************/

    var mouvementFantome = function(){
        fantomeLeft;
        if(fantomeLeft < -840){
            fantomeLeft = 0;
        };
        elements.fantome.style.left = fantomeLeft + "px";
    };
    
/*************************************************************************************************************************/
/********************************************DETECTEUR DE COLLISION*******************************************************/
/*************************************************************************************************************************/

    var collision = function(){

        var coordonneesMasque = elements.heroCollision.getBoundingClientRect();
        var coordonneesfantomeCollision = elements.fantomeCollision.getBoundingClientRect();
        var coordonneesboulePiqueCollision = elements.boulePiqueCollision.getBoundingClientRect();
        var coordonneesPieceJs = elements.pieceJs.getBoundingClientRect();
        var coordonneesPieceCss3 = elements.pieceCss3.getBoundingClientRect();
        var coordonneesPieceHtml5 = elements.pieceHtml5.getBoundingClientRect();

        if(elements.heroCollision.offsetLeft <= 128){
            elements.heroCollision.style.left = "128px";
        };
        if(elements.heroCollision.offsetLeft >= 935){
            elements.heroCollision.style.left = "935px";
        };

        if(coordonneesMasque.x < coordonneesfantomeCollision.x + coordonneesfantomeCollision.width &&
            coordonneesMasque.x + coordonneesMasque.width > coordonneesfantomeCollision.x &&
            coordonneesMasque.y < coordonneesfantomeCollision.y + coordonneesfantomeCollision.height &&
            coordonneesMasque.height + coordonneesMasque.y > coordonneesfantomeCollision.y || 

            coordonneesMasque.x < coordonneesboulePiqueCollision.x + coordonneesboulePiqueCollision.width &&
            coordonneesMasque.x + coordonneesMasque.width > coordonneesboulePiqueCollision.x &&
            coordonneesMasque.y < coordonneesboulePiqueCollision.y + coordonneesboulePiqueCollision.height &&
            coordonneesMasque.height + coordonneesMasque.y > coordonneesboulePiqueCollision.y){
                elements.pageMenu[0].style.display = "flex";
                cancelAnimationFrame(rafId);
                elements.menu_burger[0].style.display = 'none';
                elements.gameOver[0].style.display = "block";
        };

        if(coordonneesMasque.x < coordonneesPieceJs.x + coordonneesPieceJs.width &&
            coordonneesMasque.x + coordonneesMasque.width > coordonneesPieceJs.x &&
            coordonneesMasque.y < coordonneesPieceJs.y + coordonneesPieceJs.height &&
            coordonneesMasque.height + coordonneesMasque.y > coordonneesPieceJs.y){
                elements.pieceJs.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
                elements.pieceJs.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
                scoreTotal += 100;
            }
        
        if(coordonneesMasque.x < coordonneesPieceCss3.x + coordonneesPieceCss3.width &&
        coordonneesMasque.x + coordonneesMasque.width > coordonneesPieceCss3.x &&
        coordonneesMasque.y < coordonneesPieceCss3.y + coordonneesPieceCss3.height &&
        coordonneesMasque.height + coordonneesMasque.y > coordonneesPieceCss3.y){
            elements.pieceCss3.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            elements.pieceCss3.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
            scoreTotal += 50;
        }

        if(coordonneesMasque.x < coordonneesPieceHtml5.x + coordonneesPieceHtml5.width &&
        coordonneesMasque.x + coordonneesMasque.width > coordonneesPieceHtml5.x &&
        coordonneesMasque.y < coordonneesPieceHtml5.y + coordonneesPieceHtml5.height &&
        coordonneesMasque.height + coordonneesMasque.y > coordonneesPieceHtml5.y){
            elements.pieceHtml5.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            elements.pieceHtml5.style.left = (Math.floor(Math.random() * (916 - 128 + 1)) + 128) + "px";
            scoreTotal += 25;
        }
    };
    
    elements.resultat[0].innerHTML = stockageInnerHtml + scoreTotal;
    elements.resultat[1].innerHTML = elements.resultat[0].innerHTML;

/*************************************************************************************************************************/
/*******************************************EXECUTION DES FONCTIONS*******************************************************/
/*************************************************************************************************************************/

    rafId = requestAnimationFrame(animationDuJeu);

    positionDeDepartFenetre(elements.fenetreGauche, elements.fenetreDroite);
    positionDeDepartObjet(elements.pieceJs);
    positionDeDepartObjet(elements.boulePiqueCollision);
    positionDeDepartObjet(elements.fantomeCollision);
    positionDeDepartObjet(elements.pieceCss3);
    positionDeDepartObjet(elements.pieceHtml5);
    positionDeDepartObjet(elements.resultat[0]);
    slideUp();
    mouvementHero();
    mouvementFantome();
    collision();
};


/*************************************************************************************************************************/
/*****************************************AU CHARGEMENT DE LA FENETRE*****************************************************/
/*************************************************************************************************************************/

window.addEventListener("load", function(){
    animationDuJeu();
});