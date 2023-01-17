import User from './Model.js';

export default function userRegister(req, res) {

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('User Created');
    })
    .catch(() => {
      res.status(400).json('User not Created');
    })
    .finally(() => {
      console.log('END');
    });
}


