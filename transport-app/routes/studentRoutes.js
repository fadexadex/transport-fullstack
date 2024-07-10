const express = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const utils = require("../utils");
const { uploadImage } = utils.multer;
const { authMiddleware } = middlewares.auth;
const studentController = controllers.studentController;

const router = express.Router();

router
  .post("/student/sign-up", studentController.studentSignUp)
  .post("/student/log-in", studentController.studentLogin)
  .get("/student/find-drivers", authMiddleware, studentController.findDrivers)
  .put("/student/upload-profile-image", authMiddleware, uploadImage.single("image"), studentController.uploadProfileImage);

module.exports = router;
