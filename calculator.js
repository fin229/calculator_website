const getalA=document.getElementById('a');
const getalB=document.getElementById('b');
const uitvoer=document.getElementById('uitvoer');
const optellen=document.getElementById('plus');
const verschil=document.getElementById('verschil')

function Optellen () {
    let res=parseInt(getalA.value)+parseInt(getalB.value);
    uitvoer.value=res;
}

function Verschil () {
    let res=parseInt(getalA.value)-parseInt(getalB.value);
    uitvoer.value=res;
}

optellen.addEventListener('click',Optellen);
verschil.addEventListener('click',Verschil)