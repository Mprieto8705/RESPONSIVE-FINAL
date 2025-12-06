import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'node:http';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ⚡ Desactivar cabecera que revela la versión de Express
app.disable("x-powered-by");

// Aquí defines los dominios permitidos (reemplaza con tus dominios reales)
const allowedOrigins = [
  "https://server-app-dfhhfxbaaxb3csgj.westus3-01.azurewebsites.net",
];

// Configuración segura de CORS
const corsOptions = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // Permite peticiones sin origen (ej: Postman)
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Origen permitido
    } else {
      callback(new Error("No permitido por CORS")); // Origen no permitido
    }
  }
};

app.use(cors(corsOptions)); // Usa CORS con configuración segura
app.use(express.json());

app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
