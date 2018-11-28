// Employe

[
  {
    'repeat(100, 100)':
    {
      _id: '{{objectId()}}',
      age: '{{integer(24, 60)}}',
      nom: '{{firstName()}}',
      prenom: '{{surname()}}',
      gender: '{{random("H", "F")}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}',
      embauche: '{{ moment(this.date(new Date(2010, 0, 1), new Date())).format("YYYY-MM-DD") }}T00:00:00Z'
    }
  }
]

// Station

[
  {
    'repeat(10, 10)': {
      _id: '{{objectId()}}',
      nom: 'Val Thorens',
      massif: '{{random("Alpes", "Pyrénées", "Massif central", "Vosges")}}',
      prixForfait: '{{integer(10, 56)}}',
      heureOuverture: '{{integer(8,10)}}',
      heureFermeture: '{{integer(16,18)}}',
      altitudeMin: '{{integer(800,1000)}}',
      altitudeMax(tags) {
        return tags.integer(`${this.altitudeMin+500}`, 3500);
      },
      pistes: [
        {
          'repeat(10,30)': {
            nom(tags) {
              const pistes = ["Chamois", "Bosses", "Tétras", "Grandes combes", "Petites combes", "Goulet", "Le mur", "Marmotte", "Niverolle", "Biche", "Renard", "Pic bleu", "Lac blanc", "Sources", "Bouc", "Bouc blanc", "Creux", "Belvédère", "Alouette", "Mouflon", "Fée", "Glacier", "Signal", "Demoiselles", "Vallée blanche", "Diable", "Bellecombes", "Côtes"];
              return pistes[tags.integer(0, pistes.length - 1)] + " " + tags.integer(1, 5);
            },
            niveau: '{{random("vert", "bleu", "rouge", "noir")}}',
            longueur: '{{floating(0.5, 15)}}',
            eclairage: '{{bool()}}',
            altitude: {
              min(tags) {
                return tags.integer(800, 2200);
              },
              max(tags) {
                return tags.integer(`${this.min}`, 3500);
              }
            }
          }
        }
      ],
      enneigementStation: '{{integer(40, 180)}}',
      enneigementSommet: '{{integer(100, 400)}}',
      remonteesMecaniques: [
        {
          'repeat(2,10)': {
            nom(tags) {
              const noms = ["Combes", "Platières", "Saulire express", "Morel", "Loze", "Dou des lanches", "Verdons", "Epicea", "Tovets", "Pralong", "Aiguille", "Signal", "Tougnettes", "Bruyères"];
              return noms[tags.integer(0, noms.length - 1)];
            },
            type: '{{random("Télésiège", "Cabine", "Téléski")}}',
            dateMiseEnService: '{{moment(this.date(new Date(2002, 0, 1), new Date()))}}',
            employe: 'TODO'
          }
        }
      ]
    }
  }
]

// Hotels
[
  {
    'repeat(2, 5)': {
      _id: '{{objectId()}}',
      nom(tags) {
       	const noms = ["Le pic blanc", "Grandes rousses", "Royal ours blanc", "Le caribou", "Les gentianes", "Les bergers", "La bergerie", "Le chamois", "Belle aurore", "Vallée blanche", "Hotelerie des neiges", "Le cairn", "Le sherpa", "Les melezes", "La brunerie", "L'ours", "L'edelweiss"];
        return noms[tags.integer(0, noms.length - 1)];
      },
      adresse: '{{integer(100, 999)}} {{street()}}, {{city()}}',
      etoiles: '{{integer(1,4)}}',
      telephone: '+336' + '{{integer(10000000, 999999999)}}',
      parking: {
        places: '{{integer(0, 50)}}',
        couvert: '{{bool()}}'
      },
      casierASki: '{{bool()}}'
    }
  }
]

// Fromageries
[
  {
    'repeat(3, 3)': {
      _id: '{{objectId()}}',
      id_station: '5bfed6b7dac6dd5dc457f600',
      nom(tags) {
       	const noms = ["Chez", "La fromagerie", "Le comptoire de", "La bergerie de", "L'étable de", "La crèmerie de"];
        const pers = ["Gérard", "Bernard", "Antoine", "Yohan", "Quentin", "Loic", "Maxime", "Ginette", "François", "Roland", "Bert", "Gertrude", "Felix"];
        return noms[tags.integer(0, noms.length - 1)] + " " + pers[tags.integer(0, pers.length - 1)];
      },
      adresse: '{{integer(100, 999)}} {{street()}}, Tignes',
      type: "Fromagerie",
      telephone: '+336' + '{{integer(10000000, 999999999)}}',
      produits: [
        {
          'repeat(5, 10)': {
            nom(tags) {
              const fromages = ["Bleu", "Chèvre", "Gorgonzola", "Comté", "Reblochon", "Abondance", "Mimolette", "Cheddar", "Beaufort", "Tomme de Savoie", "Chevrotin", "Raclette", "Emmental"];
              return fromages[tags.integer(0, fromages.length - 1)];
            },
            prixKilo: '{{integer(5, 18)}}'
          }
        }
      ]
    }
  }
]

// Restaurants
[
  {
    'repeat(3, 7)': {
      _id: '{{objectId()}}',
      id_station: '5bfed6b7dac6dd5dc457f600',
      nom(tags) {
       	const noms = ["La table", "Au comptoir", "La pizza", "La fondue", "Snack", "Pizzeria", "Buffet", "La crêperie"];
        const pers = ["de Gérard", "de Bernard", "d'Antoine", "de Yohan", "de Quentin", "de Loic", "de Maxime", "de Ginette", "de François", "de Roland", "de Bert", "de Gertrude", "de Felix", "des cimes", "des neiges", "des montagnes", "du lac", "du pic", "des bois", "des pistes", "du cerf", "des marmottes"];
        return noms[tags.integer(0, noms.length - 1)] + " " + pers[tags.integer(0, pers.length - 1)];
      },
      adresse: '{{integer(100, 999)}} {{street()}}, Tignes',
      type: "Restaurant",
      telephone: '+336' + '{{integer(10000000, 999999999)}}',
      detailsRestaurant: [
        {
          prixMenu: '{{integer(10, 35)}}',
          typeCuisine: '{{random("Asiatique", "Traditionnelle", "Italienne", "Bouchon", "Indien")}}'
        }
      ]
    }
  }
]
