const getalA=document.getElementById('a');
const getalB=document.getElementById('b');
const uitvoer=document.getElementById('uitvoer');
const knop=document.getElementById('plus');

function optellen () {
    let res=parseInt(getalA.value)+parseInt(getalB.value);
    uitvoer.value=res;
}

knop.addEventListener('click',optellen);