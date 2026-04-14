function add(event) {
    event.preventDefault();

    const input = document.getElementById("task-input");
    const textToAdd = input.value;

    if (textToAdd.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = textToAdd;

    document.getElementById("task-list").appendChild(li);

    input.value = "";
}