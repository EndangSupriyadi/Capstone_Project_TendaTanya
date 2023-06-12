import express from 'express'
import dotenv from 'dotenv'
import Users from './models/users.js'
import Webinar from './models/webinar.js'
import Daftar from './models/daftar.js'
import { database } from './config/connection.js'
import router from './routes/app.js'

dotenv.config()
database()

const app = express()
const PORT = process.env.PORT || 5000

// try {
//     await Users.sync({ force: true })
//     await Webinar.sync({ force: true })
//     await Daftar.sync({ force: true })
// } catch (error) {
//     console.log(`error : ${error.message}`)
// }

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`Server berjalan pada port: ${PORT}`))