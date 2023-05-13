const express = require("express");
const routes = require("./router");

const router = app.use("/", router);
const main = app.use("/test", router);

module.exports = main;
