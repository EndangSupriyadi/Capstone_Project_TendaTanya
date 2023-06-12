import Users from "../models/users.js"
import { db } from '../config/database.js'


export const getUsers = async(req, res) => {
    try {
        const dataUsers = await Users.findAll({})
        res.status(200).json({ code: 200, status: 'OK', message: 'GET berhasil', data: dataUsers })
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
}
export const getUsersKode = async(req, res) => {
    
    try {
        const id = req.params.id;
        const users = await Users.findByPk(id)
        if (users === null) {
            res.status(402).json({ code: 404, status: 'Not Found!', message: 'Coba Ganti ID'})
          } else {
            res.status(200).json({ code: 200, status: 'OK', message: 'GET berhasil', data: users })
          }
        

    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
    
    
}

export const postUsers = async(req, res) => {
    const{kode_users,username, password, nama, email, alamat} = req.body
    
    const sql = `INSERT INTO users (kode_users,username, password, nama, email, alamat) VALUES 
    ('${kode_users}', '${username}','${password}','${nama}', '${email}','${alamat}')`
    db.query(sql, (err, fields)=>{
        if (err) response(500, "invalid","error", res )
        if (fields?.affectedRows){
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId
            }
            response(200, data, "Data Added Successfully", res)
        } 
    })
    try {
        res.status(200).json({ code: 200, status: 'OK', message: 'POST berhasil' })
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
}

export const putUsers = async(req, res) => {
    const{kode_users,username, password, nama, email, alamat} = req.body
    const sql = `UPDATE users SET username = '${username}', password = '${password}',nama = '${nama}', email ='${email}', alamat= '${alamat}' WHERE kode_users = ${kode_users}`
    db.query(sql, (err, fields)=>{
        if (err) throw err
        response(200,  fields, "get detail users", res)
    })
    try {
        res.status(200).json({ code: 200, status: 'OK', message: 'PUT berhasil' })
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
}

export const deleteUsers = async(req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id = ${id}`
    db.query(sql, (err, fields)=>{
    if (err) response(500, "Invalid", "error", res)
    if(fields?.affectedRows){
        const data ={
            isDeleted: fields.affectedRows,
            
            }
        response(200,data, "Deleted Data Successfully", res)
        } else{
            response(404, "user not found", "error", res)

        }

    })
    try {
        
        res.status(200).json({ code: 200, status: 'OK', message: 'DELETE berhasil' })
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
}