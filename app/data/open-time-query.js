var Query = require('./query.js');

class OpenTimeQuery {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.queries = [];
        this.noAnnotations = false;
        this.globalAnnotations = false;
        this.msResolution = false;
        this.showTSUIDs = false;
        this.showSummary = false;
        this.showStats = false;
        this.showQuery = false;
        this.delete = false;
        this.timeZone = "";
        this.useCalendar = false;
    }

    /**
     * @returns {Date} The damned date.
     */
    get startDate() {
        const d = Date.parse('01 Jan 1970 00:00:00 GMT');
        const offsetDate = new Date();
        const offset = offsetDate.getTimezoneOffset();
        const epoch = new Date(d.valueOf() + this.start);

        return epoch;
    }

    /**
     * @returns {Date} The damned date.
     */
    get endDate() {
        const d = Date.parse('01 Jan 1970 00:00:00 GMT');
        const offsetDate = new Date();        
        const offset = offsetDate.getTimezoneOffset();
        const endValue = this.end == 0 ? offsetDate.getTime() : this.end;        
        const epoch = new Date(d.valueOf() + endValue);

        return epoch;
    }

    /**
     * 
     * @param {Number} index 
     * @returns {Query} The query that sits in the array at the index.
     */
    getQueryAt(index) {         
        const item = this.queries[index];
        return item;
    }
}

module.exports = OpenTimeQuery;