import express from 'express'
import connectDB from './config/db.js'
import workshopRouter from './routes/workshopRoutes.js'
import vehicleRouter from './routes/vehicleRoutes.js'
import maintenanceRouter from './routes/maintenanceRoutes.js'

connectDB()
const app = express()
app.use(express.json())

app.use('/workshop', workshopRouter)
app.use('/vehicle', vehicleRouter)
app.use('/maintenance', maintenanceRouter)


app.listen(3000, () => console.log('http://localhost:3000'))
