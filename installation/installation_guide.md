# Installation guide

## Créer la base de données (facultatif)

Une docker est founit pour lancer directement
une bd mongo pour isoler le projet du reste de votre
environnement.

Lancement : `docker-compose up`

## Peupler la base de données

Executez le fichier bash : `./populate.sh`, en veillant à rentrer le
port en local sur lequel écoute votre base de donnée.
(Si vous avez utilisé l'image docker du projet, le port sur lequel écoute mongodb est *27017*)

## Utiliser la base de données

En local, connectez-vous à la base grâce à la commande : `mongo --host localhost:PORT_NUM` en spécifiant votre numéro de port.

Ensuite, indiquer que vous souhaitez utiliser la base *ski* : `use ski`
