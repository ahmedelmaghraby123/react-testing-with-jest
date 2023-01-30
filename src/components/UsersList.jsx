import React from "react";

const UsersList = ({ users, handleDeleteUser }) => {
  return (
    <div>
      <h2 className="text-xl capitalize font-semibold text-stone-800-600">
        users
      </h2>
      <table>
        <thead>
          <tr>
            <th className="w-[50px] text-left">id</th>
            <th className="w-[200px] text-left">username</th>
            <th className="w-[200px] text-left">email</th>
            <th className="w-[200px] text-left">actions</th>
          </tr>
        </thead>
        <tbody data-testid="userslist">
          {users?.map((user, index) => (
            <tr key={index}>
              <td className="w-[50px] text-left">{index + 1}</td>
              <td className="w-[200px] text-left text-slate-600">
                {user.username}
              </td>
              <td className="w-[200px] text-left text-slate-600">
                {user.email}
              </td>
              <td className="w-[200px] text-left text-slate-600">
                <button
                  className="text-red-500 text-center font-semibold text-lg"
                  onClick={() => handleDeleteUser(index)}>
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
