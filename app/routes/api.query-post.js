const DataCreator = require('../data/data-creator.js');
const TimeResponse = require('../data/timeResponse.js');

(function() {
    'use strict';

    var OpenTimeQuery = require('../data/open-time-query.js');

    function onRequest( request, response ) {        
        const chunks = [];
        request.on('data', chunk => {
            chunks.push(chunk);
        });
        request.on('end', () => {
            var contents = Buffer.concat(chunks);
            var jsonObject = JSON.parse(contents);
            console.log(jsonObject);
            var myRequest = Object.assign(new OpenTimeQuery(), jsonObject);
            
            const dc = new DataCreator();
            const responseToSend = dc.createNonsense(myRequest);

            response
                .status( 200 )
                .send( JSON.stringify( responseToSend ) );
        });
    }

    module.exports = onRequest;
})();