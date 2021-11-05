const assignDayBtn = document.querySelector("#assignDayBtn");
const exerciseNameButton = document.querySelector("#exerciseNameButton");

assignDayBtn.addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('assignDayForm').style.display = "block";
    assignDayBtn.style.display ="none";
});

exerciseNameButton.addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('hiddenForm').style.display ="block";
    exerciseNameButton.style.display = "none";
});

const addExerciseForm = async (event) => {
    event.preventDefault();
  
    const exercise_name = document.querySelector('#exercise_name').value.trim();
    const exercise_set = document.querySelector('#exercise_set').value.trim();
    const exercise_reps = document.querySelector('#exercise_reps').value.trim();
    const exercise_weight = document.querySelector('#exercise_weight').value.trim();
    const workout_id = document.querySelector('h1').getAttribute("id");
    console.log(workout_id);
  
    if (exercise_name && exercise_set && exercise_reps && exercise_weight && workout_id) {
      const response = await fetch(`/api/exercise`, {
        method: 'POST',
        body: JSON.stringify({ exercise_name, exercise_set, exercise_reps, exercise_weight, workout_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create workout');
      }
    }
  };

  document
  .querySelector('#addExerciseForm')
  .addEventListener('submit', addExerciseForm);
