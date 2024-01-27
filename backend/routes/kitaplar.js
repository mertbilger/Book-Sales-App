const express = require("express")
const { kitapEkle, kitaplarGetir, kitapSil } = require("../controllers/kitapController")




const router = express.Router()

router.get("/",kitaplarGetir)

router.post("/", kitapEkle);

router.delete("/:id", kitapSil)

module.exports = router; 