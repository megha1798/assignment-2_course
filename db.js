const mongoose = require('mongoose');
const MONGOURI = "mongodb+srv://task1:task1@cluster0.arvu99o.mongodb.net/test";

const InitiateMongoServer = async() =>{

try{
	await mongoose.connect(MONGOURI,{

		useNewUrlParser: true,
    	useUnifiedTopology: true
	});

console.log("Connected to DB!");
}
catch(e){
	console.log(e);
	throw e;
}

};

module.exports = InitiateMongoServer;

