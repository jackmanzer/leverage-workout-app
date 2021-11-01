// const router = require('express').Router();
// const { Exercise } = require('../../models'); 


// get all products
// router.get('/', async (req, res) => {
//   // find all products
//   // be sure to include its associated Category and Tag data
//   try {
//     const productData = await Exercise.findAll({ include: [{ model: },{ model: Tag }] });
//     res.status(200).json(productData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//     try {
//       const newExercise = await Exercise.create({
//         ...req.body
//       });
  
//       res.status(200).json(newExercise);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
  
//   router.delete('/:id', async (req, res) => {
//     try {
//       const exerciseData = await Exercise.destroy({
//         where: {
//           id: req.params.id
//         },
//       });
  
//       if (!exerciseData) {
//         res.status(404).json({ message: 'No project found with this id!' });
//         return;
//       }
  
//       res.status(200).json(exerciseData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
  // module.exports = router;