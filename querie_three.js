// Récupérer la moyenne des tailles des pistes par station.
db.station.aggregate([
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
