const express = require('express');
const app = express();

app.get('/', (req,res) =>{
  res.send("Welcome to my hompage");
});

app.listen(3000, () => {
  console.log("Wazzapppppppp");
});
