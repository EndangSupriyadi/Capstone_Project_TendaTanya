import { Sequelize } from "sequelize";
import { db } from '../config/database.js'
import Webinar from "./webinar.js";
const { DataTypes } = Sequelize

const Daftar = db.define('daftar', {
    kode_daftar: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        // primaryKey: true,
    },
    kode_webinar: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        // references:{
        //     model:{
        //         tableName: "webinar",
        //     },
        //     key:"kode_webinar",
        // },
        
    },
    
    kode_users: {
        type: DataTypes.STRING,
        required: true,
        references:{
            model:{
                tableName: "users",
            },
            key:"kode_users",
        },

    },
    tanggal_daftar: {
        type: DataTypes.DATE,
        required: true,
    }
}, {
    freezeTableName: true
})

export default Daftar