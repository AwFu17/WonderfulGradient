
const text1 = document.getElementById("ar1");
const text2 = document.getElementById("ar2");
const button = document.getElementById("btn");
const fBtn = document.getElementById("fBtn");
const sBtn = document.getElementById("sBtn");

let sHex = generateHexColor();
let fHex = generateHexColor();
document.body.style.background = toRGB(sHex, fHex);
text1.innerHTML = `left hex: <span id="lHex">#${sHex.join('')}</span> `;
text2.innerHTML = `right hex: <span id="rHex">#${fHex.join('')}</span>`;

button.onclick = function(){
    let sHex = generateHexColor();
    let fHex = generateHexColor();
    text1.innerHTML = `left hex: <span id="lHex">#${sHex.join('')}</span> `;
    text2.innerHTML = `right hex: <span id="rHex">#${fHex.join('')}</span>`;
    console.log(toRGB(sHex, fHex));
    document.body.style.background = toRGB(sHex, fHex);
}

fBtn.onclick = function(){
    const lHex = document.getElementById("lHex");
    navigator.clipboard.writeText(lHex.textContent)
    .then(() => {alert("copied")})
    .catch(err => {console.log(err)})
}

sBtn.onclick = function(){
    const rHex = document.getElementById("rHex");
    navigator.clipboard.writeText(rHex.textContent)
    .then(() => {alert("copied")})
    .catch(err => {console.log(err)})
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