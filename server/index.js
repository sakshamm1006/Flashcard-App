const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/auth")
const deckRoutes = require("./routes/decks")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/decks", deckRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Flashcard API is running!" })
})

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
})
  .then(() => {
    console.log("MongoDB connected!")
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000")
    })
  })
  .catch((err) => {
    console.log("MongoDB failed, starting without DB...")
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000 (no DB)")
    })
  })