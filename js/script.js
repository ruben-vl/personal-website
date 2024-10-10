toggles = document.querySelectorAll(".toggle");
toggles.forEach(toggle => toggle.addEventListener("click", () => toggleClick(toggle)))

search_icon = document.querySelector("#search-icon");
search_icon.addEventListener("click", () => toggleToggles());

function toggleClick(target) {
    target.classList.toggle("highlighted");
}

function toggleToggles() {
    console.log("Attempting to hide toggles");
    document.body.classList.toggle("hide-toggle");
    // toggles.forEach(toggle => toggle.classList.toggle("hide-toggle"));
}