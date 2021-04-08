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
        const offset = new Date().getTimezoneOffset();
        const epoch = new Date(d.valueOf() + (this.start + (Math.abs(offset) * 1000 * 60)));

        return epoch;
    }

    /**
     * @returns {Date} The damned date.
     */
    get endDate() {
        const d = Date.parse('01 Jan 1970 00:00:00 GMT');
        const offset = new Date().getTimezoneOffset();
        const epoch = new Date(d.valueOf() + (this.end + (Math.abs(offset) * 1000 * 60)));

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
/*
    get start() {
        return this._start;
    }
    set start(value) {
        this._start = value;
    }

    get end() {
        return this._end;
    }
    set end(value) {
        this._end = value;
    }

    get queries() {
        return this._queries;
    }
    set queries(value) {
        this._queries = value;
    }

    get noAnnotations() { 
        return this._noAnnotations;
    }
    set noAnnotations( value ) {
        this._noAnnotations = value;
    }

    get globalAnnotations() {
        return this._globalAnnotations;
    }
    set globalAnnotations( value ) {
        this._globalAnnotations = value;
    }

    get msResolution() {
        return this._msResolution;
    }
    set msResolution( value ) {
        this._msResolution = value;
    }

    get showTSUIDs() {
        return this._showTSUIDs;
    }
    set showTSUIDs( value ) {
        this._showTSUIDs = value;
    }

    get showStats() {
        return this._showStats;
    }
    set showStats( value ) {
        this._showStats = value;
    }

    get showSummary() {
        return this._showSummary;
    }
    set showSummary( value ) {
        this._showSummary = value;
    }

    get showQuery() {
        return this._showQuery;
    }
    set showQuery( value ) {
        this._showQuery = value;
    }

    get delete() {
        return this._delete;
    }
    set delete( value ) {
        this._delete = value;
    }

    get timezone() {
        return this._timeZone;
    }
    set timezone( value ) {
        this._timeZone = value;
    }

    get useCalendar() {
        return this._useCalendar;
    }
    set useCalendar( value ) {
        this._useCalendar = value;
    }    
    */
}

module.exports = OpenTimeQuery;