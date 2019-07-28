import { Router } from 'express';
import multer from 'multer';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FIleController';

const routes = new Router();

const upload = multer(multerConfig);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// routes.get('/posts', async (req, res) => {
//   const user = await User.create({
//     name: 'KleytoN Barcelos',
//     email: 'kleytonbarcelos@gmail.com',
//     password_hash: '1231241234',
//   });

//   return res.json(user);
// });

export default routes;
