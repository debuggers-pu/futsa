require("dotenv").config()
const express = require("express")

const app = express();
const PORT = 8000 || process.env.PORT;
  app.listen(PORT, ()=> {
    console.log(`Server ruuning at port : ${PORT}`)
  })