let name = document.getElementById('name');
let mail = document.getElementById('mail');
let submit = document.getElementById('submit');

submit.addEventListener("click", () => {
    alert(
        "Name: " + name.value + "\n" +
        "E-mail: " + mail.value + "\n" +
        "Registration successful..."
    )
})

