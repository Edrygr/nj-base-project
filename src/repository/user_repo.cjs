const db = require('../db/mariadb_connection.cjs');
async function insertUsers(name, hashed_password, salt) {
    sql = 'INSERT INTO `user`(name, hashed_password, salt) VALUES("' + name + '", "' + hashed_password + '", "' + salt + '");'

        return db.pool.query(sql, (err, data, fields) => {
            if (err) {
                throw err;
            }
        });
}

async function findByName(name) {
    sql = 'SELECT id, name, hashed_password, salt FROM `user` where name ="'+name+'"'
    await db.pool.query(sql, (err, result, fields) => {
        if (err)
            throw err;
    }).then(value => {
        if (!value[0])
            throw err;
        return {
            id: value[0].id,
            name: value[0].name,
            salt: value[0].salt,
        }
    });
}


module.exports = {insertUsers,findByName};