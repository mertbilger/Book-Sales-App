const mongoose = require("mongoose")

const Sema = mongoose.Schema

const kitapSema = Sema({

    baslik: {
        type: String,
        required: [true,"Alanların Doldurulması Zorunludur"]
    },
    aciklama: {
        type: String,
        required: [true,"Alanların Doldurulması Zorunludur"]
    },
    yazar: {
        type: String,
        required: [true,"Alanların Doldurulması Zorunludur"]
    },
    fotoUrl: {
        type: String,
        required: [true,"Alanların Doldurulması Zorunludur"]
    }
}, {
    timestamps: true

})

module.exports=mongoose.model("book",kitapSema)