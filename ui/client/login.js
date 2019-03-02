/**  Post user login
 * @param {string} email
 * @param {string} password
 * @return {string} error message
 * @public
 */

const loginForm = document.getElementById("myLoginForm");

const login = e => {
  e.preventDefault(e);
  const getFormName = document.forms.myLoginForm;
  const password = getFormName.password.value;
  const email = getFormName.email.value;
  const showNotification = document.getElementById("notifyUserLogin");

  let headers = new Headers();
  fetch("https://dry-journey-38911.herokuapp.com/api/v1/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(result => {
      if (result.status !== 200) {
        showNotification.style.display = "block";
        showNotification.style.color = "red";
        showNotification.style.width = "100%";
        showNotification.innerHTML = result.error;
        setInterval(() => {
          showNotification.style.display = "none";
        }, 5000);
      } else {
        localStorage.token = result.data.token;
        showNotification.style.color = "#49d789";
        showNotification.style.display = "block";
        showNotification.style.width = "100%";
        showNotification.innerHTML = "Login successful";
        setTimeout(() => {
          window.location.replace("index.html");
        }, 5000);
      }
    })
    .catch(err => console.log(err));
};

loginForm.addEventListener("submit", login, false);
