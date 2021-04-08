var Datapoint = require('./datapoint.js');

class TimeResponse {
    constructor(metricName) {
        this.metric = metricName;
        this.tags = {};
        this.aggregatedTags = [];
        this.dps = {};
        this.annotations = [];
        this.globalAnnotations = [];
    };

    addTag(key, value) {
        this.tags[key] = value;
    }
    
    addAggregatedTag(key, value) {
        this.aggregatedTags[key] = value;
    }

    addDatapoint(period, value) {
        this.dps[(period / 1000).toString()] = Math.round(value);
    }
}

module.exports = TimeResponse;