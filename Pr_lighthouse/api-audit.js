'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id: 'api-audit',
            title: 'API audit',
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'API initialized and ready',
            failureDescription: 'API slow to initialize',
            helpText: 'Usado para medir el tiempo de carga de la API',
            requiredArtifacts: ['TimeToAPI']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToAPI;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            displayValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;