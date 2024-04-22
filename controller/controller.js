let express = require('express');
let model = require('../models/places');

const insertplace = async function(req, res) {
    let place = req.body;
    return model.insertplace(place);
}

const getAllplaces = async function(req, res) {
    return model.getAllplaces();
}

module.exports = {insertplace, getAllplaces}