import React, { useEffect, useState } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  function deleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      mathod: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getData();
      });
    });
  }
  return (
    <div>
      {
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      }
      <table border="1">
        <tbody>
          <tr>
            <td>S.n</td>
            <td>Name</td>
            <td>email</td>
            <id>address</id>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <id>{item.address}</id>
              <button onClick={() => deleteUser(item.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Api;
