// let workoutDisplayEl = document.querySelector("workout-display");
const workoutInput = documents.querySelector('#workoutName').value;

function displayWorkoutTable() {
    let workoutNameEl = document.querySelector("#workoutName");

    displayWorkoutTable.append(workoutNameEl);
}



// const workoutsUl = [];

function createWorkoutsList() {
    let newWorkoutName = workoutInput.value;
    let createWorkoutButton = document.createElement('button');
    createWorkoutButton.textContent = newWorkoutName;
    workoutsUl.append(workoutNameEl);
}

//get workout name from database and create list of all workouts appended to UL


const newWorkoutPost = async (event) => {
    event.preventDefault();
  
    const workoutInput = documents.querySelector('#workoutName').value;

    
    if (workoutInput) {
        const response = await fetch(`/api/workoutRoutes`, {
          method: 'POST',
          body: JSON.stringify(workoutInput),
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

