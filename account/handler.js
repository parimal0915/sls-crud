'use strict';
var getAccountlistCtrl = require('./controllers/getaccountlist');
var createAccountCtrl = require('./controllers/createaccount');
var deleteAccountCtrl = require('./controllers/deleteaccount');
var getAccountCtrl = require('./controllers/getaccount');
var updateAccountCtrl = require('./controllers/updateaccount');

module.exports = {
  getAccountList: async (event, context) => {
    var accountList = await getAccountlistCtrl.getAccountList(event, context);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(accountList)
    };
  },
  getAccount: async (event, context) => {
    var account = await getAccountCtrl.getAccount(event, context);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(account)
    };
  },
  createAccount: async (event, context) => {
    var newAccount = await createAccountCtrl.createAccount(event, context);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(newAccount)
    };
  },
  updateAccount: async (event, context) => {    
    var updatedAccount = await updateAccountCtrl.updateAccount(event, context);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(updatedAccount)
    };
  },
  deleteAccount: async (event, context) => {    
    var deletedAccount = await deleteAccountCtrl.deleteAccount(event, context);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(deletedAccount)
    };
  }
}
