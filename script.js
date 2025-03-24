// Получаем элементы
const input1 = document.querySelectorAll('.input')[0];
const input2 = document.querySelectorAll('.input')[1];
const buttons = document.querySelectorAll('.buttons button');

// Функции для операций
const calculate = (operation) => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Пожалуйста, введите числа!");
        return;
    }

    let result;
    switch (operation) {
        case 'Yig`indi':
            result = num1 + num2;
            break;
        case 'Ayirma':
            result = num1 - num2;
            break;
        case 'Ko`paytma':
            result = num1 * num2;
            break;
        case 'Bo`linma':
            if (num2 === 0) {
                alert("На ноль делить нельзя!");
                return;
            }
            result = num1 / num2;
            break;
    }

    alert(`Результат: ${result}`);
};

// Привязываем события к кнопкам
buttons.forEach(button => {
    button.addEventListener('click', () => calculate(button.id));
});
