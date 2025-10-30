const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.router("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)

router.router("/favorite")
    .get(contacts.findAllFavorite)

router.router("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;