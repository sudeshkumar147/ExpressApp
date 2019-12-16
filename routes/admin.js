const express = require('express');
const router = express.Router();

const LoginController = require('../app/Controller/Admin/Auth/LoginController');
const RegisterController = require('../app/Controller/Admin/Auth/RegisterController');
const DashboardController = require('../app/Controller/Admin/DashboardController');
const TagController = require('../app/Controller/Admin/TagController');
const MenuController = require('../app/Controller/Admin/MenuController');
const CategoryController = require('../app/Controller/Admin/CategoryController');
const MapController = require('../app/Controller/Admin/MapController');
router.get('/', DashboardController.index);
router.get('/login', LoginController.index);

router.get('/register', RegisterController.index);

router.post('/register',RegisterController.register)

router.get('/dashboard', DashboardController.index);

router.get('/tag', TagController.index);

router.get('/tag-delete/:id',TagController.destroy);

router.get('/tag-edit/:id',TagController.edit);

router.post('/tag-update/:id', TagController.update);

router.get('/tag-create', TagController.create);

router.post('/tag-save',TagController.store);

router.get('/menu',MenuController.index);

router.get('/menu-create',MenuController.create);

router.post('/menu-save',MenuController.store);

router.get('/menu-delete/:id', MenuController.destroy);

router.get('/category',CategoryController.index);

router.post('/category-save',CategoryController.store);

router.get('/map',MapController.index);
router.post('/map-save',MapController.store);

module.exports = router;
