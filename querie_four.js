// Compte le nombre d'hotels par étoiles
db.hotel.mapReduce(
  function(){
    emit(this.etoiles, 1);
  },
  function(key, values){
    return Array.sum(values);
  },
  {out : {inline : 1}}
)
