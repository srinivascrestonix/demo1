const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');
const skillsController = require('../controllers/skillsController');
const projectsController = require('../controllers/projectsController');
const contactController = require('../controllers/contactController');

router.get('/profile', profileController.getProfile);
router.get('/skills', skillsController.getSkills);
router.get('/projects', projectsController.getProjects);
router.post('/contact', contactController.submitContact);

module.exports = router;
