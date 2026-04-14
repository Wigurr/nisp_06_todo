function dodaj(event) {
    event.preventDefault();

    const input = document.getElementById("task_setup");
    const textToAdd = input.value;

    if (textToAdd.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = textToAdd;

    document.getElementById("task-list").appendChild(li);

    input.value = "";
}