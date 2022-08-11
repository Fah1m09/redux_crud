import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "../features/userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <div className="formDiv">
        <div className="formHeading">
          <h1>Create New User</h1>
        </div>
        <div className="formBody">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <label for="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your last name.."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <label for="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
          />

          <button
            className="submitBtn"
            onClick={() => {
              dispatch(
                addUser({
                  id: user[user.length - 1].id + 1,
                  name,
                  username,
                  email,
                  website,
                })
              );
            }}
          >
            Add User
          </button>
        </div>
      </div>
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Website</th>
          <th></th>
          <th></th>
        </tr>
        {user.map((pp) => (
          <tr key={pp.id}>
            <td>{pp.name}</td>
            <td>{pp.username}</td>
            <td>{pp.email}</td>
            <td>{pp.website}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(
                    deleteUser({
                      id: pp.id
                    })
                  );
                }}
              >
                Delete
              </button>
            </td>
            <td>
              {" "}
              <button
                onClick={() => {
                  dispatch(
                    updateUser({
                      id: pp.id,
                      name: name,
                      username:username,
                      email:email,
                      website:website
                    })
                  );
                }}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
