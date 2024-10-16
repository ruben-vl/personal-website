toggles = document.querySelectorAll(".toggle");
toggles.forEach(toggle => toggle.addEventListener("click", () => toggleClick(toggle)))

// search_icon = document.querySelector("#search-icon");
// search_icon.addEventListener("click", () => toggleTogglesVisibility());

content_boxes = document.querySelectorAll(".content-box");

function toggleClick(target) {
    target.classList.toggle("highlighted");
    if (target.classList.contains("highlighted")) {
        addContentHighlighting(target.textContent);
    } else {
        removeContentHighlighting();
        addHighlightingForActiveToggles();
    }
}

function addContentHighlighting(toggleText) {
    content_boxes.forEach(content_box => {
        if (content_box.dataset.toggles.includes(toggleText)) {
            content_box.classList.add("highlighted");
        }
    });
}

function addHighlightingForActiveToggles() {
    toggles.forEach(toggle => {
        if (toggle.classList.contains("highlighted")) {
            addContentHighlighting(toggle.textContent);
        }
    });
}

function removeContentHighlighting() {
    content_boxes.forEach(content_box => content_box.classList.remove("highlighted"));
}

function removeToggleHighlighting() {
    toggles.forEach(toggle => toggle.classList.remove("highlighted"));
}

function toggleTogglesVisibility() {
    document.body.classList.toggle("hide-toggle");
    removeContentHighlighting();
    removeToggleHighlighting();
}


// THEME TOGGLE

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
});