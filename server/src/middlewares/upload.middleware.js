import multer from "multer";

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 150 * 1024 * 1024, // 150 MB
  },
});
