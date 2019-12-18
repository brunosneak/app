"use strict";

/*********************************************************************************************************************/
/*********************************************INITIALISATION**********************************************************/
/*********************************************************************************************************************/

var elements = { 
    fondVertDuJeu: document.getElementById('fondVertDuJeu'),
    fenetreGauche: document.getElementById('fenetreGauche'),
    fenetreDroite: document.getElementById('fenetreDroite'),
    persoColl: document.getElementById('persoColl'),
    perso: document.getElementById('perso'),
    pieceHtml5: document.getElementById('pieceHtml5'),
    pieceCss3: document.getElementById('pieceCss3'),
    pieceJs: document.getElementById('pieceJs'),
    boulePiqueColl: document.getElementById('boulePiqueColl'),
    fantomeRougeColl: document.getElementById('fantomeRougeColl'),
    fantomeVertColl: document.getElementById('fantomeVertColl'),
    fantomeRouge: document.getElementById('fantomeRouge'),
    fantomeVert: document.getElementById('fantomeVert'),
    persoMort: document.getElementById('persoMort'),
    persoWin: document.getElementById('persoWin'),
    menuBurger: document.getElementsByClassName('menuBurger'),
    resultat: document.getElementsByClassName('resultat'),
    menuCache: document.getElementsByClassName('menuCache'),
    gameOver: document.getElementsByClassName('gameOver'),
    win: document.getElementsByClassName('win'),
}

var persoLeft = elements.perso.offsetLeft;
var fantomeRougeLeft = elements.fantomeRouge.offsetLeft;
var fantomeVertLeft = elements.fantomeVert.offsetLeft;
var persoMortLeft = elements.persoMort.offsetLeft;
var persoWinLeft = elements.persoWin.offsetLeft; 
var scoreTotal = 0;
var stockageInnerHtml = elements.resultat[0].innerHTML;
var rafId;

/*************************************************************************************************************************/
/************************************************TEMPS ANIMATION**********************************************************/
/*************************************************************************************************************************/

