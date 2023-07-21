const express = require('express')

const Application = (function()
{
    class Application
    {
        app = express()

        listen()
        {
            this.app.listen(3000, 'localhost', () =>
            {
                console.log(`Example app listening on port ${ port }`)
            })
        }
    }

    const instance = new Application()

    const getInstance = () => instance

    return { getInstance }
})()