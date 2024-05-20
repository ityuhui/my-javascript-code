const mysql = require('mysql2/promise');

async function init_db() {
    const con = await mysql.createConnection({
        host: "192.168.22.121",
        user: "root",
        password: "",
        database: "mydb"
    });

    try {
        const err = await con.execute(create_table_sql);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    init_db
}
