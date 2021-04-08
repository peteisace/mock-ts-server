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

        const baseQuery = fullQuery.queries.length > 0 ? fullQuery.queries[0] : null;        
        var isAgg = true;

        for(var i = 0; i < fullQuery.queries.length; i++) {
            const current = fullQuery.getQueryAt(i);   
            
            /* Do later.
            if(current != baseQuery) {
                const currentKeys = Object.keys(current.tags);

                for(const prop in baseQuery.tags) {
                    if(currentKeys.findIndex(value => value == prop) == -1) {
                        isAgg = false;
                        console.log("prop " + prop + " wasn't found");
                    }
                    
                    if(current.tags[prop] != baseQuery.tags[prop]) {
                        isAgg = false;
                        console.log(current.tags[prop] + " does not equal " + baseQuery.tags[prop]);
                    }
                }
            }

            console.log(isAgg);
            */
            
            // get to where we begin.
            const begin = fullQuery.startDate;
            const end = fullQuery.endDate;

            const response = this.populateQuery(fullQuery, current, begin, end);
            toSend.push(response);
        }

        return toSend;
    }

    /**
     * 
     * @param {OpenTimeQuery} fullQuery
     * @param {Query} currentQuery 
     * @param {Date} begin
     * @param {Date} end 
     */
    populateQuery(fullQuery, currentQuery, begin, end) {
        
        // details of aggregation.
        let tr = new TimeResponse(currentQuery.metric);
        var aggDetails = new AggregationType(currentQuery.downsample);

        for(var i = begin.getTime(); i < end.getTime(); i += aggDetails.incrementInMilliseconds()) {
            const value = Math.random() * 1000;
            tr.addDatapoint(i, value, fullQuery.msResolution);
        }
       
        for(const prop in currentQuery.tags) {                        
            tr.addTag(prop, currentQuery.tags[prop]);
        }

        return tr;
    }
}

module.exports = DataCreator;