import mysql from "mysql2";
import fs from "fs";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
  ssl: { rejectUnauthorized: false } // Opción simple
});

db.connect(err => {
  if (err) {
    console.error("❌ Error conectando a Azure MySQL:", err);
    return;
  }
  console.log("✅ Conectado a Azure MySQL");
});

export default db;
