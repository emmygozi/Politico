/**  Get new  office
    * @param {string} type
    * @param {string} name
    * @return {string} error message
    * @public
   */

  function changeCandidate() {

    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    for (i=0; i<selectedValue.length; i++){
        console.log(selectedValue);
    }
    }
    let mycandidate = document.getElementById('hiddenoffice');
    let selectCandidateHome =`<select class="candidate-selection" id="selectBox" onchange="changeCandidate();">
                    <option>Select Candidate</option>`;
                    let selectCandidateEnd=`</select>`;

  const getCandidate = (e) => {
    e.preventDefault();

    const notify = document.getElementById('notifyParties');
  
  
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
  

  window.onload = getCandidate;