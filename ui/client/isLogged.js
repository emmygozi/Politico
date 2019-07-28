/**  Get new  parties
 * @param {string} name
 * @param {string} hqAddress
 * @param {string} logoUrl
 * @return {string} error message
 * @public
 */

const showCandidate = document.getElementById("hideTopicOne");
const showVote = document.getElementById("hideTopicTwo");
const showPetition = document.getElementById("hideTopicThree");
const pushRight = document.getElementById("push-right");
const office = "xxxxxxxxxx",
  candidate = "mmmmmmmmmmm";

fetch("https://dry-journey-38911.herokuapp.com/api/v1/petitions", {
  method: "POST",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-type": "application/json",
    "x-auth-token": localStorage.token
  },
  body: JSON.stringify({ office, candidate })
}).then(res =>
  res
    .json()
    .then(data => {
      if (data.error === "Invalid login details!" || res.status === 401) {
        pushRight.innerHTML = `<a id="reg" href="signup.html">Signup</a>
        <a id="log" href="login.html">Login</a>`;
      } else {
        hideTopicOne.style.display = "block";
        hideTopicTwo.style.display = "block";
        hideTopicThree.style.display = "block";
        hideTopicZero.style.display = "block";
        pushRight.innerHTML = '<a id="out" onclick="logOut();" href="#">Logout</a>';
      }
    })
    .catch(err => console.error(err))
);


  function logOut(){
  localStorage.clear();
  setTimeout(() => {
    window.location.replace("index.html");
  }, 2000);
}
