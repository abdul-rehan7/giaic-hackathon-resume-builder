function updateName(): void {
  // Get the user input values
  const userNameInput = (
    document.getElementById("user-input") as HTMLInputElement
  ).value;
  const userEmailInput = (
    document.getElementById("user-email") as HTMLInputElement
  ).value;
  const userPhoneInput = (
    document.getElementById("user-phone") as HTMLInputElement
  ).value;
  const userEducationInput = (
    document.getElementById("user-Education") as HTMLInputElement
  ).value;
  const userExperienceInput = (
    document.getElementById("user-Experience") as HTMLInputElement
  ).value;

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
  const userResume = document.querySelector(".resume") as HTMLElement;
  userResume.style.display = "block";

  // Update the name and email in the resume
  const nameParagraph = document.getElementById("name") as HTMLParagraphElement;
  nameParagraph.textContent = userNameInput;

  const emailParagraph = document.getElementById(
    "email"
  ) as HTMLParagraphElement;
  emailParagraph.textContent = userEmailInput;

  const userPhone = document.getElementById("phone") as HTMLParagraphElement;
  userPhone.textContent = userPhoneInput;

  const userEdu = document.getElementById("user-edu") as HTMLParagraphElement;
  userEdu.textContent = userEducationInput;
  const userExp = document.getElementById("user-exp") as HTMLParagraphElement;
  userExp.textContent = userExperienceInput;

  // Get the input element and its value
  const inputElement = document.getElementById(
    "skillsInput"
  ) as HTMLInputElement;
  const skillsInput = inputElement.value;

  // Split the input into an array of skills
  const skillsArray = skillsInput
    .split(",")
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0);

  // Get the list element
  const listElement = document.getElementById("skillsList") as HTMLUListElement;

  // Clear previous list items
  listElement.innerHTML = "";

  // Create and append list items for each skill
  skillsArray.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    listElement.appendChild(listItem);
  });
}
