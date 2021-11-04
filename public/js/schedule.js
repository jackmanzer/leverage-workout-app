let workoutNameEl = document.querySelector("#workoutName");

// displayWorkoutTable.append(workoutNameEl);




// const workoutsUl = [];

// function createWorkoutsList() {
// let newWorkoutName = workoutInput.value;
// let createWorkoutButton = document.createElement('button');
// createWorkoutButton.textContent = newWorkoutName;
// workoutsUl.append(workoutNameEl);
// }

//get workout name from database and create list of all workouts appended to UL


const newWorkoutPost = async (event) => {
  event.preventDefault();
  console.log('inside of new workout post function');

  const workoutInput = document.querySelector("#workoutName").value.trim();
  console.log(workoutInput);
  
  if (workoutInput) {
    const response = await fetch('/api/workout', {
      method: "POST",
      body: JSON.stringify({ workout_name: workoutInput, user_id: this.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/schedule");
    } else {
      alert("Failed to create workout");
    }
  }
};

// const newWorkoutPost = async (event) => {
//     event.preventDefault();
//     console.log('second query');
  
//     const workoutInput = document.querySelector("#workoutName").value.trim();
//     console.log(workoutInput);
    
//     if (workoutInput) {
//       const response = await fetch('/api/workout', {
//         method: "GET",
//         body: JSON.stringify({ workout_name }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace("/schedule");
//       } else {
//         alert("Failed to create workout");
//       }
//     }
//   };



document
  .querySelector('.saveBtn')
  .addEventListener('click', newWorkoutPost);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
