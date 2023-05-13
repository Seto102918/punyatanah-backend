const express = require("expire");
const Controller = require("../controllers/controller");

const router = express.Router();

router.get("/test", Controller.test);

module.exports = test;
