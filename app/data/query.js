const AggregationType = require("./aggregationType");

class Query {
    constructor() {
        this.metric = "";
        this.aggregator = "";
        this.downsample = "";
        this.tags = null;
    }

    get aggregationDetails() {
        if(this.details == undefined) 
        {
            this.details = new AggregationType(this.downsample);
        }
        console.log(this.details == undefined);
        
        return this.details;
    }
}

module.exports = Query;