const newExerciseForm = async (event) => {
    event.preventDefault();
  
    const exercise_set = document.querySelector('#exercise-set').value.trim();
    const exercise_reps = document.querySelector('#exercise_reps').value.trim();
    const exercise_weight = document.querySelector('#exercise_weight').value.trim();
    const workout_id = document.querySelector('#workout_id').value.trim();
  
    if (exercise_set && exercise_reps && exercise_weight && workout_id) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ exercise_set, exercise_reps, exercise_weight, workout_id }),
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
  .addEventListener('submit', newExerciseForm);