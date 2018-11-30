// Queries

// Récupérer les pisteurs qui s'occupent des remontées mécaniques
db.station.aggregate([
  {$project: {"pisteurs":1, "remonteesMecaniques.employe_id":1}},
  {$unwind: "$pisteurs"},
  {$unwind: "$remonteesMecaniques"},
  // {
  //   $redact: {
  //     $cond:{
  //       if: {$eq: ["pisteurs", "5bfec1f8e3a97b8830ea9f2d"]},
  //       then: "$$KEEP",
  //       else: "$$PRUNE"
  //     }
  //   }
  // }
  {$where: function(){return (this.pisteurs == "5bfec1f8e3a97b8830ea9f2d")}}
]).pretty();
