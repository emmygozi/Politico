/**  Post user login
 * @param {string} email
 * @return {string} error message
 * @public
 */

const resetCompleteForm = document.getElementById("resetCompleteForm");

const resetComplete = e => {
  e.preventDefault(e);
  const getFormName = document.forms.resetCompleteForm;
  const email = getFormName.email.value;
  const token = getFormName.token.value;
  const resetpassword = getFormName.password.value;
  const showNotification = document.getElementById("notifyUserResetComplete");

  let headers = new Headers();
  fetch("https://dry-journey-38911.herokuapp.com/api/v1/auth/resetcomplete", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ email, token, resetpassword })
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
        showNotification.style.color = "#49d789";
        showNotification.style.display = "block";
        showNotification.style.width = "100%";
        showNotification.innerHTML = "Password sucessfully changed!";
        setTimeout(() => {
          window.location.replace("login.html");
        }, 7000);
      }
    })
    .catch(err => console.log(err));
};

resetCompleteForm.addEventListener("submit", resetComplete, false);
