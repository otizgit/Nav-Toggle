const hamburger = document.querySelector(".hamburger")
const links = document.querySelector("nav ul")
const li = document.querySelectorAll("nav ul li")

hamburger.addEventListener("click", function() {
    links.classList.toggle("active-nav")
    li.forEach(function(listItems) {
        listItems.classList.toggle("show-lists")
    })
    this.classList.toggle("active-ham")
})