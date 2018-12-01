// Compte le nombre d'hotels avec des casiers à ski par étoiles
// Utilise l'algo de MapReduce
db.hotel.mapReduce(
  // Fonction Map
  function(){
    emit(this.etoiles, 1);
  },
  // Fonction Reduce
  function(key, values){
    return Array.sum(values);
  },
  {
    out : {inline : 1},
    // Travail sur les hotels avec des casiers à ski
    query: {"casierASki": true}
  }
)
