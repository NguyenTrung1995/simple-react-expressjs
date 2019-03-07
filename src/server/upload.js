const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();

router.post('/', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let uploadFile = req.files.file
    const fileName = req.files.file.name
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // const sampleFile = req.files.sampleFile;
    // console.log(sampleFile);
    // Use the mv() method to place the file somewhere on your server
    uploadFile.mv(`${__dirname}/public/files/${fileName}`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }
        // res.send('File uploaded!');
        res.json({
            file: `public/${req.files.file.name}`,
        })
    });
})

module.exports = router;