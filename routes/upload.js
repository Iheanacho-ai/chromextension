const express = require('express')
const router = express.Router();
const { uploadVideo} = require('../controller/upload')
const upload = require('../middleware/multer')


router.post('/upload', upload.single('video'), uploadVideo)





module.exports = router;