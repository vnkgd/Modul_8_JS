const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', function () {
    // тело обработчика
    console.log('Двойной клик с алерт');
    alert('Метод алерт для вывода сообщения в веб консоль');
    // конец тела обработчика
})

const galert = document.querySelector('#galert');
galert.addEventListener('click', function () {
    // тело обработчика
    console.log('Двойной клик с alert Пример alert');
    alert('Метод alert для вывода сообщения в веб консоль Пример alert');
    // конец тела обработчика
})

const gprompt = prompt('Метод prompt для вывода сообщения в веб консоль');
gprompt.addEventListener('click', function () {
    // тело обработчика
    console.log('Двойной клик с prompt');
    // prompt('Метод prompt для вывода сообщения в веб консоль');


    // конец тела обработчика
})