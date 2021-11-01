const User = require('./User');
const Workout = require('./Workout');
const Exercise = require('./Exercise');

Workout.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

User.hasMany(Workout, {
    foreignKey: 'user_id'
});
  
Workout.hasMany(Exercise, {
    foreignKey: 'workout_id'
})
  
Exercise.belongsTo(Workout, {
    foreignKey: 'workout_id'
})
  
module.exports = { User, Workout, Exercise};