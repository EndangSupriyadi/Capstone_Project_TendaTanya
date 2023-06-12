import express from 'express'
import { getUsers, postUsers, putUsers, deleteUsers, getUsersKode } from '../controllers/users.js'
import { deleteWebinar, getWebinar, getWebinarKode, postWebinar, putWebinar } from '../controllers/webinar.js'
import { deleteDaftar, getDaftar, getDaftarKode, postDaftar, putDaftar } from '../controllers/daftar.js'


const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUsersKode)
router.post('/users', postUsers)
router.put('/users/:id', putUsers)
router.delete('/users/:id', deleteUsers)

router.get('/webinar', getWebinar)
router.get('/webinar/:id', getWebinarKode)
router.post('/webinar', postWebinar)
router.put('/webinar/:id', putWebinar)
router.delete('/webinar/:id', deleteWebinar)

router.get('/daftar', getDaftar)
router.get('/daftar/:id', getDaftarKode)
router.post('/daftar', postDaftar)
router.put('/daftar/:id', putDaftar)
router.delete('/daftar/:id', deleteDaftar)
export default router