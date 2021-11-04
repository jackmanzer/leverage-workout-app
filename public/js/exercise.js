const newExerciseForm = async (event) => {
    event.preventDefault();
  
    const exercise_name = document.querySelector('#exercise_name').value.trim();
    const exercise_set = document.querySelector('#exercise_set').value.trim();
    const exercise_reps = document.querySelector('#exercise_reps').value.trim();
    const exercise_weight = document.querySelector('#exercise_weight').value.trim();
    const workout_id = document.querySelector('#workout_id').value.trim();
  
    if (exercise_name && exercise_set && exercise_reps && exercise_weight && workout_id) {
      const response = await fetch(`/api/exercise`, {
        method: 'POST',
        body: JSON.stringify({ exercise_name, exercise_set, exercise_reps, exercise_weight, workout_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/workouts');
      } else {
        alert('Failed to create workout');
      }
    }
  };

  document
  .querySelector('.new-exercise-form')
  .addEventListener('click', newExerciseForm);