const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    const fileSplit = file.originalname.match(/[^\\]*\.(\w+)$/) 
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileSplit[1])
  },
})

const upload = multer({ storage: storage })

module.exports = upload
