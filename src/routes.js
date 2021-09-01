const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');

const router = Router();

// Authentication
router.post('/login', AuthController.index);
router.get('/user', AuthController.user);
router.post('/logout', AuthController.logout);

// Usuários
router.get('/usuarios', UserController.index);
router.get('/usuarios/:id', UserController.show);
router.post('/usuarios', UserController.store);
router.put('/usuarios/:id', UserController.update);
router.delete('/usuarios/:id', UserController.delete);

module.exports = router;
