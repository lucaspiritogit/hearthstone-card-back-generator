require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');

app.use(express.static(__dirname + '/public'));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

  app.get('/hsInfo', async(req, res) => {
    const fetchApi = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
      }
    })
    
    const hsInfoResponse = await fetchApi.json();
    res.json(hsInfoResponse);
    console.log(hsInfoResponse);
  }

);


app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});


// npm run dev