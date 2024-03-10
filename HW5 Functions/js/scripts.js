
// Создай функцию calculateSquare(), которая будет принимать значение из поля ввода и выводить квадрат этого числа в
// элемент с классом result. Например, если введено число 5, то функция должна вычислить квадрат числа 5 (25) и вывести
// результат в элемент с классом result ("Результат: 25").


function calculateSquare() {
    let value1 = +document.querySelector(".input-1").value;
    let result = value1 * value1;
    // console.log(result);
    document.querySelector('.result-1').innerText = `Результат: ${result}`;
}


// Создай функцию checkEvenOdd(), которая будет принимать значение из поля ввода и выводить сообщение о том,
// является ли число четным или нечетным. Если число четное, то функция должна вывести сообщение "Число <значение> является четным",
// а если число нечетное, то сообщение "Число <значение> является нечетным". Например, если введено число 7, то функция должна
// вывести сообщение "Число 7 является нечетным".

function checkEvenOdd(){
    let num = +document.querySelector(".input-2").value;
    let result 

    if (num % 2 === 0) {
        result = `Число ${num} является четным`;
    } else {
        result = `Число ${num} является нечетным`;
    }
    // result = num % 2 === 0 ? `Число ${num} является четным` : `Число ${num} является нечетным`
document.querySelector(".result-2").innerText = result;
}


// Уровень 2

// Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
// его размер на 50 (w+ = 50, h + = 50). Если в результате очередного клика размер изображения превышает 500, то во время всех
// последующих кликов уменьшайте размер изображения на 50.:

let img = document.querySelector(".gallery > img");
let width = 200;
let height = 200;
let isEnlarge = true;

function zoom() {
    if (isEnlarge) {
        if (width + 50 <= 500 && height + 50 <= 500) {
            width += 50;
            height += 50;
            img.style.width = width + "px";
            img.style.height = height + "px";
        } else {
            isEnlarge = false;
        }
    } else {
        if (width > 200 && height > 200) {
            width -= 50;
            height -= 50;
            img.style.width = width + "px";
            img.style.height = height + "px";
        } else {
            isEnlarge = true;
        }
    }
}


// ЗАДАЧА 2      

//Я не смогла ее решить сама, но и решение ИИ не до конца работает, 
//Пыталась понять, где недописано. Так что задача не сдала по сути.


// Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
// а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.


// После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
// Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.


// Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
// то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
// Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.


// Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
// то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".


// 2 уровень сложности: 

// Создаем функцию getSum() для подсчета общей стоимости выбранных курсов в каждом модуле
function getSum() {
    // Получаем все модули
    const modules = document.querySelectorAll('.modul');
    let totalSum = 0;

    // Итерируемся по каждому модулю
    modules.forEach(module => {
        // Получаем выбранный продукт и его цену
        const product = module.querySelector('.product').value.split('_');
        const price = parseFloat(product[0]);
        // Получаем количество выбранных курсов
        const count = parseInt(module.querySelector('.count').value);
        // Вычисляем сумму за выбранные курсы в текущем модуле
        const sum = price * count;
        // Добавляем сумму к общей стоимости
        totalSum += sum;
        // Отображаем сумму за выбранные курсы в текущем модуле
        module.querySelector('.sum-result').textContent = `$${sum}`;
    });

    // Возвращаем общую стоимость выбранных курсов
    return totalSum;
}

// Создаем функцию getAllSum() для подсчета общей стоимости всех выбранных курсов и применения скидки при необходимости
function getAllSum() {
    // Получаем общую стоимость выбранных курсов
    const totalSum = getSum();
    const discountThreshold = 3000;
    let finalSum = totalSum;

    // Проверяем, превышает ли общая стоимость порог для скидки
    if (totalSum > discountThreshold) {
        const discount = 0.3; // 30% скидка
        // Вычисляем сумму скидки
        const discountAmount = totalSum * discount;
        // Вычисляем окончательную сумму с учетом скидки
        finalSum = totalSum - discountAmount;
        // Отображаем сообщение с окончательной суммой и скидкой
        document.querySelector('.allSum-result').textContent = `Уважаемый студент, вы должны заплатить $${totalSum}, но вы получаете 30% скидку, и окончательная сумма составляет $${finalSum}`;
    } else {
        // Отображаем сообщение с общей стоимостью без скидки
        document.querySelector('.allSum-result').textContent = `Уважаемый студент, вы должны заплатить $${totalSum}`;
    }
}