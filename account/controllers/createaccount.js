var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
var docClient = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports.createAccount = async (event, context) => {
    var params = {
        TableName: process.env.ACCOUNT_DYNAMODB_TABLE,
        Item: {
            "accountId": uuid.v1(),
            "info": JSON.parse(event.body)
        }
    };

    try {
        return await docClient.put(params).promise();
    } catch (error) {
        return error;
    }
}