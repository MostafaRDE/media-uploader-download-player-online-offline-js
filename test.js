const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.setPrompt('Math expr >>> ')
readline.prompt()

readline
    .on('line', function (line)
    {
        console.log('I got it =>', line.trim())
        // Execute it
        readline.prompt()
    })
    .on('close', function ()
    {
        console.log('Have a great day!')
        process.exit(0)
    })