const User = require('./User');
const Workout = require('./Workout');
const Exercise = require('./Exercise');

Workout.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

User.hasMany(Workout, {
    foreignKey: 'user_id'
});
  
Workout.hasMany(Exercise, {
    foreignKey: 'workout_id',
    onDelete: 'CASCADE'
})
  
Exercise.belongsTo(Workout, {
<<<<<<< HEAD
=======
    // through: User,
>>>>>>> 50447cce1d34c842560e1c299f19f2d4cd08a6b4
    foreignKey: 'workout_id'
})
  
module.exports = { User, Workout, Exercise};