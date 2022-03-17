const URL = 'http://localhost:3000';
const groupsWrapper = document.querySelector('.groups-wrapper');

async function getGroups() {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${URL}/accounts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const jsData = await resp.json();

  console.log('jsData===', jsData);
  if (jsData.success === false) {
    console.log('yra klaidu redirect');
    window.location.replace('login.html');
  }
  renderGroupsEl(jsData.data, groupsWrapper);
}
getGroups();

function renderGroupsEl(groupsArray, destination) {
  destination.innerHTML = '';
  groupsArray.forEach(({ group_id, name }) => {
    destination.innerHTML += `
      <article class="single-group">
          <h2 class="group-id">ID: ${group_id}</h2>
          <p>${name}</p>
      </article>
      `;
  });
}

