const kitapModel = require("../models/kitapModel")
const KitapModel = require("../models/kitapModel")
const mongoose=require("mongoose")




const kitapEkle = async (req, res) => {

    const { baslik, aciklama, yazar, fotoUrl } = req.body

    try {
        const kitap = await KitapModel.create({ baslik, aciklama, yazar, fotoUrl })
        res.status(200).json(kitap)
    } catch (error) {
        res.status(400).json({ hata: error.message })
    }
}

const kitaplarGetir = async (req, res) => {

    const kitaplar = await kitapModel.find().sort({
        createdAt: -1
    })
    res.status(200).json(kitaplar)
}

const kitapSil = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:"ID Geçersiz"})
    }

    const kitap = await kitapModel.findOneAndDelete({_id:id})
   
    if (!kitap) {
        return res.status(404).json({ hata: "Kitap Bulunamadı" })
    }
   
    res.status(200).json(kitap)
}



module.exports = {
    kitapEkle, kitaplarGetir,kitapSil
}