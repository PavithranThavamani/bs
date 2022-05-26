const express = require("express");
const router = express.Router();
const BookModel = require("../model/BookModel");
const bookControllers = require("../controllers/BookControllers");

router.get("/", bookControllers.getAllBooks);
router.post("/", bookControllers.addBooks);
router.get("/:id", bookControllers.getById);
router.put("/:id", bookControllers.updateBooks);
router.delete("/:id", bookControllers.deleteBooks);

module.exports = router;
