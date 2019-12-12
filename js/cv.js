var monCercle = function(arg1, monImg, taille, color){

    var monCanvas = document.createElement('canvas');
    var monElem = document.getElementsByClassName(arg1);
    var ctx = monCanvas.getContext('2d');
    var debut = 0;
    var debutDessin = 4.7;
    var diff;
    monCanvas.style.backgroundImage = monImg;
    monCanvas.height = 110;
    monCanvas.width = 110;
    monCanvas.setAttribute('id', 'ctx');
    monElem[0].appendChild(monCanvas);

    function dessinCercle(){
        diff = ((debut/100) * Math.PI*2*10);
        ctx.lineWidth = 6;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(55,55,50,debutDessin,diff/10+debutDessin);
        ctx.stroke();
        if(debut >= taille){
            clearTimeout(dessin);
            }
        debut++;
    }
    var dessin = setInterval(dessinCercle);
};

// progressBarCircle css
monCercle('css',"", 100,'#4c4c4c');
monCercle('css', "url('img/img_cv/css.svg')", 65, "#fff");
// progressBarCircle html
monCercle('html5','', 100,'#4c4c4c');
monCercle('html5', "url('img/img_cv/html5.svg')", 80, "#fff");
// progressBarCircle sass
monCercle('sass', "", 100, '#4c4c4c');
monCercle('sass', "url('img/img_cv/sass.svg')", 60, "#fff");
// progressBarCircle js
monCercle('js', "", 100, '#4c4c4c');
monCercle('js', "url('img/img_cv/js.svg')", 70, "#fff");
// progressBarCircle jquery
monCercle('jquery', "", 100, '#4c4c4c');
monCercle('jquery', "url('img/img_cv/jquery.svg')", 40, "#fff");
// progressBarCircle angular
monCercle('angular', "", 100, '#4c4c4c');
monCercle('angular', "url('img/img_cv/angular.svg')", 30, "#fff");
// progressBarCircle node
monCercle('node', "", 100, '#4c4c4c');
monCercle('node', "url('img/img_cv/node.svg')", 20, "#fff");
// progressBarCircle git
monCercle('git', "", 100, '#4c4c4c');
monCercle('git', "url('img/img_cv/git.svg')", 55, "#fff");
// progressBarCircle mongodb
monCercle('mongodb', "", 100, '#4c4c4c');
monCercle('mongodb', "url('img/img_cv/mongodb.svg')", 20, "#fff");