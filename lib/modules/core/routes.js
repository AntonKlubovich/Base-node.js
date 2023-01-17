import infoRouter from '../info/Routes.js';
import userRouter from '../user/Routes.js';




export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
}