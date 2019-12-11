var monCanvas = document.createElement('canvas');
var css = document.getElementsByClassName('css');
var ctx = monCanvas.getContext('2d');
monCanvas.height = 100;
monCanvas.width = 100;
monCanvas.setAttribute('id', 'ctx');
css[0].appendChild(monCanvas);
var mCh = monCanvas.height;
var mCw = monCanvas.width;
var debut = 0;
var debutDessin = 4.72;
var diff;

function dessinCercle(){
    diff = ((debut/100) * Math.PI*2*10);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.arc(50,50,45,debutDessin,diff/10+debutDessin);
    ctx.stroke();
    if(debut >= 80){
        clearTimeout(dessin);
        }
    debut++;
}
var dessin = setInterval(dessinCercle,20);