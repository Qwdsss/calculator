function checker() {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let who = document.getElementById("selection").value;

    if (name == null || name.length < 3) {
        alert("Ваше имя должно быть не менее 3 символов");
    }

    else if (age < 14 || age > 30) {
        alert("Ваш возраст должен быть не менее 14 или не более 30");
    }

    else if (who != "student") {
        alert("Вход только для студентов");
    }
    else {
        alert("Успех")
        window.location = "file:///C:/Users/artem/.vscode/project/js3/index1.html"
    }
}