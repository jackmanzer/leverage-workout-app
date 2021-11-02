const router = require('express').Router();
const { Workout } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const workoutData = await Workout.findAll();
      res.status(200).json(workoutData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
