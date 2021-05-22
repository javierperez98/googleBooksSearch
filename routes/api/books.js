const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").get(booksController.findAll);

router.post(booksController.create);

router.delete(booksController.remove);

module.exports = router;
