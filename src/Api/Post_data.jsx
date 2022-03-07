import React, { useEffect, useState } from "react";

let Post = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setMobile] = useState("");

  function saveuser() {
    let data = { name, email, address };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }
  return (
    <div>
      <h1>Post Data</h1>
      <h4>POST DATA API</h4>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="button" onClick={saveuser}>
        Save New User
      </button>
    </div>
  );
};

export default Post;
