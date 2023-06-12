import { Sequelize } from "sequelize";
import { db } from '../config/database.js'
const { DataTypes } = Sequelize

const Webinar = db.define('webinar', {
    kode_webinar: {
        type: DataTypes.STRING,
        required: true,
        unique: true
    },
    nama_webinar: {
        type: DataTypes.STRING,
        required: true,
    },
    deskripsi: {
        type: DataTypes.STRING,
        required: true,
    },
    tanggal: {
        type: DataTypes.DATE,
        required: true,
    },
   
    gambar: {
        type: DataTypes.STRING,
        required: true,
    },

}, {
    freezeTableName: true
})

export default Webinar