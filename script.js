function toggleMode() {
const html = document.documentElement

const img = document.querySelector("#profile img")

if(html.classList.contains("ligth")) {

    html.classList.remove("ligth")

    img.setAttribute("src",'./assets/assets/assets avatar.png')

} else {
    html.classList.add('ligth')
    img.setAttribute('src', "./assets/assets/assets avatar.png")
}





}

