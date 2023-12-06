import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()

//Middleware

app.use(express.json())

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`)
  next()
})

// Endpoints
app.get('/players', async (req, res) => 
)



// Start servers

async function startServer(){
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('Database connection established')
    app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))
  } catch (error) {
    console.log('Error establishing connection')
    console.log(error)
  }
}
startServer()