// code to be replaced by fetch
let viewResult = document.getElementById("view-result");
viewResult.onclick = function() {
  let topFlexCards = document.getElementsByClassName("top-flex-cards");
  if (screen.width > 720) {
    for (let i = 0; i < topFlexCards.length; i++) {
      topFlexCards[i].style.display = "block";
    }
  }

  let reportTable = document.getElementById("report-table");
  reportTable.style.marginTop = "1rem";

  document.getElementById("change").innerHTML = `<table>
    <tr>
      <th>Party name</th>
      <th>Office</th>
      <th>Candidate name</th>
      <th>Number of votes</th>
      <th>Petition against candidate</th>
    </tr>
    <tr>
      <td><img src='../img/pdp.png' height='25rem;' width='25rem;'> PDP</td>
      <td>Governor</td>
      <td>Paul Boseman Wakanda</td>
      <td>100</td>
      <td>none</td>
    </tr>
    <tr>
      <td><img src='../img/apc.jpg' height='25rem;' width='25rem;'> APC</td>
      <td>Governor</td>
      <td>Griffin Sanchez Trump</td>
      <td>100</td>
      <td>none</td>
    </tr>
    <tr>
      <td><img src='../img/ann.jpg' height='25rem;' width='25rem;'> ANN</td>
      <td>Governor</td>
      <td>Swanson Liverpool Madrid</td>
      <td>30</td>
      <td>10</td>
    </tr>
    <tr>
      <td><img src='../img/ann.jpg' height='25rem;' width='25rem;'> ANN</td>
      <td>Senator</td>
      <td>Brown Black Bush</td>
      <td>250</td>
      <td>1</td>
    </tr>
  </table>
  `;
};

let viewParty = document.getElementById("view-party");
viewParty.onclick = function() {
  let changeHtml = document.getElementById("change");
  changeHtml.style = "text-align: left;";
  changeHtml.innerHTML = `
  <table id='make-mobile-table-bigger'>
    <tr>
      <th>Logo</th>
      <th>Name</th>
      <th>Address</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    <tr>
      <td><img src='../img/pdp.png' height='25rem;' width='25rem;'></td>
      <td> PDP</td>
      <td>14, Wakanda Junction, I never freeze crecent, Vibranium state</td>
      <td><button class='petbuttontwo' id='edit-button'>Edit</button></td>
      <td><button class='petbuttontwo' style='background-color: #CC3333;' id='delete-button'>Delete</button></td>
    </tr>
    <tr>
      <td><img src='../img/apc.jpg' height='25rem;' width='25rem;'></td>
      <td>APC</td>
      <td>1, King of Boys road,  off Adetiba, Lagos state</td>
      <td><button class='petbuttontwo' id='edit-button'>Edit</button></td>
      <td><button class='petbuttontwo' style='background-color: #CC3333;' id='delete-button'>Delete</button></td>
    </tr>
    <tr>
      <td><img src='../img/ann.jpg' height='25rem;' width='25rem;'></td>
      <td>ANN</td>
      <td>42, Swanson street, Liverpool Junction, Madrid state</td>
      <td><button class='petbuttontwo' id='edit-button'>Edit</button></td>
      <td><button class='petbuttontwo' style='background-color: #CC3333;' id='delete-button'>Delete</button></td>
    </tr>
  </table>
  `;
};

let viewOffice = document.getElementById("view-office");
viewOffice.onclick = function() {
  document.getElementById("change").innerHTML = `<table id='mobile-view-office'>
    <tr>
      <th>Office type</th>
      <th>Name</th>
    </tr>
    <tr>
      <td> Legislature</td>
      <td>Senator</td>
    </tr>
    <tr>
      <td> State</td>
      <td>Governor</td>
    </tr>
    <tr>
      <td> Federal</td>
      <td>President</td>
    </tr>
  </table>`;
};

let createOffice = document.getElementById("create-office");
createOffice.onclick = function() {
  document.getElementById(
    "change"
  ).innerHTML = `<form  style='text-align: left;' id='remove-margin-here'><select style='width: 6rem; height: 1.8rem; border-radius: 5px;' >
    <option>Select office</option><option value='1'>LG Chairman</option><option value='2'>Governor</option><option value='3'>Senate</option><option value='4'>President</option></select><br><br><textarea name='message' rows='2' cols='50' placeholder='Enter office name' style='border-radius: 7px;' id='reduce-text-size'></textarea><br><button type='submit' class='petbutton'>Create office</button></form>`;
};

let dCreateOffice = document.getElementById("dcreate-office");
dCreateOffice.onclick = function() {
  document.getElementById(
    "change"
  ).innerHTML = `<form  style='text-align: left;' id='remove-margin-here'><select style='width: 6rem; height: 1.8rem; border-radius: 5px;' >
    <option>Select office</option><option value='1'>LG Chairman</option><option value='2'>Governor</option><option value='3'>Senate</option><option value='4'>President</option></select><br><br><textarea name='message' rows='2' cols='50' placeholder='Enter office name' style='border-radius: 7px;' id='reduce-text-size'></textarea><br><button type='submit' class='petbutton'>Create office</button></form>`;
  document.getElementById("drop-down-container").style.display = "none";
};

