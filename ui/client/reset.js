/**  Post user login
 * @param {string} email
 * @return {string} error message
 * @public
 */

const resetForm = document.getElementById("resetForm");

const reset = e => {
  e.preventDefault(e);
  const getFormName = document.forms.resetForm;
  const email = getFormName.email.value;
  const showNotification = document.getElementById("notifyUserReset");

  let headers = new Headers();
  fetch("https://dry-journey-38911.herokuapp.com/api/v1/auth/reset", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ email })
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
        showNotification.innerHTML = "Check mail for token";
        setTimeout(() => {
          window.location.replace("resetpasswordcomplete.html");
        }, 7000);
      }
    })
    .catch(err => console.log(err));
};

resetForm.addEventListener("submit", reset, false);
