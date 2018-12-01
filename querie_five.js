// Ajoute l'employé à la piste la plus longue des stations comportant un restaurant chinois et un vendeur de reblochon
// Pour chaque restaurant asiatique, récupérer la plus haute hauteur de piste.
// Récupère la hauteur des
db.commerce.aggregate([
  // Need to unwind becaue it is an array
  {$unwind: "$detailsRestaurant"},
  {$match: {
    "type": "Restaurant",
    "detailsRestaurant.typeCuisine": "Asiatique"
  }},
  {$group: {
    _id: "$_id",
    "id_station": {$first: "$id_station"},
    nom: {$first: "$nom"},
    cuisine: {$first: "$detailsRestaurant.typeCuisine"}
  }}
]).map(function(commerce){return {"nom": commerce.nom, "cuisine": commerce.cuisine, "station": db.station.aggregate([
  {$match: {
    "_id": commerce.id_station
  }},
  {$unwind: "$pistes"},
  {$group: {
    "_id": "$_id",
    "nom": {$first: "$nom"},
    "hauteur_piste_max": {
      $max: "$pistes.altitude.max"
    }
  }},
]).map(function(station){return {station}})
}})