setInterval(function(){
    persoLeft -= 120;
    fantomeRougeLeft -= 120;
    fantomeVertLeft -= 120;
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

    if(elements.persoColl.offsetLeft <= 128){
        elements.persoColl.style.left = "128px";
    };
    if(elements.persoColl.offsetLeft >= 1000){
        elements.persoColl.style.left = "1000px";
    };

/*************************************************************************************************************************/
/*********************************************ANIMATION DU DECORS*********************************************************/
/*************************************************************************************************************************/

    var slideUp = function(){

        var mesTops = {
            fenetreGaucheTop: elements.fenetreGauche.offsetTop,
            fenetreDroiteTop: elements.fenetreDroite.offsetTop,
            pieceJsTop: elements.pieceJs.offsetTop,
            boulePiqueCollTop: elements.boulePiqueColl.offsetTop,
            fantomeRougeCollTop: elements.fantomeRougeColl.offsetTop,
            fantomeVertCollTop: elements.fantomeVertColl.offsetTop,
            pieceCss3Top: elements.pieceCss3.offsetTop,
            pieceHtml5Top: elements.pieceHtml5.offsetTop,
        };

        var monTop = function(top1, top2, pixel){
            top1 -= pixel;
            top2.style.top = top1 + "px";
        };

        monTop(mesTops.fenetreGaucheTop, elements.fenetreGauche, 6);
        monTop(mesTops.fenetreDroiteTop, elements.fenetreDroite, 6);
        monTop(mesTops.boulePiqueCollTop, elements.boulePiqueColl, 6);
        monTop(mesTops.fantomeRougeCollTop, elements.fantomeRougeColl, 7);
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
            mesTops.boulePiqueCollTop -= vitesse;
            mesTops.fantomeRougeCollTop -= vitesseFantome;
            mesTops.fantomeVertCollTop -= vitesseFantome;
            mesTops.pieceCss3Top -= vitesse;
            mesTops.pieceHtml5Top -= vitesse;
            elements.fenetreGauche.style.top = mesTops.fenetreGaucheTop + "px";
            elements.fenetreDroite.style.top = mesTops.fenetreDroiteTop + "px";
            elements.pieceJs.style.top = mesTops.pieceJsTop + "px";
            elements.boulePiqueColl.style.top = mesTops.boulePiqueCollTop + "px";
            elements.fantomeRougeColl.style.top = mesTops.fantomeRougeCollTop + "px";
            elements.fantomeVertColl.style.top = mesTops.fantomeVertCollTop + "px";
            elements.pieceCss3.style.top = mesTops.pieceCss3Top + "px";
            elements.pieceHtml5.style.top = mesTops.pieceHtml5Top + "px";
        };
    };

    if(elements.resultat[0].innerHTML >= 10000){
        niveau(10000, 8, 9);
        mouvementFantomeVert();
        monTop(mesTops.fantomeVertCollTop, elements.fantomeVertColl, 1);
        positionDeDepartObjet(elements.fantomeVertColl);
    };

    if(elements.resultat[0].innerHTML >= 20000){
        niveau(20000, 2, 2);
    };

    if(elements.resultat[0].innerHTML >= 25000){
        niveau(25000, 2, 2);
    }; 

    if(elements.resultat[0].innerHTML >= 30000){
        elements.menuCache[0].style.display = "flex";
        cancelAnimationFrame(rafId);
        elements.menuBurger[0].style.display = 'none';
        elements.win[0].style.display = "block";
        persoWin.style.display = "block";
        setInterval(function(){
            persoWinLeft -= 166.5;
            elements.persoWin.style.left = persoWinLeft + "px";
            if(persoWinLeft <= -800){
                persoWinLeft = 166.5;
            };
        }, 300);
    };

/*************************************************************************************************************************/
/*********************************************RETOUR CASE DEPART**********************************************************/
/*************************************************************************************************************************/

    var objHeight = {
        fenetreYHeight: elements.fenetreGauche.offsetTop + elements.fenetreGauche.offsetHeight,
        pieceJsYHeight: elements.pieceJs.offsetTop + elements.pieceJs.offsetHeight,
        boulePiqueCollYHeight: elements.boulePiqueColl.offsetTop + elements.boulePiqueColl.offsetHeight,
        fantomeRougeCollYHeight: elements.fantomeRougeColl.offsetTop + elements.fantomeRougeColl.offsetHeight,
        fantomeVertCollYHeight: elements.fantomeVertColl.offsetTop + elements.fantomeVertColl.offsetHeight,
        pieceCss3YHeight: elements.pieceCss3.offsetTop + elements.pieceCss3.offsetHeight,
        pieceHtml5YHeight: elements.pieceHtml5.offsetTop + elements.pieceHtml5.offsetHeight,
    }

    if(elements.fondVertDuJeu.offsetTop >= objHeight.fenetreYHeight){
        elements.fenetreGauche.style.top = elements.fondVertDuJeu.offsetHeight + Math.floor(Math.random()*1000) + "px";
        elements.fenetreDroite.style.top = elements.fenetreGauche.style.top;
    };

    var depart = function(depart1, depart2){
        if(elements.fondVertDuJeu.offsetTop >= depart1){
            depart2.style.top = elements.fondVertDuJeu.offsetHeight + Math.floor(Math.random()*1000) + "px";
            depart2.style.left = (Math.floor(Math.random() * (975 - 128 + 1)) + 128) + "px";
        };
    };

    depart(objHeight.pieceJsYHeight, elements.pieceJs);
    depart(objHeight.boulePiqueCollYHeight, elements.boulePiqueColl);
    depart(objHeight.fantomeRougeCollYHeight, elements.fantomeRougeColl);
    depart(objHeight.fantomeVertCollYHeight, elements.fantomeVertColl);
    depart(objHeight.pieceCss3YHeight, elements.pieceCss3);
    depart(objHeight.pieceHtml5YHeight, elements.pieceHtml5);
    };

/*************************************************************************************************************************/
/******************************************DEPLACEMENT DU PERSONNAGE******************************************************/
/*************************************************************************************************************************/

    var coordMasqueX = elements.persoColl.offsetLeft;
    // var coordMasqueY = elements.persoColl.offsetTop;

    window.addEventListener("keydown", function(event){

        var position = event.keyCode;

        switch(position){
            // flèche directionnelle gauche
            case 37:
                coordMasqueX -= 15;
                elements.persoColl.style.left = coordMasqueX + "px";
                elements.perso.style.top = "-13px";
            break;
            // flèche directionnelle haut
            // case 38:
            //     coordMasqueY -= 10;
            //     elements.persoColl.style.top = coordMasqueY + "px";
            // break;
            // flèche directionnelle droite
            case 39:
                coordMasqueX += 15;
                elements.persoColl.style.left = coordMasqueX + "px";
                elements.perso.style.top = "-163px";

            break;
            // flèche directionnelle bas
            // case 40:
            //     coordMasqueY += 10;
            //     elements.persoColl.style.top = coordMasqueY + "px";
            // break
        };
    });

/*************************************************************************************************************************/
/*******************************************ANIMATION DU PERSONNAGE*******************************************************/
/*************************************************************************************************************************/

    var mouvementperso = function(){
    persoLeft;
    if(persoLeft < -480){
        persoLeft = -10;
    };
    elements.perso.style.left = persoLeft + "px";
    };

