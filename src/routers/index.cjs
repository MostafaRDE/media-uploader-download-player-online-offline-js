const path = require('node:path')
const express = require('express')
const multer  = require('multer')

const router = express.Router()
const upload = multer({ dest: path.join(process.cwd(), 'storage/uploads/') })

router.post('/upload', upload.single('file'), (_, res) =>
{
    res.json({ status: true })
})

module.exports = router