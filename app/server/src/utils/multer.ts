import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req: Express.Request, file: Express.Multer.File, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

export default upload;
