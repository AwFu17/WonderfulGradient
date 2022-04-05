const button = document.getElementById("btn");
const $html = document.querySelector("html");
let $x = 0;
const copyArray = new Array(3);
let isClick = false;

var sHex = generateHexColor();
var fHex = generateHexColor();
document.body.style.background = toRGB(sHex, fHex);

button.onclick = function(){
    sHex = generateHexColor();
    fHex = generateHexColor();
    console.log(toRGB(sHex, fHex));
    document.body.style.background = toRGB(sHex, fHex);
    isClick = !isClick;
    setTimeout(
        ()=>{
            isClick = !isClick;
        }, 1
    );
}
 
$html.onclick = function(event){
    if (!isClick){
    console.log(event.offsetX);
    $x = event.offsetX;
    for (let i = 0; i < 3; i++){
        console.log(average($html.offsetWidth, parseInt(sHex[i], 16), parseInt(fHex[i], 16),  parseInt($x)));
        copyArray[i] = average($html.offsetWidth, parseInt(sHex[i], 16), parseInt(fHex[i], 16),  parseInt($x));
    }
    navigator.clipboard.writeText(toHexColor(copyArray))
    .then(alert(toHexColor(copyArray) + " was copied!"))}
}

function generateHexColor(){
    const rgb = new Array(3);
    for (let i = 0; i < rgb.length;  i++){
        rgb[i] = Math.round((Math.random() * 255)).toString(16);
    }
    return rgb;
}

function toRGB(sArr, fArr){
    return `linear-gradient(to right,
        rgb(${parseInt(sArr[0], 16)}, ${parseInt(sArr[1], 16)}, ${parseInt(sArr[2], 16)}),
        rgb(${parseInt(fArr[0], 16)}, ${parseInt(fArr[1], 16)}, ${parseInt(fArr[2], 16)})`
}

function average(w, l, r, x){
    return Math.round(((w-x)*l + x*r)/w);
}

function toHexColor(arr){
    const rgb = new Array(3);
    for (let i = 0; i < rgb.length;  i++){
        rgb[i] = arr[i].toString(16);
    }
    return "#" + rgb.join('');
}