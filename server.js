const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

app.get('/', function(req, res){
	res.sendFile('/index.html', { root: path.join(__dirname, '/app') });
});

app.listen(9000, function(){
	console.log("Server Running On 127.0.0.1 Port " + 9000);
});
