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