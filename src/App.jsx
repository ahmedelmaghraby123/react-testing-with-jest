import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const handleAddUser = (username, email) => {
    setUsers((prev) => {
      return [...prev, { username, email }];
    });
  };
  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user, index) => index != id));
  };
  return (
    <div className="m-5">
      <UserForm handleAddUser={handleAddUser} />
      <hr />
      <UsersList users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
