import { Sequelize } from "sequelize";
import dotenv from "dotenv/config";

// Configuramos dotenv, lee automaticamente el archivo.env
// dotenv.config();


// EL primer parametro es el nombre de la base de datos, segundo el nombre de usuario y el ultimo la contraseña
const db = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect:'postgres',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})

export default db