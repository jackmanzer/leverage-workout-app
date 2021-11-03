const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/auth');
const exphbs = require('express-handlebars');



const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



// {
// "workout_name": "chest day,"
// "user_id": 1
// }


// {
//   "exercise_name": 'bench',
//   "exercise_set": 1,
//   "exercise_reps": 2,
//   "exercise_weight": 3,
//   "workout_id": 1
// }

// {
//   "exercise_name": 'squats',
//   "exercise_set": 1,
//   "exercise_reps": 2,
//   "exercise_weight": 3,
//   "workout_id": 1
// }



