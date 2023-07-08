import { Sequelize } from "sequelize";
import dotenv from "dotenv/config";

// Configuramos dotenv, lee automaticamente el archivo.env
// dotenv.config();


// EL primer parametro es el nombre de la base de datos, segundo el nombre de usuario y el ultimo la contraseña
const db = new Sequelize( 'postgres://root:4coyIhxpbGwN9qAoTQMLprUFJaFdkUBT@dpg-cikb4e95rnuvtgutt62g-a.oregon-postgres.render.com/agenciaviajes_9kcr',{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true,
        native: true
    }
})

export default db