let express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/', async function(req, res) {
    let result = await controller.insertplace(req,res);
    res.json({statusCode: 201, message: 'success', data: result});
});

router.get('/', async function(req, res){
    let result = await controller.getAllplaces(req,res);
    res.json({statusCode: 200, message: 'success', data: result});
});

module.exports = router;