import React, { Fragment, use } from "react";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const name = useRef();
  const email = useRef();
  const age = useRef();
  const form = useRef();

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "Diana", age: 28, email: "diana@example.com" },
    { id: 5, name: "Ethan", age: 27, email: "ethan@example.com" },
  ]);

  const hendleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = name.current.value;
    const userEmail = email.current.value;
    const userAge = age.current.value;

    setUsers((prev) => [
      ...prev,
      {
        name: userName,
        email: userEmail,
        age: userAge,
        id: uuidv4(),
      },
    ]);
    name.current.value = "";
    email.current.value = "";
    age.current.value = "";
  };
  return (
    <>
      <form
        className="flex flex-col gap-5 w-5xl mx-auto p-5 justify-center items-center"
        ref={form}
        onSubmit={handleSubmit}
        action=""
      >
        <div className="form-wrapper">
          <label className="text-cyan-500" htmlFor="">
            Name:
          </label>
          <input
            required
            className="input ml-5"
            type="text"
            ref={name}
            placeholder="Name"
          />
        </div>
        <div className="form-wrapper">
          <label className="text-cyan-500" htmlFor="">
            Email:
          </label>
          <input
            required
            className="input ml-5"
            type="email"
            ref={email}
            placeholder="Email"
          />
        </div>
        <div className="form-wrapper">
          <label className="text-cyan-500" htmlFor="">
            Age:
          </label>
          <input
            required
            className="input ml-5"
            type="number"
            ref={age}
            placeholder="Age"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add User
        </button>
      </form>
      <ul className="mx-auto w-4xl  p-5">
        {users.map((user, i) => {
          return (
            <li
              key={user.id}
              className="flex mb-5 bg-blue-800 justify-between p-3 items-center rounded-2xl text-amber-300"
            >
              <h3 className="title font-bold">{user.name}</h3>
              <p className="italic">{user.email}</p>
              <p>Age: {user.age}</p>
              <button
                className="bg-orange-600 btn"
                onClick={() => hendleDelete(user.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
