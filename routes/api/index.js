const router = require("express").Router();

const loginController = require("../../controller/logIn");

const placeRoutes = require("./places");

// api routes for user auth
router.route("/signup").post(loginController.signUp);
router.route("/signin").post(loginController.signIn);
router.route("/verify").post(loginController.verify);
router.route("/logout").post(loginController.logout);

router.use("/places", placeRoutes);

module.exports = router;
