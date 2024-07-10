const express = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const utils = require("../utils");
const { uploadImage } = utils.multer;
const { authMiddleware } = middlewares.auth;
const driverController = controllers.driverController;

const router = express.Router();


router
  .post("/driver/sign-up", driverController.driverSignUp)
  .post("/driver/log-in", driverController.driverLogIn)
  .put("/driver/upload-license", authMiddleware, uploadImage.single("image"), driverController.uploadLicense)
  .get("/driver/check-verification-status", authMiddleware, driverController.checkVerificationStatus)
  .put("/driver/allow-location-tracking", authMiddleware, driverController.allowLocationTracking)
  .put("/driver/upload-profile-image", authMiddleware, uploadImage.single("image"), driverController.uploadProfileImage);

module.exports = router;
