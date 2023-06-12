import Daftar from "../models/daftar.js"
import { db } from '../config/database.js'

export const getDaftar = async(req, res) => {
    try {
        const dataDaftar = await Daftar.findAll({})
        res.status(200).json({ code: 200, status: 'OK', message: 'GET berhasil', data: dataDaftar })
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
}
export const getDaftarKode = async(req, res) => {
    
    try {
        const id = req.params.id;
        const users = await Daftar.findByPk(id)
        if (users === null) {
            res.status(402).json({ code: 404, status: 'Not Found!', message: 'Coba Ganti ID'})
          } else {
            res.status(200).json({ code: 200, status: 'OK', message: 'GET berhasil', data: users })
          }
        

    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
    
    
}

export const postDaftar = async(req, res) => {
    const{kode_daftar,kode_webinar, kode_users, tanggal_daftar} = req.body
    
    const sql = `INSERT INTO daftar (kode_daftar,kode_webinar, kode_users, tanggal_daftar) VALUES 
    ('${kode_daftar}', '${kode_webinar}','${kode_users}','${tanggal_daftar}')`
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

export const putDaftar = async(req, res) => {
    const{kode_daftar,kode_webinar, kode_users, tanggal_daftar, email, alamat} = req.body
    const sql = `UPDATE users SET kode_webinar = '${kode_webinar}', kode_users = '${kode_users}',tanggal_daftar = '${tanggal_daftar}', email ='${email}', alamat= '${alamat}' WHERE kode_daftar = ${kode_daftar}`
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

export const deleteDaftar = async(req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM daftar WHERE id = ${id}`
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