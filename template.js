// Employe

[
  '{{repeat(20, 20)}}',
  {
    _id: '{{objectId()}}',
    age: '{{integer(24, 60)}}',
    nom: '{{firstName()}}',
    prenom: '{{surname()}}',
    gender: '{{gender()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}',
    embauche: '{{date(new Date(2010, 0, 1), new Date(), "YYYY-MM-dd")}}'
  }
]

[
  {
    'repeat(2, 5)': {
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
            dateMiseEnService: '{{moment(this.date(new Date(2002, 0, 1), new Date()))}}'
          }
        }
      ]
    }
  }
]