let partyCreate = document.getElementById("party-create");
partyCreate.onclick = function() {
  let changeHtml = document.getElementById("change");
  changeHtml.style = "text-align: left;";
  changeHtml.innerHTML = `<form id='hide-political-party'>Party name: 
    <input id='adjust-for-mobile2' type='text' style='border-radius: 7px; height: 30px;'  placeholder='      party name' name='party'/>
    <br><br>Logo URL: &nbsp;&nbsp;<input id='adjust-for-mobile3' type='text' style='border-radius: 7px; height: 30px;' placeholder='      URL' name='party'/>
    <p>Headquaters address</p>
    <textarea id='adjust-for-mobile' name='message' rows='6' cols='80' placeholder='Enter party address' style='border-radius: 7px;'>
    </textarea><br><button type='submit' class='petbutton'>Create party</button></form>`;
};

let dPartyCreate = document.getElementById("dcreate-party");
dPartyCreate.onclick = function() {
  let changeHtml = document.getElementById("change");
  changeHtml.style = "text-align: left;";
  changeHtml.innerHTML = `<form id='hide-political-party' style='margin: -1.5em 0em 0em 1em;'>Party name: 
    <input type='text' style='border-radius: 7px; height: 30px;'  placeholder='      party name' name='party'/>
    <br><br>Logo URL: &nbsp;&nbsp;<input type='text' style='border-radius: 7px; height: 30px;' placeholder='      URL' name='party'/>
    <p>Headquaters address</p>
    <textarea name='message' rows='6' cols='80' placeholder='Enter party address' style='border-radius: 7px; width: 50vh;'>
    </textarea><br><button type='submit' class='petbutton'>Create party</button></form>`;
  document.getElementById("drop-down-container").style.display = "none";
};

let dViewParty = document.getElementById("dview-party");
dViewParty.onclick = function() {
  let changeHtml = document.getElementById("change");
  changeHtml.style = "text-align: left;";
  changeHtml.innerHTML = `
  <table style='width: 55vh;'>
    <tr>
      <th>Logo</th>
      <th>Name</th>
      <th>Address</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    <tr>
      <td><img src='../img/pdp.png' height='25rem;' width='25rem;'></td>
      <td> PDP</td>
      <td>14, Wakanda Junction, I never freeze crecent, Vibranium state</td>
      <td><button class='petbuttontwo' id='edit-button'>Edit</button></td>
      <td><button class='petbuttontwo' style='background-color: #CC3333;' id='delete-button'>Delete</button></td>
    </tr>
    <tr>
      <td><img src='../img/apc.jpg' height='25rem;' width='25rem;'></td>
      <td>APC</td>
      <td>1, King of Boys road,  off Adetiba, Lagos state</td>
      <td><button class='petbuttontwo' id='edit-button'>Edit</button></td>
      <td><button class='petbuttontwo' style='background-color: #CC3333;' id='delete-button'>Delete</button></td>
    </tr>
    <tr>
      <td><img src='../img/ann.jpg' height='25rem;' width='25rem;'></td>
      <td>ANN</td>
      <td>42, Swanson street, Liverpool Junction, Madrid state</td>
      <td><button class='petbuttontwo' id='edit-button'>Edit</button></td>
      <td><button class='petbuttontwo' style='background-color: #CC3333;' id='delete-button'>Delete</button></td>
    </tr>
  </table>
  `;
  document.getElementById("drop-down-container").style.display = "none";
};

let dViewOffice = document.getElementById("dview-office");
dViewOffice.onclick = function() {
  let changeHtml = document.getElementById("change");
  changeHtml.style = "text-align: left;";
  changeHtml.innerHTML = `
  <table style=' width: 54vh;
  margin-left: 1em;'>
    <tr>
      <th>Office type</th>
      <th>Name</th>
    </tr>
    <tr>
      <td> Legislature</td>
      <td>Senator</td>
    </tr>
    <tr>
      <td> State</td>
      <td>Governor</td>
    </tr>
    <tr>
      <td> Federal</td>
      <td>President</td>
    </tr>
  </table>
  `;
  document.getElementById("drop-down-container").style.display = "none";
};

let dViewResult = document.getElementById("dview-result");
dViewResult.onclick = function() {
  let topFlexCards = document.getElementsByClassName("top-flex-cards");
  if (screen.width > 720) {
    for (let i = 0; i < topFlexCards.length; i++) {
      topFlexCards[i].style.display = "block";
    }
  }

  let reportTable = document.getElementById("report-table");
  reportTable.style.marginTop = "1rem";

  document.getElementById("change").innerHTML = `<table>
    <tr>
      <th>Party name</th>
      <th>Office</th>
      <th>Candidate name</th>
      <th>Number of votes</th>
      <th>Petition against candidate</th>
    </tr>
    <tr>
      <td><img src='../img/pdp.png' height='25rem;' width='25rem;'> PDP</td>
      <td>Governor</td>
      <td>Paul Boseman Wakanda</td>
      <td>100</td>
      <td>none</td>
    </tr>
    <tr>
      <td><img src='../img/apc.jpg' height='25rem;' width='25rem;'> APC</td>
      <td>Governor</td>
      <td>Griffin Sanchez Trump</td>
      <td>100</td>
      <td>none</td>
    </tr>
    <tr>
      <td><img src='../img/ann.jpg' height='25rem;' width='25rem;'> ANN</td>
      <td>Governor</td>
      <td>Swanson Liverpool Madrid</td>
      <td>30</td>
      <td>10</td>
    </tr>
    <tr>
      <td><img src='../img/ann.jpg' height='25rem;' width='25rem;'> ANN</td>
      <td>Senator</td>
      <td>Brown Black Bush</td>
      <td>250</td>
      <td>1</td>
    </tr>
  </table>
  `;
};

let dLogout = document.getElementById("dlogout");
dLogout.onclick = function() {
  document.getElementById("drop-down-container").style.display = "none";
};
