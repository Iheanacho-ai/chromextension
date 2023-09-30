const cloudinary = require('../utils/cloudinary');

const uploadVideo = async (req, res) => {
    try {
        // Upload the video
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto", 
            use_filename: true,
            raw_convert: "google_speech"
        });
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

const getTranscribedVideo = async(req, res) => {
    const publicId = req.params.public_id
    try {
        //get the transcribed video from cloudinary using the video's public id
        const result = await cloudinary.video(publicId, {transformation: [
            {overlay: {resource_type: "subtitles", public_id: `${publicId}.transcript`}},
            {flags: "layer_apply"}
        ]})
        
        // return the transcribed video in an html tag 
        return res.status(200).json({
            success: true,
            message: "Video retrieved successfully",
            data: result
        });
        //console.log any error
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: `Error: ${error.message}`
        })
    }
}

module.exports = { uploadVideo, getTranscribedVideo }