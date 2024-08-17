const multer = require("multer");
const fileStorageEngine = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, "api-img__" + Date.now() + "__" + file.originalname);
    },

});

module.exports.upload = multer({ storage: fileStorageEngine }); 