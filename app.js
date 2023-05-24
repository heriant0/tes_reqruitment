const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.PORT, 'process.env.PORT')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const { urlencoded } = require('express')
const errorHandler = require('./middlewares/errorHandlers')
const router = require('./routes/index');

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/', router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`this app running on port ${port}!`)
})