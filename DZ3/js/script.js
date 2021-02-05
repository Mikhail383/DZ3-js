document.write('Задание 1.Выведите числа от 1 до 50 и от 35 до 8.' + '</br>');

for (let i = 1; i <= 50; i++) {
    document.write(i + ' ');
}
for (let i = 35; i >= 8; i--) {
    document.write(i+' ');
}

document.write('</br>' + 'Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга,друга, чтобы получить столбец, а не строку.'+'</br>');

let i = 89;
while (i >= 11) {
    document.write(i+'</br>');
    i--
}

document.write('Задание 3. С помощью цикла найдите сумму чисел от 0 до 100.'+'</br>');

i = 0,
    summ = 0;

while (i <= 100) {
    summ += i;
    i++;
}
document.write(`Сумма чисел ровняется ${summ}.` +'</br>');


document.write('Задание 4.Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).' +'</br>');

for (let i = 1; i <= 5; i++) {
    let summ = 0;
    for (let j = 1; j <= i; j++) {
        summ += j;
    }
    document.write(`В числе ${i} сумма составляет ${summ}.` + '</br>');
}

document.write('Задание 5. Выведите чётные числа от 8 до 56. Решить задание через while и for.' + '</br>');

for (let i = 8; i <= 56; i += 2) {
    document.write(' ' + i);
}
i = 8;
while (i <= 56) {
    if (i%2 == 0) {
        document.write(' ' + i);
    }
    i++;
}

document.write('</br>' + 'Задание 6.Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:' + '</br>');

for (let i = 2; i <= 10; i++) {
   
    for (let j = 1; j <= 10 ; j++) {
        document.write(`${i} * ${j} = ${i*j}` + '</br>');
    }
}

document.write('Задание 7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимыхдля этого (итерация - это проход цикла), и запишите его в переменную num.' + '</br>');

let n = 1000,
num = 0;

while (n >= 50) {
    n /= 2;
    num += 1;
}

document.write(`Выполнение для задачи нужно ${num} итераций` + '</br>');

document.write('Задание 8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь может ввести отрицательное значение.' );

let variable,
    sum = 0,
    attempts = 0;

while (1) {
    variable = prompt('Введите число ');
    if (variable == '0' || variable == '') break;
    variable = parseInt(variable);
    if (isNaN(variable)) {
        alert('Неправильный ввод');
    } else {
        sum += variable;
        attempts += 1;
    }
}

document.write(`Сумма чисел равна: ${sum}. Среднее арифметическое: ${sum} / ${attempts}` + '</br>');

document.write('Задание 9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.');

let string = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    min = Infinity,
    max = 0,
    item = '';
for (let i = 0; string[i] != undefined; i++) {
    if (string[i] == ' ') {
        item = Number(item);
        if ( item > max) {
            max = item;
        }
        if (item < min) {
            min = item;
        }

        item = '';

    } else {
        item += string[i];
    }
}

document.write(`Миниальное число: ${min} <br />`);
document.write(`Максимальное число: ${max} <br />`);


document.write('Задание 10. Дано произвольное целое число n. Написать программу, которая: <br /> a. разбивает число n на цифры и выводит их на экран; <br /> b. подсчитывает сколько цифр в числе n; <br /> c. находит сумму цифр числа n; <br /> d. меняет порядок цифр числа n на обратный. <br />');

let variable10 = prompt("Введите число n"),
    cifrVariable10,
    reversVariable = '',
    numVariable = 0,
    sumCifrVariable = 0;

while (!variable10.trim() || !Number(variable10)) {
    variable10 = prompt("Неверно!");
}
document.write(`a: ${variable10} <br />`);

while (variable10 > 0) {
    cifrVariable10 = variable10%10;
    if (cifrVariable10) numVariable++;
    sumCifrVariable += cifrVariable10;
    reversVariable = reversVariable + String(cifrVariable10);
    variable10 = Math.trunc(variable10/10);
}
document.write(`b: ${numVariable} <br />`);
document.write(`c: ${sumCifrVariable} <br />`);
document.write(`d: ${reversVariable} <br />`);

