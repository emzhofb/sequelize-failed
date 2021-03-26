const express = require('express');
const routes = express();
const CharaController = require('../controllers/Chara');

let charaController = new CharaController();

// routing home
routes.get('/', charaController.getCharacter);

module.exports = routes;
