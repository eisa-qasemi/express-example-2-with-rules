const express = require('express');
const router = express.Router();

// Import route modules
const homeRoutes = require('./home');
const aboutRoutes = require('./about');
const contactRoutes = require('./contact');
const apiRoutes = require('./api');

// Use route modules
router.use('/', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/contact', contactRoutes);
router.use('/api', apiRoutes);
module.exports = router; 