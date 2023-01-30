import { render, screen, within } from "@testing-library/react";
import UsersList from "../components/UsersList";
import user from "@testing-library/user-event";

const renderComponent = () => {
  const users = [
    { name: "ahmed", email: "ahmed@gmail.com" },
    { name: "mohamed", email: "mohamed@gmail.com" },
  ];
  render(<UsersList users={users} />);
  return { users };
};

test("should render one li for each user", () => {
  const { users } = renderComponent();
  const usersLi = within(screen.getByTestId("userslist")).getAllByRole("row");
  expect(usersLi).toHaveLength(users.length);
});

test("each row should have the user name and email and delete button", () => {
  const { users } = renderComponent();
  users.forEach((user) => {
    let userRegex = new RegExp(user.name, "i");
    const userCell = screen.getByRole("cell", { name: userRegex });
    expect(userCell).toBeInTheDocument();
  });
  const deleteBtns = screen.getAllByRole("button", { name: /x/i });
  expect(deleteBtns).toHaveLength(users.length);
});

test("should call handleDeleteUser function when clicking the x button", () => {
  const users = [{ name: "ahmed", email: "ahmed@gmail.com" }];
  const mock = jest.fn();
  render(<UsersList users={users} handleDeleteUser={mock} />);
  const deleteBtn = screen.getByRole("button", { name: /x/i });
  expect(deleteBtn).toBeInTheDocument();
  user.click(deleteBtn);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith(0);
});
