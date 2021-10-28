const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');
const AuthCompanyController = require('./app/controllers/AuthCompanyController');

const CompanyController = require('./app/controllers/CompanyController');

const RoadMapController = require('./app/controllers/RoadMapController');

const CategoryEquipController = require('./app/controllers/CategoryEquipController');
const EquipController = require('./app/controllers/EquipController');

const CategoryProjectController = require('./app/controllers/CategoryProjectController');
const ProjectController = require('./app/controllers/ProjectController');

const CategoryCursoController = require('./app/controllers/CategoryCursoController');
const CursoController = require('./app/controllers/CursoController');




const router = Router();

// Authentication
router.post('/login', AuthController.index);
router.get('/user', AuthController.user);
router.post('/logout', AuthController.logout);

// Authentication Company
router.post('/login-company', AuthCompanyController.index);
router.get('/user-company',  AuthCompanyController.user);
router.post('/logout-company',  AuthCompanyController.logout);

// Usuários
router.get('/usuarios', UserController.index);
router.get('/usuarios/:id', UserController.show);
router.post('/usuarios', UserController.store);
router.put('/usuarios/:id', UserController.update);
router.delete('/usuarios/:id', UserController.delete);

// Empresas
router.get('/empresas', CompanyController.index);
router.get('/empresas/:id', CompanyController.show);
router.post('/empresas', CompanyController.store);
router.put('/empresas/:id', CompanyController.update);
router.delete('/empresas/:id', CompanyController.delete);

// Categoria de Equipamentos
router.get('/categorias_equipamento', CategoryEquipController.index);
router.get('/categorias_equipamento/:id', CategoryEquipController.show);
router.post('/categorias_equipamento', CategoryEquipController.store);
router.put('/categorias_equipamento/:id', CategoryEquipController.update);
router.delete('/categorias_equipamento/:id', CategoryEquipController.delete);

// Equipamentos
router.get('/equipamentos', EquipController.index);
router.get('/equipamentos/:id', EquipController.show);
router.post('/equipamentos', EquipController.store);
router.put('/equipamentos/:id', EquipController.update);
router.delete('/equipamentos/:id', EquipController.delete);

// Categoria de Projetos
router.get('/categorias_projeto', CategoryProjectController.index);
router.get('/categorias_projeto/:id', CategoryProjectController.show);
router.post('/categorias_projeto', CategoryProjectController.store);
router.put('/categorias_projeto/:id', CategoryProjectController.update);
router.delete('/categorias_projeto/:id', CategoryProjectController.delete);

// projetos
router.get('/projetos', ProjectController.index);
router.get('/projetos/:id', ProjectController.show);
router.post('/projetos', ProjectController.store);
router.put('/projetos/:id', ProjectController.update);
router.delete('/projetos/:id', ProjectController.delete);

// roteiros
router.get('/roteiros', RoadMapController.index);
router.get('/roteiros/:id', RoadMapController.show);
router.post('/roteiros', RoadMapController.store);
router.put('/roteiros/:id', RoadMapController.update);
router.delete('/roteiros/:id', RoadMapController.delete);

// categoria de cursos
router.get('/categorias_curso', CategoryCursoController.index);
router.get('/categorias_curso/:id', CategoryCursoController.show);
router.post('/categorias_curso', CategoryCursoController.store);
router.put('/categorias_curso/:id', CategoryCursoController.update);
router.delete('/categorias_curso/:id', CategoryCursoController.delete);

// categoria de cursos
router.get('/cursos', CursoController.index);
router.get('/cursos/:id', CursoController.show);
router.post('/cursos', CursoController.store);
router.put('/cursos/:id', CursoController.update);
router.delete('/cursos/:id', CursoController.delete);

module.exports = router;
