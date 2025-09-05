var AddHabitBtn = document.getElementById('AddBtn');
var AddListPage = document.getElementById('Habit-Input');
var ConfirmHabitBtn = document.getElementById('ConfirnBtn');
var InputHabit = document.getElementById('Input');
var ListOfHabits = document.getElementById('List');
var ProgressBar = document.getElementById('Progresssss');
var ProgressText = document.getElementById('Progress-Text');
AddHabitBtn.addEventListener("click", function () {
    AddListPage.classList.remove("Hidden");
    AddListPage.classList.add("Show");
    InputHabit.focus();
});
var Counter = 0;
var ItemDone = 0;
var TotalProgress = 0;
ConfirmHabitBtn.addEventListener("click", function () {
    var text = InputHabit.value.trim();
    if (text === "")
        return;
    Counter++;
    TotalProgress++;
    var li = document.createElement('li');
    li.innerHTML = "\n        <div id=\"Task-Container\">\n            Task ".concat(Counter, " : ").concat(text, "  \n            <div> <button class=\"remove-btn Uncliked\">Complete Btn</button>\n            <button Class=\"RemoveBtn2\">Remove Task Btn</button></div>\n           \n        </div>\n    ");
    var Clicked = false;
    var removeBtn = li.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
        if (!Clicked) {
            removeBtn.classList.remove("Uncliked");
            removeBtn.classList.add("Clicked");
            ItemDone++;
        }
        else {
            removeBtn.classList.remove("Clicked");
            removeBtn.classList.add("Uncliked");
            ItemDone--;
        }
        // update progress bar
        var ProgressMetric = (ItemDone / TotalProgress) * 100;
        ProgressBar.style.width = ProgressMetric + "%";
        ProgressText.innerHTML = "".concat(ProgressMetric.toPrecision(4), " % Done");
        if (ProgressMetric < 0) {
            ProgressText.innerHTML = "Calculation error";
        }
        else if (ProgressMetric > 100) {
            ProgressText.innerHTML = "Calulcation error";
        }
        Clicked = !Clicked;
    });
    var Clicked2 = false;
    var DeleteTaskBtn = li.querySelector(".RemoveBtn2");
    DeleteTaskBtn.addEventListener("click", function () {
        if (!Clicked2) {
            li.remove();
            ItemDone--;
            TotalProgress--;
            if (TotalProgress < 0) {
                TotalProgress = 0;
            }
            if (ItemDone < 0) {
                ItemDone = 0;
            }
        }
    });
    ListOfHabits.appendChild(li);
    AddListPage.classList.add("Hidden");
    AddListPage.classList.remove("Show");
    InputHabit.value = "";
});
