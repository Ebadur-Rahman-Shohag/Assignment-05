document.getElementById("discover").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "main.html";
});

const buttonList = document.querySelectorAll("#complete-btn");
const headerList = document.querySelectorAll("#header");
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function (event) {
        event.preventDefault();
        alert("Board updated Successfully");
        const totalTask = document.getElementById("total-task").innerText;
        const incompletedTask =
            document.getElementById("incompleted-task").innerText;
        const updatedIncompletedTask = Number(incompletedTask) - 1;
        const updatedTotalTask = Number(totalTask) + 1;
        if (updatedIncompletedTask === 0) {
            alert("congrates!!! You have completed all the current task");
        }

        // set updatedIncompletedTask and updatedTotalTask
        document.getElementById("total-task").innerText = updatedTotalTask;
        document.getElementById("incompleted-task").innerText =
            updatedIncompletedTask;
        const header =
            this.parentElement.parentElement.querySelector("h2").innerText;

        //Get the current time
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        let ampm;
        if (hours >= 12) {
            ampm = "PM";
        } else {
            ampm = "AM";
        }
        const convertedHours = hours % 12 || 12;

        const time = `${convertedHours}:${minutes}:${seconds} ${ampm}`;

        // set the history list
        document.getElementById(
            "history-container"
        ).innerHTML += `<div class="bg-bg-primary p-4 rounded-lg">
        <p class="font-normal text-base text-text-secondary">
        You have Complete The Task ${header} at ${time}
        </p>
        </div>`;

        this.disabled = true;
        this.classList.add("bg-gray-300");
        this.classList.add("text-gray-500");
    });
}

// clear the history
document
    .getElementById("clear-history-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("history-container").innerHTML = "";
    });


// dynamic background color
document
    .getElementById("color-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
