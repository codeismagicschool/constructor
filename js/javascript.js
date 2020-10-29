var items = 1;

var getData = () => {
            var htmlPage;

            var titleValue = title.value;
            var descriptionValue = description.value;
            var logoUrlValue = logoUrl.value;

            var menu = document.constructor.menu;
            var li = "";
            console.log(menu);

            for(var i=0; i < menu.length; i++) {
                if(menu[i].checked) {
                    li += `<li><a href=#>${menu[i].value}</a></li>`;
                }
            }

            htmlPage = `<img class='logo-constructor' src='${logoUrlValue}' alt=''>`;
            htmlPage += `<h1>${titleValue}</h1>`;
            htmlPage += `<p>${descriptionValue}</p>`;
            htmlPage += `<div><ul>${li}</ul></div>`;

            document.body.innerHTML = htmlPage;
}

var addImg = () => {
    items++;
    newItem = `<input type=\"url\" name=\"item" + ${items} + "\" size=\"100\"  placeholder=\"Введите URL изображения\" class=\"urlSlider\" >`;
    span = document.createElement("span");
    span.innerHTML = newItem;
    gallery.insertBefore(span, btnAddImg);
}

var disableInput = () => {
    if(isGalleryN.value === "No") {
        image1.setAttribute("disabled","disabled")
        btnAddImg.setAttribute("disabled","disabled")
    }
}
var enableInput = () => {
    if(isGalleryY.value === "Yes") {
        image1.removeAttribute("disabled")
        btnAddImg.removeAttribute("disabled")
    }
}
