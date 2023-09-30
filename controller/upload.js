const cloudinary = require('../utils/cloudinary');

const uploadVideo = async (req, res) => {
    try {
        // Upload the video
        const result = await cloudinary.uploader.upload(req.file.path, {resource_type: "auto", use_filename: true});
        console.log(result);
        return res.status(200).json({
            success: true,
            message: "Video uploaded successfully",
            public_id: result.public_id,
            video_url: result.url
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: `Error: ${error.message}`
        })
    }
}

module.exports = { uploadVideo }