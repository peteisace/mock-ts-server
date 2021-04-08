class AggregationType {
    constructor(aggregationString) {
        const parts = aggregationString.split('-');
        // take the first part.
        this.aggregationPeriod = parts[0].substring(parts[0].length - 1);
        this.aggregationValue = parts[0].substring(0, parts[0].length - 1);
        this.aggregationMethod = parts[1];
    }

    /**
     * 
     * @returns A value.
     */
    incrementInMilliseconds() {
        var p = 0;
        switch(this.aggregationPeriod) {
            case "s":
                p = 1000;
                break;
            case "m":
                p = 1000 * 60;
                break;
            case "h": 
                p = 1000 * 60 * 60;
                break;
            case "d":
                p = 1000 * 60 * 60 * 24;
                break;
        }

        
        return p * this.aggregationValue;
    }
}

module.exports = AggregationType;