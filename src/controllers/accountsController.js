const { accountInDb, createAccountInDb } = require('../models/accountsModel');
const { failResponse, successResponse } = require('../utilities/dbHelper');

async function getAccount(req, res) {
  const userId = req.token.id;
  const serverResponseJS = await accountInDb(userId);

  return serverResponseJS === false
    ? failResponse(res)
    : successResponse(res, serverResponseJS);
}

async function createAccount(req, res) {
  const newRecordData = {
    group_id: req.body.group_id,
    user_id: req.token.id,
  };
  const serverResponseJS = await createAccountInDb(newRecordData);

  return serverResponseJS === false
    ? failResponse(res)
    : successResponse(res, serverResponseJS);
}

module.exports = {
  createAccount,
  getAccount,
};
