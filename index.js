const fs = require('fs');
const multer = require('multer');
const express = require('express');
const { MongoClient } = require('mongodb');
const excelToJson = require('convert-excel-to-json');


const app = express();
const url = "mongodb://localhost:8000/";
const uploadDirectory = `${__dirname}/uploads/`;


// Use multer to upload files
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, uploadDirectory)
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const filename = `${file.fieldname}-${timestamp}-${file.originalname}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });

//Define API endpoints for file uploads
app.post('/api/v1/uploadfile', upload.single("uploadfile"), async (req, res) => {
    const filePath = `${uploadDirectory}${req.file.filename}`;
    try {
        const excelData = excelToJson({
            sourceFile: filePath,
            sheets: [
             {
                name: '<Name of the excel sheet file goes here>',
                header: { rows: 1 },
                columnToKey: {
                    A: '<_id>',
                    B: '<name>',
                    C: '<address>',
                    D: '<age>'
                }
            }
        ]
    });

    console.log(excelData);

    const client = await MongoClient.connect(url, { useNewUrlParser: true});
    const db = client.db('exceldb');
    const result = await db.collection('<collection name we wish to access>').insertMany(excelData);
    console.log(`Number of documents inserted: ${result.insertedCount}`);

    client.close();
    fs.unlinkSync(filePath);
    res.json({ msg: 'File successfully uploaded', file: req.file });
} catch (err) {
    console.error('Error uploading file: ', err);
    res.status(500).json({ error: 'File upload failed' });
}
});

// Create a Server connection
const server = app.listen(8000, () => {
    const { address, port } = server.address();

    console.log(`App is listening on http://${address}:${port}`);
});

// start();

// const start = async () => {
//     try {
//         await connectDB(process.env.MONGO_URL)
//         app.listen(port, console.log(`Server running on port: ${port}...`));
//         // User.insertMany(dataUser);
//     } catch (error) {
//         console.log(error)
//     }
// };