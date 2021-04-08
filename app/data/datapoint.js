class Datapoint {
    /**
     * 
     * @param {Date} date 
     * @param {Number} value 
     */
    constructor(date, value) {
        this.date = date;
        this.value = value;
    }

    get dateInMs() {
        return this._date.getTime();
    }
}

module.exports = Datapoint;