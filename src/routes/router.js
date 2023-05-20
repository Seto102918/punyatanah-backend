const express = require("express");
const Controller = require("../controllers/controller");
const UserController = require("../controllers/UserController");
const TanahController = require("../controllers/TanahController");


const router = express.Router();

//testing
router.get("/", Controller.helloWorld);
router.get("/test", Controller.test);


//user
router.post("/user/registerNewUser", UserController.registerNewUser);
router.post("/user/login", UserController.login);




//tanah
router.get("/tanah/getListTanah", TanahController.getListTanah);


module.exports = router;
