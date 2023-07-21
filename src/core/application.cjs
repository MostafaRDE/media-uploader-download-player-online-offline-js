const path = require('node:path')
const express = require('express')
const router = require('../routers/index.cjs')

console.log(process.cwd())

const Application = (function()
{
    class Application
    {
        app = express()

        constructor()
        {
            this.app.use(
                '/media',
                (req, res, next) =>  next(), // Download middleware
                express.static(
                    path.join(process.cwd(), 'storage/uploads'),
                ),
            )
            this.app.use('/', router)
        }

        listen()
        {
            this.app.listen(3000, 'localhost', () =>
            {
                console.log('Example app listening on port 3000')
            })
        }
    }

    const instance = new Application()

    const getInstance = () => instance

    return { getInstance }
})()

module.exports = Application