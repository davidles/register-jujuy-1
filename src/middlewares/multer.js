const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: ( req, file, cb ) =>{
        const pathFolder = path.join( __dirname,'..', '..', 'public', 'images');

        cb(null,  pathFolder)
    },

    filename: ( req, file, cb) =>{
        const newName = 'avatar-' + Date.now() + path.extname(file.originalname);

        cb(null, newName)
    }
})

const upload = multer({ storage })

module.exports = upload;