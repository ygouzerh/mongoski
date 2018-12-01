// Pour chaque restaurant asiatique, récupérer la plus haute hauteur de piste à laquelle
// un client pourrait skier.
// Pour faire le lien entre restaurants et station : utilise map au lieu de lookup ici.
db.commerce.aggregate([
  // Les détails sont en array donc on doit unwind
  {$unwind: "$detailsRestaurant"},
  // Commerces = Restaurant ou Commerce. On a des champs différents pour les deux, doit checker
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
  // Fait le lien restaurant - station
  {$unwind: "$pistes"},
  // Récupère la hauteur de la piste la plus haute de la station
  {$group: {
    "_id": "$_id",
    "nom": {$first: "$nom"},
    "hauteur_piste_max": {
      $max: "$pistes.altitude.max"
    }
  }},
]).map(function(station){return {station}})
}})
