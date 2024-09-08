function updateName() {
    // Get the user input values
    var userNameInput = document.getElementById("user-input").value;
    var userEmailInput = document.getElementById("user-email").value;
    var userPhoneInput = document.getElementById("user-phone").value;
    var userEducationInput = document.getElementById("user-Education").value;
    var userExperienceInput = document.getElementById("user-Experience").value;
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
    var userResume = document.querySelector(".resume");
    userResume.style.display = "block";
    // Update the name and email in the resume
    var nameParagraph = document.getElementById("name");
    nameParagraph.textContent = userNameInput;
    var emailParagraph = document.getElementById("email");
    emailParagraph.textContent = userEmailInput;
    var userPhone = document.getElementById("phone");
    userPhone.textContent = userPhoneInput;
    var userEdu = document.getElementById("user-edu");
    userEdu.textContent = userEducationInput;
    var userExp = document.getElementById("user-exp");
    userExp.textContent = userExperienceInput;
    // Get the input element and its value
    var inputElement = document.getElementById("skillsInput");
    var skillsInput = inputElement.value;
    // Split the input into an array of skills
    var skillsArray = skillsInput
        .split(",")
        .map(function (skill) { return skill.trim(); })
        .filter(function (skill) { return skill.length > 0; });
    // Get the list element
    var listElement = document.getElementById("skillsList");
    // Clear previous list items
    listElement.innerHTML = "";
    // Create and append list items for each skill
    skillsArray.forEach(function (skill) {
        var listItem = document.createElement("li");
        listItem.textContent = skill;
        listElement.appendChild(listItem);
    });
    document.addEventListener("DOMContentLoaded", function () {
        var toggleButton = document.getElementById("toggle-skills");
        toggleButton.addEventListener("click", function () {
            if (listElement.style.display === "none") {
                listElement.style.display = "block";
                toggleButton.textContent = "Hide Skills";
            }
            else {
                listElement.style.display = "none";
                toggleButton.textContent = "Show Skills";
            }
        });
    });
}
