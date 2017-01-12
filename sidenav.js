// Show/hide navbar on a small screen

function showNav(id) {
    var elem = document.getElementById("navbar");
    var navitems = document.querySelectorAll("#navbar li");
    if (elem.className.indexOf("sidenav") === -1) {
        elem.classList.add("sidenav");
        id.innerHTML="&times;";
        id.style.padding = "23px 15px";
        for (var i = 0; i < navitems.length; i++) {
            navitems[i].style.width = "100%";
            navitems[i].style.textAlign = "center";
        }
    } else {
        elem.classList.remove("sidenav");
        id.innerHTML = "&#9776;";
        id.style.padding = "21px 15px";
        for (var i = 0; i < navitems.length; i++) {
            navitems[i].style.width = "auto";
        }
    }
}
