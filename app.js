document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Registration successful! Your data has been stored locally.");
  });

document.addEventListener("DOMContentLoaded", () => {
  let storedUserData = localStorage.getItem("userData");
  let userData = JSON.parse(storedUserData);

  //   console.log(storedUserData);
  //   console.log(userData);

  let userDataDisplay = document.getElementById("userDataDisplay");
  userDataDisplay.innerHTML = `<p><strong>Name:</strong> ${userData.name}</p>
  <p><strong>Email:</strong> ${userData.email}</p>
  <p><strong>Password:</strong> ${userData.password}</p>`;
});
