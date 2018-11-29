// Queries

// Récupérer les stations avec plus de 5 pistes noires
db.station.aggregate([
  {$unwind: "$pistes"},
  {$match : {"pistes.niveau": "noir"}},
  {$group: {_id:"$_id", "nom":{$first: "$nom"}, "count": {$sum:1}}},
  {$match : {"count": {$gte: 5}}}
]);
