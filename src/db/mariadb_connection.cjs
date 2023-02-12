const mariadb = require("mariadb");
const fs = require('fs');
const readline = require('readline');

//Initialize Pool
var pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_POOL_LIMIT_CONNECTONS,
});

pool.getConnection((err,connection)=> {
    if(err)
        throw err;
    console.inco('Database connected successfully');
    connection.release();
});

async function processLineByLine() {
    const fileStream = fs.createReadStream('base_database.sql');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let lineCount = 1;
    console.info(`Database process started`);
    for await (const line of rl) {
        console.info(`Excecuting line: ${lineCount}`);
        await pool.query(line, (err)=> {
            if(err)
                throw err;
            console.info("Error en line: "+ lineCount)

        });
        lineCount++;
    }
    console.info("SQL successfully excecuted");
}


module.exports = {pool,processLineByLine};
