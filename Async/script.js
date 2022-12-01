/***************** INTRODUCTION *******************/

setTimeout(function () {
  // C'est une function asynchrone qui prend une fonction a exécuter et un délai
  console.log("I'm here !");
}, 5000);

console.log("Where are you ?");

// Javascript = synchrone + mono-thread

/*************** Gérez du code asynchrone ***************/

/* Les events sont un bon exemples de fonctions asynchrone puisqu'ils sont appelés lorsque le user fait quelque chose et n'empêche pas pour autant l'exécution du code */
/*
fs.readFile(filePath, function(err, data) {
    if(err) {
        throw err;
    } else {
        // Do something with data
    }
})
*/
// Cela permet de gérer les erreurs callbacks

/******* EXO *******/

async function getNumber1() {
  return 4;
}

async function getNumber2() {
  return 10;
}

async function compute() {
  return (await getNumber1()) + (await getNumber2());
}

compute().then(function (res) {
  document.getElementById("result").innerText = res;
});

/********  Parallélisez plusieurs requêtes HTTP *********/

/*

Promise.all([get(url1), get(url2)])
  .then(function(results) {
    return Promise.all([results, post(url3)]);
  })
  .then(function(allResults) {
    // We are done here !
  });

Promise.all permet d'exécuter plusieurs requêtes en même temps et lorsque celles si sont terminés "then" on exécute la requête post
allResults = [ [ getResult1, getResult2 ], postResult ]


async function requests() {
  var getResults = await Promise.all([get(url1), get(url2)]);
  var postResult = await post(url3);
  return [getResults, postResult];
}
requests().then(function(allResults)){
  // We are done here !
}
Ceci fait la meme chose qu'au dessus mais avec des requêtes async et await (toujours avec Promise.all qui permet d'enchaîner plusieurs requêtes)

*/

async function func1() {
  return 3;
}

async function func2() {
  return 4;
}

var promiseRes = Promise.all([func1(), func2()])
  .then(function (results) {
    return results.reduce(function (acc, res) {
      return acc * res;
    }, 2);
  })
  .then(function (time) {
    return setTimeout(callback, time * 1000);
  });

console.log(promiseRes);