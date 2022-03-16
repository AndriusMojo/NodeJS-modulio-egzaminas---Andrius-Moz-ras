const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_TOKEN_SECRET;

function hashPass(plainPassword) {
  return bcrypt.hashSync(plainPassword, 10); // 10 = saltas passo
}

function verifyHash(enteredPass, userObj) {
  return bcrypt.compareSync(enteredPass, userObj.password);
}

function generateJwtToken(userObj) {
  return jwt.sign({ id: userObj.id }, jwtSecret, { expiresIn: '1h' });
}

function verifyJwtToken(token) {
  try {
    const payload = jwt.verify(token, jwtSecret);
    return payload;
  } catch (err) {
    // err
    console.log('err ===', err.message);
    return false;
  }
}

module.exports = {
  hashPass,
  verifyHash,
  generateJwtToken,
  verifyJwtToken,
};
