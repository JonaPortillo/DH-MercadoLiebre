let express = require('express')
let app = express()
let path = require('path')
const PORT = 3000

//Routes
app.get('/', (req, res) => {
    res.send("Hola")
})


app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))