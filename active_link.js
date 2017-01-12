// Make link active

var selector = "header nav ul li a";
var elems = document.querySelectorAll(selector);

function makeActive() {
    for (var i = 0; i < elems.length; i++) {
        elems[i].classList.remove("active");
    }
    this.classList.add("active");
}

for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", makeActive);
}