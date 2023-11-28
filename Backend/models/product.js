const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const filename = path.parse(file.originalname).name + '-' + Date.now() + path.extname(file.originalname);
    cb(null, filename);
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'No file uploaded' });
  }

  res.send({
    message: 'File uploaded successfully',
    filename: req.file.filename
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

