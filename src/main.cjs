const Application = require('./core/application.cjs')

function bootstrap()
{
    const app = Application.getInstance()
    app.listen()
}

bootstrap()