'use strict';

module.exports.hello = (event, context, callback) => {

    //Below functions return queryStringParameters
    if (event.queryStringParameters && event.queryStringParameters.name) {
       return callback(null, {
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'HI ' + event.queryStringParameters.name,
                }),
        })
    }

    //Below functions as a way to return POST JSON object using POSTMAN
    if (event.httpMethod === "POST" && event.body) {
        let json = JSON.parse(event.body);

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: "HI I've received a JSON object",
                    body: json
                }),
        })

    }

    //default response
    const response = {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'environment variable is ' + process.env.API_secret_key
            }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
