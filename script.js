"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf;

function updateName() {
    // Get input values
    const userNameInput = document.getElementById("user-input").value;
    const userEmailInput = document.getElementById("user-email").value;
    const userTitleInput = document.getElementById("user-title").value;
    const userPhoneInput = document.getElementById("user-phone").value;
    const userEducationInput = document.getElementById("user-Education").value;
    const userExperienceInput = document.getElementById("user-Experience").value;
    
    // Validate inputs
    if (!userNameInput.trim()) {
        alert("Please enter your name");
        return;
    }
    if (!userEmailInput.trim()) {
        alert("Please enter your Email");
        return;
    }
    if (!userPhoneInput.trim()) {
        alert("Please enter your Phone");
        return;
    }
    if (!userEducationInput.trim()) {
        alert("Please enter your Education");
        return;
    }

    // Show resume section
    const userResume = document.querySelector(".resume");
    userResume.style.display = "block";

    // Update resume with input data
    const nameParagraph = document.getElementById("name");
    nameParagraph.textContent = userNameInput;

    const titleParagraph = document.getElementById("user-title");
    titleParagraph.textContent = userTitleInput;

    const emailParagraph = document.getElementById("email");
    emailParagraph.textContent = userEmailInput;

    const userPhone = document.getElementById("phone");
    userPhone.textContent = userPhoneInput;

    const userEdu = document.getElementById("user-edu");
    userEdu.textContent = userEducationInput;

    const userExp = document.getElementById("user-exp");
    userExp.textContent = userExperienceInput;

    // Process skills input
    const inputElement = document.getElementById("skillsInput");
    const skillsInput = inputElement.value;
    const skillsArray = skillsInput
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);

    const listElement = document.getElementById("skillsList");
    listElement.innerHTML = "";
    skillsArray.forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        listElement.appendChild(listItem);
    });

    // Handle resume download
    function downloadResume() {
        const downloadBtn = document.getElementById("download-resume");
        downloadBtn?.addEventListener("click", function () {
            const resumeElement = document.querySelector(".container");
            if (resumeElement) {
                const opt = {
                    margin: 0,
                    filename: "Resume.pdf",
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                };
                html2pdf().from(resumeElement).set(opt).save();
            } else {
                alert("Resume element not found!");
            }
        });
    }
    downloadResume();

    // Make resume sections editable
    function makeSectionsEditable() {
        const editableElements = document.querySelectorAll("[contenteditable='true']");
        editableElements.forEach((element) => {
            element.addEventListener("input", () => {
                const elementId = element.id;
                const updatedContent = element.textContent?.trim() || "";
                console.log(`Updated ${elementId}: ${updatedContent}`);
            });
        });
    }

    // Wait for content to load and make it editable
    document.addEventListener("DOMContentLoaded", () => {
        makeSectionsEditable();
    });

    // Generate a shareable link with the user’s name
    function generateShareableLink() {
        const userName = document.getElementById("name")?.textContent;
        if (userName?.trim()) {
            const encodedName = encodeURIComponent(userName.trim());
            const currentUrl = window.location.href.split('?')[0];
            const shareableLink = `${currentUrl}?user=${encodedName}`;
            // Display the shareable link
            const linkElement = document.getElementById("shareable-link");
            if (linkElement) {
                linkElement.innerHTML = `<a href="${shareableLink}" target="_blank">${shareableLink}</a>`;
            }
        } else {
            alert("Please enter a valid username.");
        }
    }
    document.getElementById("generate-link-btn")?.addEventListener("click", generateShareableLink);
}
