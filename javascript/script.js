const menu = document.querySelector("#menu")
const navbar = document.querySelector("#navbar")

menu.onclick = () => {
    if (navbar.classList.contains("display")) {
        navbar.classList.remove("display")
        menu.innerHTML = "close"
    } else {
        navbar.classList.add("display")
        menu.innerHTML = "menu"
    }
}