module.exports.luisresults = [

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
        "query": "Saldo",
        "topScoringIntent": {
            "intent": "CONSULTA_SALDO",
            "score": 0.9999941
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
    }

]

exports.utteranceValidation = [{
        text: "Consulta",
        intent: "CONSULTA_GENERAL"
    },
    {
        text: "Otra consulta",
        intent: "CONSULTA_GENERAL"
    }

]

exports.confidenceResult = [{

        texto: "Consulta",
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