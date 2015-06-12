var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('*', function(req, res){
  
    console.log('Recieved: ' + JSON.stringify(req.body));
    res.send();
    
});

app.listen(3000);