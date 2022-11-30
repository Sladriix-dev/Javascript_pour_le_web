const myAnchor = document.getElementById("my-anchor");

const contents = document.getElementsByClassName("content");
const firstContent = contents[0];

const articles = document.getElementsByTagName("article");
const thirdArticle = articles[2];
console.log(thirdArticle);

const result = document.querySelector("#myId p.article > a");

const elt2 = document.getElementById("main");
elt2.children; // retourne les elements p qui sont les enfants de #main
elt2.parentElement; // retourne la div avec l'id parent
elt2.nextElementSibling; // retourne l'element qui a l'id next
elt2.previousElementSibling; //retourne l'id previous

/*************** Modifier le DOM ***************/

let elt = document.getElementById("main");
elt2.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";

/************** LES CLASSES ****************/
elt.classList.add("nouvelleClasse"); // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse"); //Retournera false car on vient de la supprimer
elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément

/************** LE STYLE ****************/
elt.style.color = "#fff"; // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras

/************** LES ATTRIBUTS ****************/
elt.setAttribute("type", "password"); // Change le type de l'input en un type password
elt.setAttribute("name", "my-password"); // Change le nom de l'input en my-password
elt.getAttribute("name"); // Retourne my-password

/************** CREATION D'ELEMENTS ***********/
const newElt = document.createElement("div");
// let elt = document.getElementById('main');
elt.appendChild(newElt);

elt.removeChild(newElt); // Supprime l'élément newElt de l'élément elt

/*elt.replaceChild(document.createElement("article"), newElt); // Remplace l'élément newElt par un nouvel élément de type article
 */

/************** LISTEN EVENT ****************/

const evt = document.getElementById("event");
evt.addEventListener("click", function (event) {
  evt.innerHTML = "C'est cliqué";
  event.preventDefault(); // Cela empêche le comportement par défault de s'exprimer
  event.stopPropagation(); // Empêche la propagation d'un event qui contiendrait un element enfant et donc de propager l'event sur lui
});

let parentClicks = 0;
let childClicks = 0;

document.getElementById("parent").addEventListener("click", function () {
  document.getElementById("parent-count").innerHTML = ++parentClicks + "";
});
document.getElementById("child").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("child-count").innerHTML = ++childClicks + "";
});

/****** Récupérer des données utilisateurs *****/

elt.addEventListener("mousemove", function (event) {
  const x = event.offsetX; // Coordonée X de la souris dans l'élément
  const y = event.offsetY; // Coordonée Y de la souris dans l'élement
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector('select[name="ice-cream"]').onchange =
      changeEventHandler; // onchange est un event qui s'enclenche à la perte d'un focus
  },
  false
);

function changeEventHandler(event) {
  if (!event.target.value) alert("Please Select one");
  else alert("You like " + event.target.value + " ice-cream.");
}

/******* LAST EXO *********/

document.getElementById("name").addEventListener("input", function (e) {
  document.getElementById("res-name").innerText = e.target.value;
});

document.getElementById("gender").addEventListener("change", function (e) {
  document.getElementById("res-gender").innerText = e.target.value;
});

document.getElementById("result").addEventListener("mousemove", function(e) {
    document.getElementById("mouse-x").innerText = e.offsetX;
    document.getElementById("mouse-y").innerText = e.offsetY;
});

