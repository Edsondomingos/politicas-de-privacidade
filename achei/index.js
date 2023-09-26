const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

const corsOptions = {
    origin: 'http://127.0.0.1:5500'
}

app.use(cors())

app.get('/api', (req, res) => {
    let dados = []
    axios.get(`https://clucky-warranty.000webhostapp.com/api_app.php`)
    // axios.get(`http://localhost:8000/site-online/api_app.php`)
        .then((response) => {
            const repos = response.data
            for (let i of repos) {
                dados.push(i)
            }
            res.json(dados)
        })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server rodando na porta', PORT)
})