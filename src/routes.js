const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

const router = Router();

// Usuários
router.get('/usuarios', UserController.index);
router.get('/usuarios/:id', UserController.show);
router.post('/usuarios', UserController.store);
router.put('/usuarios/:id', UserController.update);
router.delete('/usuarios/:id', UserController.delete);

module.exports = router;
