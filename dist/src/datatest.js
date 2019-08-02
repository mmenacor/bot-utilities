module.exports.luisresults = [
    //Mocky URL: http://www.mocky.io/v2/5d30dbe13200000cb1204780
    {
        "query": "Saldo por Pagar",
        "topScoringIntent": {
            "intent": "CONSULTA_SALDO",
            "score": 0.9999991
        },
        "entities": [{
            "entity": "saldo",
            "type": "Saldo",
            "startIndex": 0,
            "endIndex": 4,
            "resolution": {
                "values": [
                    "Saldo"
                ]
            },
            "role": ""
        }]
    },
    {
        "query": "Adelantar saldo",
        "topScoringIntent": {
            "intent": "MCL01_AdelantarSaldoPRE",
            "score": 0.8503937
        },
        "entities": [{
                "entity": "adelantar saldo",
                "type": "Adelantar",
                "startIndex": 0,
                "endIndex": 14,
                "resolution": {
                    "values": [
                        "adelantar"
                    ]
                },
                "role": ""
            },
            {
                "entity": "saldo",
                "type": "Saldo",
                "startIndex": 10,
                "endIndex": 14,
                "resolution": {
                    "values": [
                        "Saldo"
                    ]
                }
            }
        ]
    }
]

exports.utteranceValidation = [{
        text: "Saldo por Pagar",
        intent: "CONSULTA_SALDO"
    },
    {
        text: "Adelantar saldo",
        intent: "MCL01_AdelantarSaldoPRE"
    }

]

exports.confidenceResult = [{

        texto: "Saldo por Pagar",
        clase: "CONSULTA_GENERAL",
        guess: "CONSULTA_GENERAL",
        correct: true,
        confidence: 0.81

    },
    {
        texto: "Otra consulta",
        clase: "CONSULTA_GENERAL",
        guess: "Consulta Saldo",
        correct: false,
        confidence: 0.11

    }

]