const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");
var FormData = require('form-data');
var axios = require('axios');


var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

console.log(__dirname)

console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/analysis', async (req, res) => {
    console.log('/analysis invoked')
    let url = req.query.url
    console.log(url)
    try{
        let result = await axios.get(
            `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`
        );
        console.log(result.data)
        let { score_tag, agreement, subjectivity, confidence, irony } = result.data
        res.send({ score_tag, agreement, subjectivity, confidence, irony })

    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
    // fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`)
    // .then(response => ({
    //     status: response.status, 
    //     body: response.json()
    // }))
    // .then(({ status, body }) => console.log(status, body))
    // .catch(error => console.log('error', error));


    // const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    // formdata.append("url", url);
    // formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    // const requestOptions = {
    // method: 'POST',
    // body: formdata,
    // redirect: 'follow'
    // };

    // const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    // .then(response => ({
    //     status: response.status, 
    //     body: response.json()
    // }))
    // .then(({ status, body }) => console.log(status, body))
    // .catch(error => console.log('error', error));

})
