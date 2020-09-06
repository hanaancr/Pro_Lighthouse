'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToAPI extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.apiLoadTime')
            .then(apiLoadTime => {
                if (!apiLoadTime) {

                    throw new Error('Unable to find API load metrics in page');
                }
                return apiLoadTime;
            });
    }
}

module.exports = TimeToAPI;