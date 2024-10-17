import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import Hospital from "../models/hospital";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import { HospitalType } from "../shared/types";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hospital type is required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price per night is required and must be a number"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Facilities are required"),
  ],
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newHospital: HospitalType = req.body;

      const imageUrls = await uploadImages(imageFiles);

      newHospital.imageUrls = imageUrls;
      newHospital.lastUpdated = new Date();
      newHospital.userId = req.userId;

      const hospital = new Hospital(newHospital);
      await hospital.save();

      res.status(201).send(hospital);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const hospitals = await Hospital.find({ userId: req.userId });
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hospitals" });
  }
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const hospital = await Hospital.findOne({
      _id: id,
      userId: req.userId,
    });
    res.json(hospital);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hospitals" });
  }
});

router.put(
  "/:hospitalId",
  verifyToken,
  upload.array("imageFiles"),
  async (req: Request, res: Response) => {
    try {
      const updatedHospital: HospitalType = req.body;
      updatedHospital.lastUpdated = new Date();

      const hospital = await Hospital.findOneAndUpdate(
        {
          _id: req.params.hospitalId,
          userId: req.userId,
        },
        updatedHospital,
        { new: true }
      );

      if (!hospital) {
        return res.status(404).json({ message: "Hospital not found" });
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      hospital.imageUrls = [
        ...updatedImageUrls,
        ...(updatedHospital.imageUrls || []),
      ];

      await hospital.save();
      res.status(201).json(hospital);
    } catch (error) {
      res.status(500).json({ message: "Something went throw" });
    }
  }
);

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

export default router;
