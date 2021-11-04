const addWorkoutFormHandler = async (event) => {
    event.preventDefault();
  
    const workout_name = document.querySelector('#workoutInput').value.trim();
   
  
    if (workout_name) {
      const response = await fetch(`/api/workout`, {
        method: 'POST',
        body: JSON.stringify({ workout_name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        alert('Failed to create workout');
      }
    }
  };



  document
  .querySelector('#addWorkoutForm')
  .addEventListener('submit', addWorkoutFormHandler);