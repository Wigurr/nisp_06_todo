function dodaj(event) {
    event.preventDefault();

    const input = document.getElementById("task_setup");
    const textToAdd = input.value;

    if (textToAdd.trim() === "") return;

    const li = document.createElement("li");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
        li.classList.toggle("done", checkbox.checked);
    });

    // tekst
    const span = document.createElement("span");
    span.textContent = textToAdd;

    // przycisk USUŃ
    const button = document.createElement("button");
    button.textContent = "Usuń";

    button.addEventListener("click", function () {
        li.remove(); // usuwa konkretny element li
    });

    // składanie elementu
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    document.getElementById("task-list").appendChild(li);

    input.value = "";
}