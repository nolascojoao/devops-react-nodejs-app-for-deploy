import mysql from "mysql"

export const db = mysql.createPool({
    connectionLimit: 10,  
    host: process.env.DB_HOST || "mariadb",  
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "teste123",
    database: process.env.DB_NAME || "crud"
})

db.getConnection((err, connection) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.stack)
        return
    }
    console.log("Conectado ao banco de dados com o ID:", connection.threadId)
    connection.release()  
})

export default db;
