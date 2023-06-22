import { Sequelize } from "sequelize";
import db from "../config/db.js";

// Modelo de Viaje - define - 1er parametro el nombre de las tablas
export const Viaje = db.define("viajes", {
    // Aca se colocan las tablas que se planearon para el proyecto
    // El id se da por sentado
    titulo: {
        type: Sequelize.STRING,
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});