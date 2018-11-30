// Récupérer les noms et les prénoms des pisteurs qui s'occupent des remontées mécaniques
db.station.aggregate([
    // Explode the arrays
    {$unwind: "$pisteurs"},
    {$unwind: "$remonteesMecaniques"},
    // Verify that our keys exists
    {$match:{"pisteurs":{"$exists":true},"remonteesMecaniques.employe_id":{"$exists":true}}},
    // Compare the two fields and filter
    {$project: {
        "pisteurs":1,
        "Cmp": {"$cmp":["$pisteurs","$remonteesMecaniques.employe_id"]}
    }
    },
    // Check equals
    {$match:{"Cmp":0}},
    // Get the employer
    {$lookup: {
        from: "employe",
        localField: "pisteurs",
        foreignField: "_id",
        as: "employe",
    }},
    {$project: {"employe.prenom":1, "employe.nom":1}}
])
