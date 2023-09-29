const cloudinary = require('../utils/cloudinary');

const uploadVideo = async (req, res) => {
    try {
        // Upload the video
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);
        return res.status(200).json({
            success: true,
            message: "Uploaded!",
            data: result.public_id
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}
const getVideo = async (req, res) => {
    const public_id = req.params.public_id
    try {
        // Get the video by public id
        const result = await cloudinary.api.resource(public_id);
        console.log(result);
        return res.status(200).json({
            message: "found video",
            statusCode: 200,
            data: result.url,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "internal error",
            data: null
        })
    }
};

module.exports = { uploadVideo, getVideo }