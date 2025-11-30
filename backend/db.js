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
host: "server-bd-app.mysql.database.azure.com",
user: "mprieto",
password: "870519Ap/",
database: "ecommerce_db",
port: 3306,
ssl: {
rejectUnauthorized: true
 }
});

db.connect(err => {
 if (err) {
   console.error("❌ Error conectando a Azure MySQL:", err);
   return;
 }
 console.log("✅ Conectado a Azure MySQL");
});

export default db;
