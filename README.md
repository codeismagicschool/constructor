# constructor
Создать сайт-конструктор сайтов
Данные с конструктора собираются с формы и по кнопке “создать” - из собранных данных собирается веб страничка путём сета суммарной строки разметки (пример ниже) - через innerHTML в текущий body текущей страницы
! Не забудьте дать базовые классы генерируемой странице и основные стили чтобы выглядело более-менее нормально при генерации.

файл разметки:
<body>
    <main>
        <img src="img/logo.png" id="logo">
        <h1>Конструктор сайта</h1>
        <h2>Выберите параметры для создания вашего сайта:</h2>
        <form class="constructor" id="constructor" name="constructor">
            <div class="section">
                <p>Название</p>
                <input class="title" type="text" name="title" id="title" size="65" placeholder="MySite">
            </div>
            <div class="section">
                <p>Слоган</p>
                <input class="title" type="text" name="description" id="description" size="65" placeholder="Welcome to my site!">
            </div>
            <div class="section">
                <input type="button" name="submit" id="submit" value="Отправить" onClick="getData();">
            </div>
        </form>
    </main>
</body>


файл скрипта:
function getData() {
	  		var htmlPage;

	  		var titleValue = title.value;
	  		var descritpionValue = descritpion.value;

	  		htmlPage = "<h1>" + titleValue + "</h1>";
htmlPage += "<p>" + descritpionValue + "</p>";

	  		document.body.innerHTML = htmlPage;
	  	}
пример работы с чекбоксами:

// создание строки пунктов меню
var list = document.constructor.list; // получение данных с UI
var listItems = [];
var li = "";
// перебираем циклом массив (список) всех checked инпутов
    for (var i = 0; list[i]; ++i) {
        if (list[i].checked) {
            listItems[i] = list[i].value;
            li += '<li><a href="#">' + listItems[i] + '</a></li>';
        }
    }

var ul = "<ul>" + li + "</ul>" // можно создавать переменные со строками тегов

пример работы с цветом:
// получаем и сетим цвет (достаем из инпута type=”color”)

var colorTheme = document.constructor.colorTheme.value; // цветовая тема
var colorText = document.constructor.colorText.value; // цвет текста

document.body.style.backgroundColor = colorTheme;

p = '<p class = "paragraph" style="color:' + colorText + '">' + mainText + '</p>'

htmlPage += p; // можно создавать страницу создавая строки заранее, а потом в правильном порядке их конкатинировать


пример работы с “Да” и “Нет” радиокнопками:
// проверка необходимости ввода текста - используем данные с radio кнопок
// этот код пишется вне функции getData() 
// потому что он должен срабатывать на интерфейcе при конфигурации страницы

var mainTextAddY = document.getElementById("mainTextAddY"); 
// получаем значение кнопки “Да”
var mainTextAddN = document.getElementById("mainTextAddN");  
// получаем значение кнопки “Нет”
var mainText = document.getElementById("mainText");  
// получаем значение textarea тег и меняем ему атрибут disabled:

mainTextAddY.onclick = function() {
    mainText.removeAttribute("disabled");
}
mainTextAddN.onclick = function() {
    mainText.setAttribute("disabled", "disabled");
}



