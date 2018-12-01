// Récupérer la moyenne des tailles des pistes par station.
// Objectif : ne pas utiliser avg
db.station.aggregate([
  // Récupère la liste des longeurs des pistes par station
  {$unwind: "$pistes"},
  {
    $group: {
      _id: "$_id",
      nom: {$first: "$nom"},
      pistes_longueurs: {
        $push: "$pistes.longueur"
      }
    }
  },
  // Réduit cette liste à la somme des longueurs et au nombre de valeurs
  {
    $project: {
      "nom": 1,
      "longueurs": {
        $reduce: {
          input: "$pistes_longueurs",
          initialValue: {somme: 0, nombre: 0},
          in: {
            somme: {
              $add: ["$$value.somme", {$toDouble: "$$this"}]
            },
            nombre: {
              $add: ["$$value.nombre", 1]
            }
          }
        }
      }
    }
  },
  // Effectue la division de la somme des longeurs au nombre de valeurs
  // pour avoir la moyenne
  {
    $project: {
      "nom": 1,
      "taille_moyenne": {
        $ceil: {
          $divide: ["$longueurs.somme", "$longueurs.nombre"]
        }
      }
    }
  }
]);
