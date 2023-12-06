import footballerData from './data/footballers.js'

import mongoose from 'mongoose'
import 'dotenv/config'
import Footballer from '../models/footballer.js'

// This function will:
// 1. Establish a connection to the database
// 2. We will clear out existing data in preparation to add our initial/dummy data
// 3. Add our footballerData into the the footballer collection
// 4. Close the connection to the database
async function seed() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('✅ Database connection established')

    const { deletedCount: footballerCount } = await Footballer.deleteMany()
    console.log(`❌ Deleted ${ footballerCount } footballers from the database`)

    
    const footballersCreated = await Footballer.create(footballerData)
    console.log(`🌱 Seeded ${footballersCreated.length} footballers to the database`)

    await mongoose.connection.close()
    console.log('👋 Closed the connection to the database')

  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
    console.log('👋 Closed the connection to the database')
  }

}
seed()