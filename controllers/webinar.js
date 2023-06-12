import Webinar from "../models/webinar.js"
import { db } from '../config/database.js'

export const getWebinar = async(req, res) => {
    try {
        const dataWebinar = await Webinar.findAll({})
        res.status(200).json({ code: 200, status: 'OK', message: 'GET berhasil', data: dataWebinar })
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
}
export const getWebinarKode = async(req, res) => {
    
    try {
        const id = req.params.id;
        const webinar = await Webinar.findByPk(id)
        if (webinar === null) {
            res.status(402).json({ code: 404, status: 'Not Found!', message: 'Coba Ganti ID'})
          } else {
            res.status(200).json({ code: 200, status: 'OK', message: 'GET berhasil', data: webinar })
          }
        

    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
    
    
}

export const postWebinar = async(req, res) => {
    const{kode_webinar,nama_webinar, deskripsi, tanggal, gambar} = req.body
    
    const sql = `INSERT INTO webinar (kode_webinar,nama_webinar, deskripsi, tanggal, gambar) VALUES 
    ('${kode_webinar}', '${nama_webinar}','${deskripsi}','${tanggal}', '${gambar}')`
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


export const putWebinar = async(req, res) => {
    try {
        res.status(200).json({ code: 200, status: 'OK', message: 'PUT berhasil' })
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal server error', message: error.message })
    }
}

export const deleteWebinar = async(req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM webinar WHERE id = ${id}`
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