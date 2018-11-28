db.station.createIndex({massif: 1});
db.employe.createIndex({nom:1, prenom:-1});
db.hotel.createIndex({id_station:1});
db.commerce.createIndex({id_station:1,type:-1});
