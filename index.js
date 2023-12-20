require('dotenv').config()
const cors = require('cors') 

const express = require('express')
const morgan = require('morgan')

const { checkConnection, syncModels } = require ('./database/index.js')

const addRelations = require('./database/relations.js')

function startExpress () {
  const app = express()
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())

  .use('/api', require('./api/router'))

  .listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
  })
}

async function checkDB () {
    await checkConnection()
    addRelations()
    await syncModels ('alter')
}
async function startAPI () {
    await checkDB()
    startExpress()
} 

startAPI()