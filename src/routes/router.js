const express = require("express");
const Controller = require("../controllers/controller");
const UserController = require("../controllers/UserController");


const router = express.Router();

router.get("/", Controller.helloWorld);
router.get("/test", Controller.test);
router.post("/user/registerNewUser", UserController.registerNewUser);

module.exports = router;
