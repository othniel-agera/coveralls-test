const express = require("express");
const ctrl = require("./ctrl");

const router = express.Router();

router.get("/*", ctrl);

module.exports = router;
