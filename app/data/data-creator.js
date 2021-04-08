const AggregationType = require('./aggregationType.js');
const Datapoint = require('./datapoint.js');
const OpenTimeQuery = require('./open-time-query.js');
const Query = require('./query.js');
const TimeResponse = require('./timeResponse.js');

class DataCreator {
    constructor() {
    }

    /**
     * @param {OpenTimeQuery} fullQuery The query we're supposed to generate crap from.
     * @returns {OpenTimeQuery[]} The response.
     */
    createNonsense(fullQuery) {
        let toSend = [];

        for(var i = 0; i < fullQuery.queries.length; i++) {
            const current = fullQuery.getQueryAt(i);              
            
            // get to where we begin.
            const begin = fullQuery.startDate;
            const end = fullQuery.endDate;

            toSend.push(this.#populateQuery(current, begin, end));
        }

        return toSend;
    }

    /**
     * 
     * @param {Query} currentQuery 
     * @param {Date} begin
     * @param {Date} end 
     */
    #populateQuery(currentQuery, begin, end) {
        // details of aggregation.
        let tr = new TimeResponse(currentQuery.metric);
        var aggDetails = new AggregationType(currentQuery.downsample);

        for(var i = begin.getTime(); i < end.getTime(); i += aggDetails.incrementInMilliseconds()) {
            const value = Math.random() * 1000;
            tr.addDatapoint(i, value);
        }

        for(const prop in currentQuery.tags) {
            console.log("****" + prop);
            tr.addTag(prop, currentQuery.prop);
        }

        return tr;
    }
}

module.exports = DataCreator;