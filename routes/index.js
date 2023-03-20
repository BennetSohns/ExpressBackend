var express = require('express');
const axios = require('axios');
var router = express.Router();



router.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  let posts = [
      {
          caption: "Gold",
          location: "San F"
      },
      {
          caption: "Silver",
          location: "Berlin"
      }
  ]
  response.send(posts)
})

router.get('/data', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    let input = request.query.input

    axios.post('https://finetuning-esg-sentime-9fefozeg.germanywestcentral.inference.ml.azure.com/score', {inputs: input},
    {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fxvn9ugdm66eRboPRhlH3u6Zw8N1qCCe',
        }
    }).then ( responses => {
        console.log('response: ', responses["data"])
        response.send(responses["data"])
    })
    .catch(function (error){
        console.log(error);
    });
})

module.exports = router;
