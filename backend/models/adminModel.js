const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Sema = mongoose.Schema

const adminSema = new Sema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    parola: {
        type: String,
        required: true
    }
})


adminSema.statics.login = async function (email, parola) {
    if (!email || !parola) {
        throw Error('Alanlar boş geçilemez');
    }

    const admin = await this.findOne({ email });

    if (!admin) {
        throw Error('Email bulunamadı');
    }

    const parolaKontrol = await bcrypt.compare(parola, admin.parola);

    if (!parolaKontrol) {
        throw Error('Hatalı parola girdiniz');
    }

    return admin;
};

module.exports = mongoose.model("admin", adminSema)


