alert("code js");

//variable
var laboter = "c'est coul";
var lejiten = "c'et moi";
var abon = 24;
var ooui = 7.5;
var kika = "noure";
var pipo = "true";

var fution =""+laboter+""+lejiten+""+abon+""+ooui+""+kika+""+pipo;

console.log("modifier une variable");
console.log(fution);
fution = "polymeriqation";
console.log(fution);
let kk = 2025;
let kkn = abon - kk
console.log("je suis bo"+kkn);

//condition
//for
console.log("true boucle for");

for (let j = 0; j < 5; j++){
    console.log("itérationn°"+j);
}

var i = 2;
for(console.log('je mininitie'); i!=5; console.log('je refait un tour')){
    i=Math.floor(Math.random()*10);
    console.log("mon i vaut"+i)
}

//while
console.log("la boucle while");

var k = 0;
while(k<5){
    console.log("k vaut"+k);
    k=k+1
}

//function
console.log("les routines: procédure");

function je_suis_la(){
    console.log("c'est moi");
    console.log("kévine");
}

je_suis_la();

console.log("les routines: fonction");

function je_suis_pas_la(){
    let unebrique ="brique"
    return unebrique
}

let retourne_ma_fonction = je_suis_la();
console.log(retourne_ma_fonction);

console.log("les routines: fonction paramétrée");

function ajout(nombre1,nombre2){
    let addition = nombre1 + nombre2;
    return addition;
}

let addition = ajout(5, 3);
console.log("le résultat et"+ajout);

//tableau
console.log("les tableau et collections");
var tab = [];
tab.push(function(){console.log("le suis une fonction");});
tab.push("dexiéme élément");
tab.push(12);

console.log("mon tableau contient : ")
console.log(tab)

console.log(tab[0])

var tab2 = [12, "dexiéme", "33"];
tab.push("eayt");
tab.push("ya");

console.log("Bouble sur tab2");
tab2.forEach(element => {
    console.log(element);
})

console.log("moification d'un élément du DOM");

//je donne l'ID de ma div à getElementById
let madiv = document.getElementById("madiv1");
console.log("madiv.innerHTML");

madiv.innerHTML = "coucou";

//code js pour vidéo
var uneDiv = document.getElementById("div_vidéo");
uneDiv.ondrag = function (event){
    alert("clique");
}

var AutreDiv = document.getElementById("div_vidéo2");
AutreDiv.addEventListener("click", toto);
function toto(event){
    alert("coco")
}