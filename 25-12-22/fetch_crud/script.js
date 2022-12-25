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
          <input type="text" class="form-control" id="" value="${user.first_name}" />
        </td>
        <td>
          <input type="text" class="form-control" id="" value="${user.last_name}" />
        </td>
        <td>
          <input type="text" class="form-control" id="" value="${user.email}" />
        </td>
        <td>
          <a href="" class="btn btn-success" onclick="updateUser(${user.id})">Edit</a>
          <a href="" class="btn btn-danger"  onclick="deleteUser(${user.id})">Delete</a>
        </td>
      </tr>
        `;
      });
    });
}

getUsers();

function refreshTable() {
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
        <input type="text" class="form-control" id="" value="${data.first_name}" />
      </td>
      <td>
        <input type="text" class="form-control" id="" value="${data.last_name}" />
      </td>
      <td>
        <input type="text" class="form-control" id="" value="${data.email}" />
      </td>
      <td>
        <a href="" class="btn btn-success" onclick="updateUser(${data.id})">Edit</a>
        <a href="" class="btn btn-danger"  onclick="deleteUser(${data.id})">Delete</a>
      </td>
    </tr>
      `;
    });
}
