const AddHabitBtn = document.getElementById('AddBtn') as HTMLButtonElement;
const AddListPage = document.getElementById('Habit-Input') as HTMLDivElement;
const ConfirmHabitBtn = document.getElementById('ConfirnBtn') as HTMLButtonElement;
const InputHabit = document.getElementById('Input') as HTMLInputElement;
const ListOfHabits = document.getElementById('List') as HTMLUListElement;
const ProgressBar = document.getElementById('Progresssss') as HTMLDivElement;
const ProgressText = document.getElementById('Progress-Text') as HTMLHeadElement;
const UrgencyLevel = document.getElementById('UrgencySelect') as HTMLOptionElement;

AddHabitBtn.addEventListener("click", () => {
    AddListPage.classList.remove("Hidden");
    AddListPage.classList.add("Show");
    InputHabit.focus();
});

let Counter = 0;
let ItemDone = 0;
let TotalProgress = 0;

ConfirmHabitBtn.addEventListener("click", () => {
    const text = InputHabit.value.trim();
    const Urgency = UrgencyLevel.value.trim();
    if (text === "") return;

    Counter++;
    TotalProgress++;

    const li = document.createElement('li');
  li.innerHTML = `
    <div class="Task-Container">
        <h4>Task ${Counter} : ${text}</h4>
        <h5>Urgency Level : ${Urgency}</h5>
        <div>
            <button class="remove-btn Uncliked">Complete Btn</button>
            <button class="RemoveBtn2">Remove Task Btn</button>
        </div>
    </div>
`;
    
    let Clicked = false;
    const removeBtn = li.querySelector(".remove-btn") as HTMLButtonElement;

    removeBtn.addEventListener("click", () => {
        if (!Clicked) {
            removeBtn.classList.remove("Uncliked");
            removeBtn.classList.add("Clicked");
            ItemDone++;
        } else {
            removeBtn.classList.remove("Clicked");
            removeBtn.classList.add("Uncliked");
            ItemDone--;
        }

        // update progress bar
        const ProgressMetric = (ItemDone / TotalProgress) * 100;
        ProgressBar.style.width = ProgressMetric + "%";
        ProgressText.innerHTML = `${ProgressMetric.toPrecision(4)} % Done`
        if (ProgressMetric < 0){
            ProgressText.innerHTML = `Calculation error`;
        } else if (ProgressMetric > 100){
            ProgressText.innerHTML = `Calulcation error`;
        }
        Clicked = !Clicked;
    });

    let Clicked2 = false;
    const DeleteTaskBtn = li.querySelector(".RemoveBtn2") as HTMLButtonElement;



    DeleteTaskBtn.addEventListener("click",()=>{
        if(!Clicked2){
            li.remove();
            ItemDone--;
            TotalProgress--;
            if (TotalProgress < 0){
                
                TotalProgress = 0;
            }

            if (ItemDone < 0){
                ItemDone = 0;
            }
            
        }
    })


    ListOfHabits.appendChild(li);

    AddListPage.classList.add("Hidden");
    AddListPage.classList.remove("Show");
    InputHabit.value = "";
});
