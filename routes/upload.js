const express = require('express')
const router = express.Router();
const { uploadVideo, getVideo } = require('../controller/upload')
const upload = require('../middleware/multer')


router.post('/upload', upload.single('image'), uploadVideo)
router.get('/:public_id', getVideo)




module.exports = router;