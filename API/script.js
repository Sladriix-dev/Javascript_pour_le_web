document.getElementById("name").addEventListener("input", function (e) {
  document.getElementById("res-name").innerText = e.target.value;
});

document.getElementById("gender").addEventListener("change", function (e) {
  document.getElementById("res-gender").innerText = e.target.value;
});

document.getElementById("result").addEventListener("mousemove", function (e) {
  document.getElementById("mouse-x").innerText = e.offsetX;
  document.getElementById("mouse-y").innerText = e.offsetY;
});

/******* EXO *******/

function askHello() {
    fetch("https://mockbin.com/request?greetings=salut")
    .then(function(res) {
        return res.json();
    })
    .then(function(value) {
        document.getElementById("hello-result").innerText = value.queryString.greetings;
    })
    .catch(function(error) {
        console.error(error);
    })
}

document.getElementById("ask-hello").addEventListener("click", askHello);


/******** Valider les données saisis par le user *******/

document.getElementById("name").addEventListener("input", function(e) { 
    // L'event input permet de vérifier chaque entrée de l'utilisateur au lieu de use change
    var value = e.target.value;
    if(value.startsWith('Hello')) {
        isValid = true;
    } else {
        isValid = false;
    }
});

function isValid(value) { 
    return /^e[0-9]{3,}$/.test(value);
}
// Cette function vérifie si le texte commence par la lettre et est suivi d'au moins 3 chiffres = Validation avec Regex


/******* EXO *******/

function getCodeValidation() {
    return document.getElementById("code-validation");
}

function disableSubmit(disabled) {
    if (disabled) {
        document.getElementById("submit-btn").setAttribute("disabled", true);
    } else {
        document.getElementById("submit-btn").removeAttribute("disabled");
    }
}

document.getElementById("code").addEventListener("input", function(e) {
    if (/^CODE-/.test(e.target.value)) {
        getCodeValidation().innerText = "Code valide !";
        disableSubmit(false);
    } else {
        getCodeValidation().innerText = "Code invalide !";
        disableSubmit(true);
    }
});


/******* EXO *******/

function send(e) {
    e.preventDefault(); // Evite que la page se recharge
    fetch("https://mockbin.com/request", { // Promise
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: document.getElementById("value").value})
    })
    .then(function(res) {
        if (res.ok) {
            return res.json(); // Promise
        }
    })
    .then(function(value) { // Vrai valeur
        document.getElementById("result2").innerText = value.postData.text;
    })
    .catch(function(err) {
        console.error("Ca a fail: " + err);
    })
}

document.getElementById("form").addEventListener("submit", send);