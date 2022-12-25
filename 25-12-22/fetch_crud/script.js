let tablo = document.getElementById('userTable');
function getUsers() {
  fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((veri) => {
      console.log(veri);
      veri.data.map((user) => {
        console.log(user);
        tablo.innerHTML += `
        <tr>
        <td>
          <input type="text" class="form-control" id="first_name_${user.id}" value="${user.first_name}" />
        </td>
        <td>
          <input type="text" class="form-control" id="last_name_${user.id}" value="${user.last_name}" />
        </td>
        <td>
          <input type="text" class="form-control" id="email_${user.id}" value="${user.email}" />
        </td>
        <td>
          <a  class="btn btn-success" onclick="updateUser(${user.id})">Edit</a>
          <a  class="btn btn-danger"  onclick="deleteUser(${user.id})">Delete</a>
        </td>
      </tr>
        `;
      });
    });
}

getUsers();

function refreshTable() {
  tablo.innerHTML = '';
  getUsers();
}

function createUser() {
  let veri = {
    first_name: document.getElementById('name').value || 'There is no data',
    last_name: document.getElementById('surname').value || 'There is no data',
    email: document.getElementById('email').value || 'There is no data',
  };
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(veri),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tablo.innerHTML += `
      <tr>
      <td>
        <input type="text" class="form-control" id="first_name_${data.id}" value="${data.first_name}" />
      </td>
      <td>
        <input type="text" class="form-control" id="lst_name_${data.id}" value="${data.last_name}" />
      </td>
      <td>
        <input type="text" class="form-control" id="email_${data.id}" value="${data.email}" />
      </td>
      <td>
        <a  class="btn btn-success" onclick="updateUser(${data.id})">Edit</a>
        <a  class="btn btn-danger"  onclick="deleteUser(${data.id})">Delete</a>
      </td>
    </tr>
      `;
    });
}

function updateUser(id) {
  console.log(id);
  let veri = {
    first_name:
      document.getElementById('first_name_' + id).value || 'Unacceptable Value',
    last_name:
      document.getElementById('last_name_' + id).value || 'Unacceptable Value',
    email: document.getElementById('email_' + id).value || 'Unacceptable Value',
  };
  console.log(veri);

  fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(veri),
  })
    .then((response) => response.json())
    .then((data) => console.log('User Updated Successfully', data))
    .catch((error) => console.log(error));
}

function deleteUser(id) {
  fetch(`https://reqres.in/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => console.log(res))
    .then((data) => console.log('User Deleted Successfully', data))
    .catch((err) => console.log(err));
}
