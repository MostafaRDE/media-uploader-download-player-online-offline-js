const mongoose = require('mongoose')

async function databaseInitializer()
{
    await mongoose.connect('mongodb://main:main_secret@localhost:27017/main_db')
}

module.exports = { databaseInitializer }