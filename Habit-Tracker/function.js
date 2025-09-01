var AddHabitBtn = document.getElementById('AddBtn');
var AddListPage = document.getElementById('Habit-Input');
var ConfirmHabitBtn = document.getElementById('ConfirnBtn');
var InputHabit = document.getElementById('Input');
var ListOfHabits = document.getElementById('List');
AddHabitBtn.addEventListener("click", function () {
    AddListPage.classList.remove("Hidden");
    AddListPage.classList.add("Show");
    InputHabit.focus();
});
ConfirmHabitBtn.addEventListener("click", function () {
    var text = InputHabit.value.trim();
    if (text === "") {
        return;
    }
    var li = document.createElement('li');
    li.textContent = text;
    ListOfHabits.appendChild(li);
    AddListPage.classList.add("Hidden");
    AddListPage.classList.remove("Show");
});
