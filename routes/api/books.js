const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").get(booksController.findAll).post(booksController.create);

router.delete("/:id", booksController.remove);

module.exports = router;
