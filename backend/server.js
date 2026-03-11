const express = require("express");

const axios = require("axios");
const cors = require("cors");
const mongoose = require ("mongoose");

const app = express();
app.use(express.json());
require('dotenv').config();
app.use(cors());
const PORT = process.env.PORT

app.listen(PORT, ()=>{
  
    console.log('Server running on port'+ PORT)
})