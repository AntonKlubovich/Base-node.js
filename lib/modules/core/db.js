import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://Evilok999:916916916aA@test.g5ebneg.mongodb.net/?retryWrites=true&w=majority';
function dbConnect(){
  mongoose.connect(connectionString)
    .then(() => console.log('Mongo connection OK'))
    .catch(err => console.log(err));
}

export default dbConnect;