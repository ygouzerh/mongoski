// Récupérer les noms et le massif des stations, ainsi que l'altitude
// sous la chaine: "'Massif' - 'Nom' ('altitudeMin'-'altitudeMax' m): X pistes noires." (sans les quotes) avec plus de 5 pistes noires
db.station.aggregate([
  {$unwind: "$pistes"},
  {$match : {"pistes.niveau": "noir"}},
  {$group:
    {_id:"$_id",
    "nom":{$first: "$nom"},
    "massif":{$first: "$massif"},
    "altitudeMin":{$first: "$altitudeMin"},
    "altitudeMax":{$first: "$altitudeMax"},
    "count": {$sum:1}}},
  {$match : {"count": {$gte: 5}}},
  {$project: {"station":
    {$concat:
      ["$massif", " - ", "$nom", " (", {$toString: "$altitudeMin"}, "-", {$toString: "$altitudeMax"}, " m): ",
      {$toString: "$count"} ," pistes noires."]
    }
  }}
]).pretty();
