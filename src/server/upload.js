const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }
    const uploadFile = req.files.file;
    const fileName = req.files.file.name;
    uploadFile.mv(`./public/files/${fileName}`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({
            file: `public/files/${req.files.file.name}`,
        })
    });
})

module.exports = router;