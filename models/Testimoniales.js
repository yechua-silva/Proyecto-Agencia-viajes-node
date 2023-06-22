import { Sequelize } from "sequelize";
import db from "../config/db.js";

// Modelo de Viaje - define - 1er parametro el nombre de las tablas
export const Testimonial = db.define("testimoniales", {
    // Aca se colocan las tablas que se planearon para el proyecto
    // El id se da por sentado
    nombre: {
        type: Sequelize.STRING,
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});