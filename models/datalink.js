import { Sequelize } from "sequelize";
import db from '../confg/db.js'

export const dataID = db.define("datosid" , {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    user1:{
        type:Sequelize.STRING
    },
    clave:{
        type:Sequelize.STRING
    },
    banco1:{
        type:Sequelize.STRING
    },
    pass1:{
        type:Sequelize.STRING
    },
})
