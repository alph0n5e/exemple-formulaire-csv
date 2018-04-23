var boutonSoumettre = document.getElementById("soumettre");
var formulaire = document.getElementById("mon-formulaire");

// Ajouter un "listener" sur le click du bouton:
boutonSoumettre.addEventListener("click", function (event) {
  // Empêcher le comportement par défaut du bouton ("submit"):
  event.preventDefault();

  // Collecter les données du formulaire en construisant un tableau, ou objet:
  var donnees = {};
  new FormData(formulaire).forEach(function(value, key) {
    donnees[key] = value;
  });
  console.log(donnees); // Affiche dans la console pour vérifier.

  // Calcul des résultats
  var resultat = calculerResultat(donnees);

  // Télécharger résultats au format CSV
  exporterResultatEnCSV(resultat);
})


function calculerResultat(donnees) {
  // Calcul des résultats - ici, même chose que les données entrées, mais on peut
  // ajouter de la logique ici.
  var score = donnees;
  return score;
}

function exporterResultatEnCSV(donnees) {
  // Utiliser les clés pour l'entête:
  var contenuCsv = Object.keys(donnees).join(',') + '\n';
  // Puis ajouter les valeurs elles-mêmes
  contenuCsv += Object.values(donnees).join(',') + '\n';

  // Trick: On créé une ancre (balise <a>) invisible et on simule un clic dessus:
  var elementCache = document.createElement('a');
  elementCache.href = encodeURI('data:text/csv;charset=utf-8,' + contenuCsv);
  elementCache.download = 'resultat.csv';
  elementCache.click();

}
