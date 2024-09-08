"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf;
function updateName() {
    // Get the user input values
    const userNameInput = document.getElementById("user-input").value;
    const userEmailInput = document.getElementById("user-email").value;
    const userPhoneInput = document.getElementById("user-phone").value;
    const userEducationInput = document.getElementById("user-Education").value;
    const userExperienceInput = document.getElementById("user-Experience").value;
    // Check if name is entered; if not, show an alert or return
    if (!userNameInput.trim()) {
        alert("Please enter your name");
        return; // Prevent resume generation
    }
    // Optionally, you can also check the email field if it's required
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
    // Get the resume section and show it
    const userResume = document.querySelector(".resume");
    userResume.style.display = "block";
    // Update the name and email in the resume
    const nameParagraph = document.getElementById("name");
    nameParagraph.textContent = userNameInput;
    const emailParagraph = document.getElementById("email");
    emailParagraph.textContent = userEmailInput;
    const userPhone = document.getElementById("phone");
    userPhone.textContent = userPhoneInput;
    const userEdu = document.getElementById("user-edu");
    userEdu.textContent = userEducationInput;
    const userExp = document.getElementById("user-exp");
    userExp.textContent = userExperienceInput;
    // Get the input element and its value
    const inputElement = document.getElementById("skillsInput");
    const skillsInput = inputElement.value;
    // Split the input into an array of skills
    const skillsArray = skillsInput
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);
    // Get the list element
    const listElement = document.getElementById("skillsList");
    // Clear previous list items
    listElement.innerHTML = "";
    // Create and append list items for each skill
    skillsArray.forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        listElement.appendChild(listItem);
    });
    function downloadResume() {
        const downloadBtn = document.getElementById("download-resume");
        downloadBtn?.addEventListener("click", function () {
            // Get the resume element
            const resumeElement = document.querySelector(".container");
            if (resumeElement) {
                const opt = {
                    margin: 1,
                    filename: "Resume.pdf",
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                };
                // Use html2pdf to generate and download the PDF
                html2pdf().from(resumeElement).set(opt).save();
            }
            else {
                alert("Resume element not found!");
            }
        });
        // Activates the download button
    }
    downloadResume();
}
