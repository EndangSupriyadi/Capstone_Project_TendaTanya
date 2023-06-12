import { Sequelize } from "sequelize";
import { db } from '../config/database.js'
const { DataTypes } = Sequelize

const Users = db.define('users', {
    kode_users: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        // primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        required: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        required: true,
    },
    nama: {
        type: DataTypes.STRING,
        required: true,
    },
    email:{
        type: DataTypes.STRING,
        required: true,
    },
    alamat:{
        type: DataTypes.STRING,
        required: true,
    }
}, {
    freezeTableName: true
})

export default Users