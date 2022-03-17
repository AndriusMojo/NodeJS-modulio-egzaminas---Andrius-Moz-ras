const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function accountInDb(userId) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    SELECT accounts.id AS "id", groups.name AS "group", accounts.user_id AS "user_id" 
    FROM accounts
    INNER JOIN groups ON accounts.group_id = groups.id
    WHERE user_id = ?`;
    const [fields] = await conn.execute(sql, [userId]);
    await conn.close();
    return fields;
  } catch (error) {
    return false;
  }
}
async function createAccountInDb(newRecordData) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
        INSERT INTO accounts (group_id, user_id) VALUES (?, ?)
        `;
    const { group_id, user_id } = newRecordData;
    const [fields] = await conn.execute(sql, [group_id, user_id]);
    await conn.close();
    return fields;
  } catch (error) {
    return false;
  }
}

module.exports = {
  accountInDb,
  createAccountInDb,
};

