"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills");
    const skillsSection = document.getElementById("skills");
    toggleButton.addEventListener("click", () => {
        if (skillsSection.style.display === "block") {
            skillsSection.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
        else {
            skillsSection.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        }
    });
});
