const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");
const path = require("path");

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folder = "SIH 3.0"; // default folder
    if (file.fieldname === "ideaPPT") folder = "ideaPPTs";
    if (file.fieldname === "consentLetter") folder = "consentLetters";
    if (file.fieldname === "paymentScreenshot") folder = "paymentScreenshots";

    const isImage = file.mimetype.startsWith("image/");
    const extension = path.extname(file.originalname); // e.g. .pdf, .pptx
    const baseName = path.basename(file.originalname, extension);

    return {
      folder,
      public_id: `${baseName}_${req.body.teamName}_${req.body.leaderName}_${Date.now()}${extension}`, // keep extension
      resource_type: isImage ? "image" : "raw",
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
