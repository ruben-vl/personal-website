toggles = document.querySelectorAll(".toggle");
toggles.forEach(toggle => toggle.addEventListener("click", () => toggleClick(toggle)))

search_icon = document.querySelector("#search-icon");
search_icon.addEventListener("click", () => toggleTogglesVisibility());

function toggleClick(target) {
    target.classList.toggle("highlighted");
}

function toggleTogglesVisibility() {
    document.body.classList.toggle("hide-toggle");
}