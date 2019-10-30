var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getAccountList = async (event, context) => {
    var params = {
        TableName: process.env.ACCOUNT_DYNAMODB_TABLE
    };

    try {
        return await docClient.scan(params).promise();
    } catch (error) {
        return error;
    }
}