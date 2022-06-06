// Connect to the database
require('dotenv').config();
require('./config/database');

const email = 'therog@mail.com'
// Require the Mongoose models
const User = require('./models/user');
const Note = require('./models/note');
// const Category = require('./models/category');
// const Order = require('./models/order');


// Local variables will come in handy for holding retrieved documents
let user, note, notebook, tag;
let users, notes, notebooks, tags;

user = await User.findOne({email: email});