/*************************************************************************************************************************/
/********************************************ANIMATION DU FANTOME*********************************************************/
/*************************************************************************************************************************/

    var mouvementFantomeRouge = function(){
        fantomeRougeLeft;
        if(fantomeRougeLeft < -840){
            fantomeRougeLeft = 0;
        };
        elements.fantomeRouge.style.left = fantomeRougeLeft + "px";
    };

    var mouvementFantomeVert = function(){
        fantomeVertLeft;
        if(fantomeVertLeft < -840){
            fantomeVertLeft = 0;
        };
    elements.fantomeVert.style.left = fantomeVertLeft + "px";
    };

/*************************************************************************************************************************/
/********************************************DETECTEUR DE COLLISION*******************************************************/
/*************************************************************************************************************************/

    var collision = function(){

        var objCoord = {
            coordMasque: elements.persoColl.getBoundingClientRect(),
            coordfantomeRougeColl: elements.fantomeRougeColl.getBoundingClientRect(),
            coordfantomeVertColl: elements.fantomeVertColl.getBoundingClientRect(),
            coordboulePiqueColl: elements.boulePiqueColl.getBoundingClientRect(),
            coordPieceJs: elements.pieceJs.getBoundingClientRect(),
            coordPieceCss3: elements.pieceCss3.getBoundingClientRect(),
            coordPieceHtml5: elements.pieceHtml5.getBoundingClientRect(),
        }

        if(objCoord.coordMasque.x < objCoord.coordfantomeRougeColl.x + objCoord.coordfantomeRougeColl.width &&
            objCoord.coordMasque.x + objCoord.coordMasque.width > objCoord.coordfantomeRougeColl.x &&
            objCoord.coordMasque.y < objCoord.coordfantomeRougeColl.y + objCoord.coordfantomeRougeColl.height &&
            objCoord.coordMasque.height + objCoord.coordMasque.y > objCoord.coordfantomeRougeColl.y || 

            objCoord.coordMasque.x < objCoord.coordfantomeVertColl.x + objCoord.coordfantomeVertColl.width &&
            objCoord.coordMasque.x + objCoord.coordMasque.width > objCoord.coordfantomeVertColl.x &&
            objCoord.coordMasque.y < objCoord.coordfantomeVertColl.y + objCoord.coordfantomeVertColl.height &&
            objCoord.coordMasque.height + objCoord.coordMasque.y > objCoord.coordfantomeVertColl.y || 

            objCoord.coordMasque.x < objCoord.coordboulePiqueColl.x + objCoord.coordboulePiqueColl.width &&
            objCoord.coordMasque.x + objCoord.coordMasque.width > objCoord.coordboulePiqueColl.x &&
            objCoord.coordMasque.y < objCoord.coordboulePiqueColl.y + objCoord.coordboulePiqueColl.height &&
            objCoord.coordMasque.height + objCoord.coordMasque.y > objCoord.coordboulePiqueColl.y){
                elements.menuCache[0].style.display = "flex";
                cancelAnimationFrame(rafId);
                elements.menuBurger[0].style.display = 'none';
                elements.gameOver[0].style.display = "block";
                persoMort.style.display = "block";
                var intervalId = setInterval(function(){
                    persoMortLeft -= 181.7;
                    elements.persoMort.style.left = persoMortLeft + "px";
                    if(persoMortLeft <= -1700){
                        clearInterval(intervalId);
                    };
                }, 250);
        };

/*************************************************************************************************************************/
/***********************************************VALEURS PIECES************************************************************/
/*************************************************************************************************************************/

        var objCollision = function(obj1, obj2, points){
            if(objCoord.coordMasque.x < obj1.x + obj1.width &&
                objCoord.coordMasque.x + objCoord.coordMasque.width > obj1.x &&
                objCoord.coordMasque.y < obj1.y + obj1.height &&
                objCoord.coordMasque.height + objCoord.coordMasque.y > obj1.y){
                    obj2.style.top = elements.fondVertDuJeu.offsetHeight + Math.floor(Math.random()*1000) + "px";
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
    positionDeDepartObjet(elements.boulePiqueColl);
    positionDeDepartObjet(elements.fantomeRougeColl);
    positionDeDepartObjet(elements.pieceCss3);
    positionDeDepartObjet(elements.pieceHtml5);
    positionDeDepartObjet(elements.resultat[0]);
    slideUp();
    mouvementperso();
    mouvementFantomeRouge();
    collision();
};

/*************************************************************************************************************************/
/*****************************************AU CHARGEMENT DE LA FENETRE*****************************************************/
/*************************************************************************************************************************/

window.addEventListener("load", function(){
    animationDuJeu();
});