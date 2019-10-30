var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getAccount = async (event, context) => {
    var params = {
        TableName: process.env.ACCOUNT_DYNAMODB_TABLE,
        Key: {
            "accountId": event.pathParameters.id
        }
    };

    try {
        return await docClient.get(params).promise();
    } catch (error) {
        return error;
    }
}