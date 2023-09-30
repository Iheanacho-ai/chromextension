const express = require('express')
const router = express.Router();
const { uploadVideo, getTranscribedVideo} = require('../controller/upload')
const upload = require('../middleware/multer')


router.post('/upload', upload.single('video'), uploadVideo)
router.get('/:public_id', getTranscribedVideo)





module.exports = router;