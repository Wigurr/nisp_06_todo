function dodaj(event) {
    event.preventDefault();

    const input = document.getElementById("task_setup");
    const textToAdd = input.value;

    if (textToAdd.trim() === "") return;

    const li = document.createElement("li");

    // tworzymy checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // reakcja na kliknięcie checkboxa
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    });

    // tekst zadania
    const span = document.createElement("span");
    span.textContent = textToAdd;

    // składamy element
    li.appendChild(checkbox);
    li.appendChild(span);

    document.getElementById("task-list").appendChild(li);

    input.value = "";
}