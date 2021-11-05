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

const newExerciseForm = async (event) => {
    event.preventDefault();
  
    const exercise_name = document.querySelector('#exercise_name').value.trim();
    const exercise_set = document.querySelector('#exercise_set').value.trim();
    const exercise_reps = document.querySelector('#exercise_reps').value.trim();
    const exercise_weight = document.querySelector('#exercise_weight').value.trim();
    const workout_id = document.querySelector('#workout_id').value.trim();
  
    if (exercise_name && exercise_set && exercise_reps && exercise_weight && workout_id) {
      const response = await fetch(`/api/projects`, {
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
  .addEventListener('submit', newExerciseForm);

  //grabs submit button on workout page
  // const checkedDaysSubmit = document.querySelector('#daysSubmmitBtn');
  
  // //grabs check boxes from workout page
  // const daySelected = document.querySelector('#monday:checked');
  // const daySelected = document.querySelector('#tuesday:checked');
  // const daySelected = document.querySelector('#wednesday:checked');
  // const daySelected = document.querySelector('#thursday:checked');
  // const daySelected = document.querySelector('#friday:checked');
  // const daySelected = document.querySelector('#saturday:checked');
  // const daySelected = document.querySelector('#sunday:checked');
  
  // //grabs each day card from schedule page
  // const mondayDiv = document.querySelector('#mondayDiv');
  // const mondayDiv = document.querySelector('#tuesdayDiv');
  // const mondayDiv = document.querySelector('#wednesdayDiv');
  // const mondayDiv = document.querySelector('#thursdayDiv');
  // const mondayDiv = document.querySelector('#fridayDiv');
  // const mondayDiv = document.querySelector('#saturdayDiv');
  // const mondayDiv = document.querySelector('#sundayDiv'); 
  
  // checkedDaysSubmit.addEventListener('click', function(){
  //    daySelected ? 
  //   : false;
  // })

  // function getFee(isMember) {
  //   return (isMember ? '$2.00' : '$10.00');
  // }

  const dayCards = document.querySelector('#dayCard');
  

  // <input type='checkbox' onchange='handleChange(this);'> Checkbox

function handleChange(checkbox) {
    if(checkbox.checked == true){
        document.getElementById("submit").removeAttribute("disabled");
    }else{
        document.getElementById("submit").setAttribute("disabled", "disabled");
   }
}