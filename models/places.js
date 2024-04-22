let client = require('../dbConnection');
let collection = client.db().collection('places');

async function insertplaces(places){
    return collection.insertOne(places);
}

async function getAllplaces(){
    return collection.find().toArray();
}

module.exports = {insertplaces, getAllplaces}