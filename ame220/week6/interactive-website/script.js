
let greetingMessage = document.getElementById("greetingMessage");

document
    .getElementById("greetingButton")
    .addEventListener("click", function(event) {

        greetingMessage.innerHTML =
            "You are doing better than you think. Keep going! ♡";

    });



document
    .getElementById("taskInput")
    .addEventListener("focus", function(event) {

        document.getElementById("taskMessage").innerHTML =
            "Let's make today a productive one!";

        document.getElementById("taskInput").style.backgroundColor =
            "#292137";

    });


document
    .getElementById("photoCard")
    .addEventListener("mouseover", function(event) {

        document.getElementById("photoCard").style.borderColor =
            "#d69be9";

        document.getElementById("photoCard").style.backgroundColor =
            "#30233e";

        document.querySelector("#photoCard .hover-message").style.opacity =
            "1";

    });

document
    .getElementById("photoCard")
    .addEventListener("mouseout", function(event) {

        document.getElementById("photoCard").style.borderColor =
            "#443052";

        document.getElementById("photoCard").style.backgroundColor =
            "#211a30";

        document.querySelector("#photoCard .hover-message").style.opacity =
            "0";

    });



document
    .getElementById("themeButton")
    .addEventListener("click", function(event) {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            document.getElementById("themeButton").innerHTML =
                "☾ Switch to dark mode";

        } else {

            document.getElementById("themeButton").innerHTML =
                "☀ Switch to light mode";

        }

    });



document
    .getElementById("addTask")
    .addEventListener("click", function(event) {

        let taskInput = document.getElementById("taskInput");
        let taskList = document.getElementById("taskList");

        if (taskInput.value.trim() != "") {

            let newTask = document.createElement("li");

            newTask.innerHTML =
                `<span>${taskInput.value}</span>
                <button class="delete-button">Remove</button>`;

            taskList.appendChild(newTask);

            taskInput.value = "";

            document.getElementById("taskMessage").innerHTML =
                "One little step at a time. ♡";

            newTask
                .querySelector(".delete-button")
                .addEventListener("click", function(event) {

                    newTask.remove();

                });

        } else {

            document.getElementById("taskMessage").innerHTML =
                "Please write a task first!";

        }

    });

