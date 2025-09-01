const AddHabitBtn = document.getElementById('AddBtn') as HTMLButtonElement;
const AddListPage = document.getElementById('Habit-Input') as HTMLDivElement;
const ConfirmHabitBtn = document.getElementById('ConfirnBtn') as HTMLButtonElement;
const InputHabit = document.getElementById('Input') as HTMLInputElement;
const ListOfHabits = document.getElementById('List') as HTMLUListElement;

AddHabitBtn.addEventListener("click", () => {
    AddListPage.classList.remove("Hidden");
    AddListPage.classList.add("Show");

   InputHabit.focus();
});

ConfirmHabitBtn.addEventListener("click", ()=>{
   const text = InputHabit.value.trim();

   if (text === ""){
    return;
   }

   const li = document.createElement('li');
   li.textContent = text;

   ListOfHabits.appendChild(li);

    AddListPage.classList.add("Hidden");
    AddListPage.classList.remove("Show");
    

})