const getalA=document.getElementById('a');
const getalB=document.getElementById('b');
const uitvoer=document.getElementById('uitvoer');
const optellen=document.getElementById('plus');
const verschil=document.getElementById('verschil');
const product=document.getElementById('product');
const deling=document.getElementById('deling');

function Optellen () {
    let res=parseInt(getalA.value)+parseInt(getalB.value);
    uitvoer.value=res;
}

function Verschil () {
    let res=parseInt(getalA.value)-parseInt(getalB.value);
    uitvoer.value=res;
}

function Product () {
    let res=parseFloat(getalA.value)*parseFloat(getalB.value);
    uitvoer.value=res;
}

function Deling () {
    let res=parseFloat(getalA.value)/parseFloat(getalB.value);
    uitvoer.value=res;
}

optellen.addEventListener('click',Optellen);
verschil.addEventListener('click',Verschil);
product.addEventListener('click',Product);
deling.addEventListener('click',Deling);