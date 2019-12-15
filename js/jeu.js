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
    fantomeCollision2: document.getElementById('fantomeCollision2'),
    fantome: document.getElementById('fantome'),
    fantome2: document.getElementById('fantome2'),
    menu_burger: document.getElementsByClassName('menu_burger'),
    resultat: document.getElementsByClassName('resultat'),
    pageMenu: document.getElementsByClassName('pageMenu'),
    gameOver: document.getElementsByClassName('gameOver'),
}

var heroLeft = elements.hero.style.left = -10;
var fantomeLeft = elements.fantome.style.left;
var fantome2Left = elements.fantome2.style.left;
var scoreTotal = 0;
var stockageInnerHtml = elements.resultat[0].innerHTML;
var rafId;

/*************************************************************************************************************************/
/************************************************TEMPS ANIMATION**********************************************************/
/*************************************************************************************************************************/

setInterval(function(){
    heroLeft -= 120;
    fantomeLeft -= 120;
    fantome2Left -= 120;
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
/*******************************************PERSONNAGE LIMITE TOUR********************************************************/
/*************************************************************************************************************************/

    if(elements.heroCollision.offsetLeft <= 128){
        elements.heroCollision.style.left = "128px";
    };
    if(elements.heroCollision.offsetLeft >= 1000){
        elements.heroCollision.style.left = "1000px";
    };

/*************************************************************************************************************************/
/*********************************************ANIMATION DU DECORS*********************************************************/
/*************************************************************************************************************************/

    var slideUp = function(){

        var mesTops = {
            fenetreGaucheTop: elements.fenetreGauche.offsetTop,
            fenetreDroiteTop: elements.fenetreDroite.offsetTop,
            pieceJsTop: elements.pieceJs.offsetTop,
            boulePiqueCollisionTop: elements.boulePiqueCollision.offsetTop,
            fantomeCollisionTop: elements.fantomeCollision.offsetTop,
            fantomeCollision2Top: elements.fantomeCollision2.offsetTop,
            pieceCss3Top: elements.pieceCss3.offsetTop,
            pieceHtml5Top: elements.pieceHtml5.offsetTop,
        };

        var monTop = function(top1, top2, pixel){
            top1 -= pixel;
            top2.style.top = top1 + "px";
        };

        monTop(mesTops.fenetreGaucheTop, elements.fenetreGauche, 6);
        monTop(mesTops.fenetreDroiteTop, elements.fenetreDroite, 6);
        monTop(mesTops.boulePiqueCollisionTop, elements.boulePiqueCollision, 6);
        monTop(mesTops.fantomeCollisionTop, elements.fantomeCollision, 7);
        monTop(mesTops.pieceJsTop, elements.pieceJs, 6);
        monTop(mesTops.pieceCss3Top, elements.pieceCss3, 6);
        monTop(mesTops.pieceHtml5Top, elements.pieceHtml5, 6);

/*************************************************************************************************************************/
/*******************************************NIVEAU ET VITESSE DE JEU******************************************************/
/*************************************************************************************************************************/

    var niveau = function(scoreAtteint, vitesse, vitesseFantome){
        if(elements.resultat[0].innerHTML >= scoreAtteint){
            mesTops.fenetreGaucheTop -= vitesse;
            mesTops.fenetreDroiteTop -= vitesse;
            mesTops.pieceJsTop -= vitesse;
            mesTops.boulePiqueCollisionTop -= vitesse;
            mesTops.fantomeCollisionTop -= vitesseFantome;
            mesTops.fantomeCollision2Top -= vitesseFantome;
            mesTops.pieceCss3Top -= vitesse;
            mesTops.pieceHtml5Top -= vitesse;
            elements.fenetreGauche.style.top = mesTops.fenetreGaucheTop + "px";
            elements.fenetreDroite.style.top = mesTops.fenetreDroiteTop + "px";
            elements.pieceJs.style.top = mesTops.pieceJsTop + "px";
            elements.boulePiqueCollision.style.top = mesTops.boulePiqueCollisionTop + "px";
            elements.fantomeCollision.style.top = mesTops.fantomeCollisionTop + "px";
            elements.fantomeCollision2.style.top = mesTops.fantomeCollision2Top + "px";
            elements.pieceCss3.style.top = mesTops.pieceCss3Top + "px";
            elements.pieceHtml5.style.top = mesTops.pieceHtml5Top + "px";
        };
    };

    if(elements.resultat[0].innerHTML >= 10000){
        niveau(10000, 8, 9);
        mouvementFantome2();
        monTop(mesTops.fantomeCollision2Top, elements.fantomeCollision2, 1);
        positionDeDepartObjet(elements.fantomeCollision2);
    };

    if(elements.resultat[0].innerHTML >= 20000){
        niveau(20000, 2, 2);
    };

    if(elements.resultat[0].innerHTML >= 25000){
        niveau(25000, 2, 2);
    }; 

/*************************************************************************************************************************/
/*********************************************RETOUR CASE DEPART**********************************************************/
/*************************************************************************************************************************/

    var objHeight = {
        fenetreYHeight: elements.fenetreGauche.offsetTop + elements.fenetreGauche.offsetHeight,
        pieceJsYHeight: elements.pieceJs.offsetTop + elements.pieceJs.offsetHeight,
        boulePiqueCollisionYHeight: elements.boulePiqueCollision.offsetTop + elements.boulePiqueCollision.offsetHeight,
        fantomeCollisionYHeight: elements.fantomeCollision.offsetTop + elements.fantomeCollision.offsetHeight,
        fantomeCollision2YHeight: elements.fantomeCollision2.offsetTop + elements.fantomeCollision2.offsetHeight,
        pieceCss3YHeight: elements.pieceCss3.offsetTop + elements.pieceCss3.offsetHeight,
        pieceHtml5YHeight: elements.pieceHtml5.offsetTop + elements.pieceHtml5.offsetHeight,
    }

    if(elements.fond_vert.offsetTop >= objHeight.fenetreYHeight){
        elements.fenetreGauche.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
        elements.fenetreDroite.style.top = elements.fenetreGauche.style.top;
    };

    var depart = function(depart1, depart2){
        if(elements.fond_vert.offsetTop >= depart1){
            depart2.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
            depart2.style.left = (Math.floor(Math.random() * (975 - 128 + 1)) + 128) + "px";
        };
    };

    depart(objHeight.pieceJsYHeight, elements.pieceJs);
    depart(objHeight.boulePiqueCollisionYHeight, elements.boulePiqueCollision);
    depart(objHeight.fantomeCollisionYHeight, elements.fantomeCollision);
    depart(objHeight.fantomeCollision2YHeight, elements.fantomeCollision2);
    depart(objHeight.pieceCss3YHeight, elements.pieceCss3);
    depart(objHeight.pieceHtml5YHeight, elements.pieceHtml5);
    };

/*************************************************************************************************************************/
/******************************************DEPLACEMENT DU PERSONNAGE******************************************************/
/*************************************************************************************************************************/

    var coordMasqueX = elements.heroCollision.offsetLeft;
    // var coordMasqueY = elements.heroCollision.offsetTop;

    window.addEventListener("keydown", function(event){

        var position = event.keyCode;

        switch(position){
            // flèche directionnelle gauche
            case 37:
                coordMasqueX -= 15;
                elements.heroCollision.style.left = coordMasqueX + "px";
                elements.hero.style.top = "-13px";
            break;
            // flèche directionnelle haut
            // case 38:
            //     coordMasqueY -= 10;
            //     elements.heroCollision.style.top = coordMasqueY + "px";
            // break;
            // flèche directionnelle droite
            case 39:
                coordMasqueX += 15;
                elements.heroCollision.style.left = coordMasqueX + "px";
                elements.hero.style.top = "-163px";

            break;
            // flèche directionnelle bas
            // case 40:
            //     coordMasqueY += 10;
            //     elements.heroCollision.style.top = coordMasqueY + "px";
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

    var mouvementFantome2 = function(){
        fantome2Left;
        if(fantome2Left < -840){
            fantome2Left = 0;
        };
    elements.fantome2.style.left = fantome2Left + "px";
    };

/*************************************************************************************************************************/
/********************************************DETECTEUR DE COLLISION*******************************************************/
/*************************************************************************************************************************/

    var collision = function(){

        var objCoord = {
            coordMasque: elements.heroCollision.getBoundingClientRect(),
            coordfantomeCollision: elements.fantomeCollision.getBoundingClientRect(),
            coordfantomeCollision2: elements.fantomeCollision2.getBoundingClientRect(),
            coordboulePiqueCollision: elements.boulePiqueCollision.getBoundingClientRect(),
            coordPieceJs: elements.pieceJs.getBoundingClientRect(),
            coordPieceCss3: elements.pieceCss3.getBoundingClientRect(),
            coordPieceHtml5: elements.pieceHtml5.getBoundingClientRect(),
        }

        if(objCoord.coordMasque.x < objCoord.coordfantomeCollision.x + objCoord.coordfantomeCollision.width &&
            objCoord.coordMasque.x + objCoord.coordMasque.width > objCoord.coordfantomeCollision.x &&
            objCoord.coordMasque.y < objCoord.coordfantomeCollision.y + objCoord.coordfantomeCollision.height &&
            objCoord.coordMasque.height + objCoord.coordMasque.y > objCoord.coordfantomeCollision.y || 

            objCoord.coordMasque.x < objCoord.coordfantomeCollision2.x + objCoord.coordfantomeCollision2.width &&
            objCoord.coordMasque.x + objCoord.coordMasque.width > objCoord.coordfantomeCollision2.x &&
            objCoord.coordMasque.y < objCoord.coordfantomeCollision2.y + objCoord.coordfantomeCollision2.height &&
            objCoord.coordMasque.height + objCoord.coordMasque.y > objCoord.coordfantomeCollision2.y || 

            objCoord.coordMasque.x < objCoord.coordboulePiqueCollision.x + objCoord.coordboulePiqueCollision.width &&
            objCoord.coordMasque.x + objCoord.coordMasque.width > objCoord.coordboulePiqueCollision.x &&
            objCoord.coordMasque.y < objCoord.coordboulePiqueCollision.y + objCoord.coordboulePiqueCollision.height &&
            objCoord.coordMasque.height + objCoord.coordMasque.y > objCoord.coordboulePiqueCollision.y){
                elements.pageMenu[0].style.display = "flex";
                cancelAnimationFrame(rafId);
                elements.menu_burger[0].style.display = 'none';
                elements.gameOver[0].style.display = "block";
        };

/*************************************************************************************************************************/
/***********************************************VALEURS PIECES************************************************************/
/*************************************************************************************************************************/

        var objCollision = function(obj1, obj2, points){
            if(objCoord.coordMasque.x < obj1.x + obj1.width &&
                objCoord.coordMasque.x + objCoord.coordMasque.width > obj1.x &&
                objCoord.coordMasque.y < obj1.y + obj1.height &&
                objCoord.coordMasque.height + objCoord.coordMasque.y > obj1.y){
                    obj2.style.top = elements.fond_vert.offsetHeight + Math.floor(Math.random()*1000) + "px";
                    obj2.style.left = (Math.floor(Math.random() * (975 - 128 + 1)) + 128) + "px";
                    scoreTotal += points;
                    };
        };

        objCollision(objCoord.coordPieceJs, elements.pieceJs, 1000);
        objCollision(objCoord.coordPieceCss3, elements.pieceCss3, 500);
        objCollision(objCoord.coordPieceHtml5, elements.pieceHtml5, 250);

    };

/*************************************************************************************************************************/
/********************************************AFFICHAGE DES SCORES*********************************************************/
/*************************************************************************************************************************/

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