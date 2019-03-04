/**  Post new  food
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} othername
 * @param {string} email
 * @param {string} password
 * @param {string} confirmpass
 * @param {string} passportUrl
 * @param {string} phoneNumber
 * @return {string} error message
 * @public
 */

const basePath = "https://dry-journey-38911.herokuapp.com/api/v1";
const signupForm = document.getElementById("signupForm");

const signup = e => {
  e.preventDefault(e);
  const getFormName = document.forms.signupForm;
  const password = getFormName.password.value;
  const confirmpass = getFormName.confirmpass.value;
  const firstname = getFormName.firstname.value;
  const lastname = getFormName.lastname.value;
  const othername = getFormName.othername.value;
  const email = getFormName.email.value;
  const passportUrl = getFormName.passportUrl.value;
  const phoneNumber = getFormName.phoneNumber.value;
  const showNotification = document.getElementById("notifyUser");

  let headers = new Headers();
  fetch("https://dry-journey-38911.herokuapp.com/api/v1/auth/signup", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      firstname,
      lastname,
      othername,
      email,
      password,
      confirmpass,
      passportUrl,
      phoneNumber
    })
  })
    .then(response => response.json())
    .then(result => {
      if (result.status !== 201) {
        console.log(result);
        showNotification.style.display = "block";
        showNotification.style.color = "red";
        showNotification.style.width = "100%";
        showNotification.innerHTML = result.error;
        setInterval(() => {
          showNotification.style.display = "none";
        }, 5000);
      } else {
        localStorage.token = result.data[0].token;
        showNotification.style.color = "#49d789";
        showNotification.style.display = "block";
        showNotification.style.width = "100%";
        showNotification.innerHTML = "Account creation successful";
        setTimeout(() => {
          window.location.replace("index.html");
        }, 5000);
      }
    })
    .catch(err => console.log(err));
};

signupForm.addEventListener("submit", signup, false);
