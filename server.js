const express = require('express');
require('dotenv').config();
const cors = require('cors')
const upload = require('./routes/upload')

const app = express();
app.use(express.json());
app.use(cors())
app.use('/api', upload)

app.listen(port, () => {
    console.log(`listening on port ${process.env.PORT}`)
})