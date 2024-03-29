const router = require('express').Router();
const UserService = require('../services/UserService');
const TarefaService = require('../services/TarefaService');
const objectFilter = require('../middlewares/object-filter');
const userValidate = require('../middlewares/user-validator');

const {
  loginMiddleware,
  notLoggedIn,
  verifyJWT,
} = require('../middlewares/auth-middlewares');

router.post('/create',
  objectFilter('body', ['name', 'email', 'password', 'interesses', 'periodo', 'materias']),
  userValidate('create'),
  async (req, res, next) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        interesses: req.body.interesses,
        periodo: req.body.periodo,
        materias:req.body.materias,
      };

      await UserService.createUser(user);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
});

router.post('/createUser',
  objectFilter('body', ['name', 'email', 'password', 'interesses', 'periodo', 'materias']),
  userValidate('createUser'),
  async (req, res, next) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        interesses: req.body.interesses,
        periodo: req.body.periodo,
        materias: req.body.materias,
      };

      await UserService.createUser(user);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
});

router.get('/getUsers',
  verifyJWT,
  async (req, res, next) => {
    try {
      const users = await UserService.getAllUsers();
    
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
});

router.get('/getUser/:id',
  verifyJWT,
  async (req, res, next) => {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
});

router.get('/myAccount',
  verifyJWT,
  async (req, res, next) => {
    try {
      const currentUserId = req.user.id;
      const user = await UserService.getUserById(currentUserId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
});

router.get('/getTarefaInfo/:tarefaId',
  verifyJWT,
  async (req, res, next) => {
    try {
      const tarefa = await TarefaService.getTarefaById(req.params.tarefaId); // object
      const info = tarefa //ANTES ERA UMA LISTA

      res.status(200).json(info);
    } catch (error) {
      next(error);
    }
});

router.put('/updateUser/:id',
  verifyJWT,
  userValidate('updateUser'),
  async (req, res, next) => {
    try {
      await UserService.updateUser(req.params.id, req.body, req.user.id);
      // id do usuário a ser atualizado, body, id do usuário que está logado,
      res.status(200).end();
    } catch (error) {
      next(error);
    }
});

router.post(
  '/login', notLoggedIn, userValidate('login'), loginMiddleware,
);

router.get('/logout', verifyJWT, (req, res, next) => {
  try {
    res.clearCookie('jwt');
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/delete/:id',
  verifyJWT, 
  async (req, res, next) => {
    try {
      await UserService.deleteUser(req.params.id, req.user.id);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  },
);

router.post('/sendMail',
  objectFilter('body', ['email']),
  userValidate('sendEmail'),
  async (req, res, next) => {
    try {
      const email = req.body.email;
      const user = await UserService.getUserByEmail(email);
      const code = await UserService.sendEmail(user.email);
      await UserService.updatePassword(user, code);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
});

module.exports = router;