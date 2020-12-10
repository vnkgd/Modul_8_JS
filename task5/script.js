
document.addEventListener('keydown', function() {
    input = document.querySelector('input');
    duplicateField.textContent = input.value;
});

let button = document.querySelector('button');

button.onclick = function (event) {
    input = document.querySelector('input');
    console.log(input.value);
    duplicateField.textContent = "";
    input.value = "";
    event.preventDefault();
}

// Создайте страницу с формой, где есть поле ввода, кнопка отправки и текстовый блок с id duplicateField. 
// При вводе текста в поле ввода (input) текст должен дублироваться в текстовый блок с id duplicateField.

// При нажатии кнопки «‎Вывести текст в консоль и удалить из формы»‎ текст, написанный в input, 
// должен быть выведен в консоли, а поле ввода и duplicateField должны быть очищены.

// В этой задаче у вас три элемента, с которыми вы работаете: поле ввода, кнопка и текстовый блок duplicateField.
// Также у вас два события-элемента, с которыми вы работаете: нажатие клавиши на клавиатуре для поля ввода и нажатие левой клавиши мыши для кнопки.

// Для изменения текста в текстовом блоке используйте свойство textContent.
// Для получения текста из input и очистки значения в input используйте свойство value.
// Пустая строка в JS обозначается как две кавычки — "" или ''.
// Для сброса поведения кнопки отправки формы используйте preventDefault().