/**import mysql from "mysql2";

const db = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "", // tu contraseña MySQL
  database: "ecommerce_db"
});

db.connect(err => {
 if (err) throw err;
 console.log("✅ Conectado a MySQL");
});

export default db;**/


import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

db.connect(err => {
  if (err) {
    console.error("❌ Error conectando a Azure MySQL:", err);
    return;
  }
  console.log("✅ Conectado a Azure MySQL");
});

export default db;
