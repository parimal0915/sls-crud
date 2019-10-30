var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.updateAccount = async (event, context) => {
    var requestBody = JSON.parse(event.body);
    var params = {
        TableName: process.env.ACCOUNT_DYNAMODB_TABLE,
        Key: { accountId: event.pathParameters.id },
        UpdateExpression: "set info.firstName = :fName, info.lastName = :lName",
        ExpressionAttributeValues: {
            ":fName": requestBody.firstName,
            ":lName": requestBody.lastName,
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        return await docClient.update(params).promise();
    } catch (error) {
        return error;
    }
}