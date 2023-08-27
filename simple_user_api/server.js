
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const UserInfo = require("./userSchema.js")

const app = express()
const port = 8000
dotenv.config()
app.use(express.json())


const Db_Url = process.env.MongoDb_url

mongoose.connect(Db_Url).then((data, err) => {
    if (err) throw err
    else {
        console.log("DB is connected")
    }
})

app.get("/users", async (req, res) => {
    try {
        const data = await UserInfo.find()
        res.send({ data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "user information is getting" });
    }
})

app.post("/users", async (req, res) => {
    try {
        await UserInfo.create(req.body)
        res.send("Data is Added Successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "user data is not posted" });
    }
})

app.patch("/update/:id", async (req, res) => {
    try {
        await UserInfo.findByIdAndUpdate(req.params.id, req.body);
        res.send("Updated Successfully")
    } catch (error) {
        console.log(error)
    }
})

app.delete("/users/:id", async (req, res) => {
    try {
        await UserInfo.findByIdAndDelete(req.params.id)
        res.send("Deleted Successfully")
    } catch (error) {
        console.log(error)
    }

})


app.listen(port, () => {
    console.log(`server is conneceted ${port}`)
})