const routes = require('express').Router();
const scrap = require('../controllers/scrap');

routes.get('/scrape', scrap);

module.exports = routes;