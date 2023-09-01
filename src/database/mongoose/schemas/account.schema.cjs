const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    name: String,
})

const Account = mongoose.model('Account', accountSchema)

module.exports = { accountSchema, Account }