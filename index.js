const express = require('express');
const path = require('path');
const axios = require('axios');
var cors = require('cors');
const { response } = require('express');

const app = express();
const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'front','dist/front')));
app.use(cors());

app.get('/health', (req,res) => {
  res.json({'message':'it is healthy!'});
})

app.listen(PORT, ()=>{
  console.log(`Server on ${PORT}`);
})
