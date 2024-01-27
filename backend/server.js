const express = require("express")
require("dotenv").config()
const kitapRoute = require("./routes/kitaplar")
const adminRoute = require("./routes/admin")
const mongoose = require("mongoose")


const app = express();


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Veritabanı bağlandı");

        app.listen(process.env.PORT, () => {
            console.log(`${process.env.PORT}.port dinleniyor`)
        })
    })
    .catch(err => {
        console.log(err)
    })
app.use("/api/admin",adminRoute)
app.use("/api/kitaplar", kitapRoute)