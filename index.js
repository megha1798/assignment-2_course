const express = require('express');



const app = express();
var courses = require('./api/models/todoListModel'),
bodyParser = require('body-parser');
const InitiateMongoServer = require("./db");

InitiateMongoServer();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
	extended:true
}));

app.use(express.json());

var routes = require('./api/routes/todoListRoutes');//importing route
routes(app);//register the route

// app.get("/",function(req,res) => {

// 	res.send({message:"API is working fine"});
// });

app.listen(PORT);