const utils = require("../utils");
const { cloudinaryUploadImage } = utils.cloudinary;
const fs = require("fs");

const uploadProfilePicture = async (req, res, email, path, user) => {
  try {

    const { url } = await cloudinaryUploadImage(path);
    if (!url) {
      return res.status(400).json({ error: "Failed to upload image" });
    }
    fs.unlinkSync(path);

    const updateLink = await user.findOneAndUpdate(
      { email: email },
      { imageUrl: url},
      { new: true, projection: { password: 0 } },
    );


    if (!updateLink) {
      return res.status(400).json({ error: "Failed to upload image" });
    }


    return res.status(200).json({ message: "Image uploaded successfully", user: updateLink});
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(err.message);
  }
};


module.exports = { uploadProfilePicture };