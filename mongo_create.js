db.Station.drop();
db.Employe.drop();
db.Hotel.drop();
db.Commerce.drop();

db.createCollection("Employe", { collation: { locale: "fr" } });
db.createCollection("Station", { collation: { locale: "fr" } });
db.createCollection("Hotel", { collation: { locale: "fr" } });
db.createCollection("Commerce", { collation: { locale: "fr" } });


db.Employe.insert({
    _id: ObjectID()
    nom : "Dupont"
    prenom : "Paul"
    adresse: {
        rue: "4 rue du peupliers"
        ville: "Grenoble"
    }
    age:
    embauche: new Date("2005-07-08")
})
