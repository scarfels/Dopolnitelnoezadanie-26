let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));
let operation = prompt("Выберите: +, -, *, /");

switch (operation) {
    case "+":
        alert("Результат: " + (a + b));
        break;
    case "-":
        alert("Результат: " + (a - b));
        break;
    case "*":
        alert("Результат: " + (a * b));
        break;
    case "/":
        if (b === 0) {
            alert("Делить на ноль нельзя");
        } else {
            alert("Результат: " + (a / b));
        }
        break;
    default:
        alert("Неизвестная операция");
}
