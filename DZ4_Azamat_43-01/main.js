///задание №1
var counter1 = document.getElementById('counter');
var increment1 = document.getElementById('increment');
var decrement1 = document.getElementById('decrement');
var counter = 0;

increment1.addEventListener('click', () => {
    counter++;
    func1();
    counter1.style.color = 'green';
});

decrement1.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counter1.style.color = 'red';
        func1();
    }
});

function func1() {
    counter1.textContent = counter;
}


/// задание №3
function changeLight() {
    const color = prompt("Введите цвет (Красный/Зеленый)").toLowerCase();
    const redLight = document.getElementById("red-light");
    const yellowLight = document.getElementById("yellow-light");
    const greenLight = document.getElementById("green-light");
    const message = document.getElementById("message");

    // Сброс всех огней
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");
    message.textContent = "";

    if (color === "красный") {
        redLight.classList.add("active");
        message.textContent = "STOP";
    } else if (color === "зеленый") {
        greenLight.classList.add("active");
        message.textContent = "GO";
    } else {
        alert("Пожалуйста, введите 'красный' или 'зеленый'");
    }
}

