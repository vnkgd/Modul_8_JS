
magiclink.addEventListener('click', function (event) {
    // тело обработчика
    userTextField = document.querySelector('#magiclink');
    userText = prompt('Метод prompt для вывода сообщения в веб консоль');
    userTextField.textContent = userText;
    console.log('Он реально поверил, что это фокус, а это всего лишь функция textContent :-)');
    event.preventDefault();
    // конец тела обработчика
    
})
