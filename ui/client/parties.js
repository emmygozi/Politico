/**  Get new  parties
    * @param {string} name
    * @param {string} hqAddress
    * @param {string} logoUrl
    * @return {string} error message
    * @public
   */

  /* function changeFunction() {

    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    for (i=0; i<selectedValue.length; i++){
        console.log(selectedValue);
    }
    } */
    let getMyOfiice = document.getElementById('hiddencandidate');
    let selectHome =`<select class="candidate-selection" name="office" id="selectBox" >
                    <option>Name</option>`;
                    let selectEnd=`</select>`;

                    let mycandidate = document.getElementById('hiddenoffice');
                    let selectCandidateHome =`<select class="candidate-selection" name="candidate" id="selectBox" >
                                    <option>Select Candidate</option>`;
                                    let selectCandidateEnd=`</select>`;

  const getMenuAdmin = (e) => {
    e.preventDefault();

    const notify = document.getElementById('notifyParties');
  
  
    fetch('https://dry-journey-38911.herokuapp.com/api/v1/parties', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-auth-token': localStorage.token
      },
    })
      .then(res => res.json()
        .then((data) => {

          if (res.status !== 200) {
            notify.style.color = 'rgb(106, 197, 106)';
            notify.style.display = 'block';
            notify.innerHTML = 'Error loading page';
            setTimeout(() => {
              window.location.replace('index.html');
            }, 2000);
          }
          if (res.status === 200) {
              console.log(data.data[0]);
            data.data.forEach((aCandidate) => {
                console.log(aCandidate);
              getMyOfiice += `
              
              <option value="${aCandidate.candidate}">${aCandidate.name}</option>`;
            });
          }

          document.getElementById('hiddencandidate').innerHTML = selectHome + getMyOfiice + selectEnd;
        })
        .catch(err => console.error(err)));


        
    fetch('https://dry-journey-38911.herokuapp.com/api/v1/offices', {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-type': 'application/json',
          'x-auth-token': localStorage.token
        },
      })
        .then(res => res.json()
          .then((data) => {
  
            if (res.status !== 200) {
              notify.style.color = '#ff0000';
              notify.style.display = 'block';
              notify.innerHTML = 'Error loading page';
              setTimeout(() => {
                window.location.replace('index.html');
              }, 2000);
            }
            if (res.status === 200) {
                console.log(data.data[0]);
              data.data.forEach((aCandidate) => {
                  console.log(aCandidate);
                mycandidate += `
                
                <option value="${aCandidate.id}">${aCandidate.name}</option>`;
              });
            }
  
            document.getElementById('hiddenoffice').innerHTML = selectCandidateHome + mycandidate + selectCandidateEnd;
          })
          .catch(err => console.error(err)));
  };
  



  window.onload = getMenuAdmin ;

  /**  Post user login
 * @param {string} office
 * @param {string} candidate
 * @return {string} error message
 * @public
 */

const myVoteForm = document.getElementById("voteForm");

const login = e => {
  e.preventDefault(e);
  const getFormName = document.forms.voteForm;
  const candidate = getFormName.candidate.value;
  const office = getFormName.office.value;
  const notify = document.getElementById('notifyParties');

  console.log(office + candidate);

  let headers = new Headers();
  fetch("https://dry-journey-38911.herokuapp.com/api/v1/votes", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
      'x-auth-token': localStorage.token
    },
    body: JSON.stringify({ office, candidate })
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      if (result.status !== 200) {
        notify.style.display = "block";
        notify.style.color = "red";
        notify.style.width = "100%";
        notify.innerHTML = result.error;
        setInterval(() => {
          notify.style.display = "none";
        }, 5000);
      } if(result.status === 201) {
        console.log('works');
        notify.style.color = "#49d789";
        notify.style.display = "block";
        notify.style.width = "100%";
        notify.innerHTML = "Login successful";
        setTimeout(() => {
          window.location.replace("index.html");
        }, 5000);
      }
    })
    .catch(err => console.log(err));
};

myVoteForm.addEventListener("submit", login, false);
