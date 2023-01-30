import React, { useState } from "react";

const UserForm = ({ handleAddUser }) => {
  const [user, setUser] = useState({ username: "", email: "" });
  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmitBtn = () => {
    handleAddUser(user.username, user.email);
    setUser({ username: "", email: "" });
  };
  return (
    <div>
      <div>
        <label className="capitalize" htmlFor="username">
          username
        </label>
        <br></br>
        <input
          id="username"
          className="border border-2 border-slate-400 px-1 rounded outline-none"
          name="username"
          type="text"
          onChange={handleInput}
          value={user.username}
        />
      </div>
      <div>
        <label className="capitalize" htmlFor="email">
          email
        </label>
        <br></br>
        <input
          id="email"
          className="border border-2 border-slate-400 px-1 rounded outline-none"
          name="email"
          type="text"
          onChange={handleInput}
          value={user.email}
        />
      </div>

      <button
        className="capitalize bg-slate-600 text-white font-semibold px-4 py-1 rounded my-3"
        onClick={handleSubmitBtn}>
        add
      </button>
    </div>
  );
};

export default UserForm;
