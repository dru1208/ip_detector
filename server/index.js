const express = require("express")
const app = express()
const PORT = 3000

app.set('trust proxy', true)

app.get("/", (req, res) => {
  const ip = req.ip
  res.send("Hello World")
})

app.listen(PORT, () => console.log(`Server is active through port ${PORT}`))