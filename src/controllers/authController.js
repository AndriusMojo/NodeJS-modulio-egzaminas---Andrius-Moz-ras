/* eslint-disable camelcase */
const { registerUser, findUserByEmail } = require('../models/authModel');
const { hashPass, verifyHash, generateJwtToken } = require('../utilities/auth');
const { failResponse, successResponse } = require('../utilities/dbHelper');

async function userRegister(req, res) {
  const { full_name, email, password } = req.body;

  const hashedPass = hashPass(password);

  const insertResult = await registerUser(full_name, email, hashedPass);

  return insertResult === false
    ? failResponse(res)
    : successResponse(res, 'user created');
}

async function userLogin(req, res) {
  const { email, password } = req.body;

  const userFindResult = await findUserByEmail(email);

  if (userFindResult === false) return failResponse(res);
  if (!userFindResult.length) {
    return failResponse(res, 'email or password not match 1');
  }
  const foundUSerObj = userFindResult[0];

  if (!verifyHash(password, foundUSerObj)) {
    return failResponse(res, 'email or pass does not match 2');
  }
  const token = generateJwtToken(foundUSerObj);
  console.log('pass match');
  successResponse(res, token);
}

module.exports = {
  userRegister,
  userLogin,
};
