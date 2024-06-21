import React, { useState, useEffect } from "react";

// Sample user data (replace with your data fetching logic)
const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "user" },
];

function AdminDashboard() {
  const [userList, setUserList] = useState(users);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  // Function to handle edit button click
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  // Function to handle user deletion (replace with actual delete logic)
  const handleDeleteClick = (userId) => {
    const updatedUserList = userList.filter((user) => user.id !== userId);
    setUserList(updatedUserList);
  };

  // Function to handle form submission in edit modal
  const handleEditSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      ...selectedUser,
      name: event.target.name.value,
      email: event.target.email.value,
      role: event.target.role.value,
    };
    const updatedUserList = userList.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUserList(updatedUserList);
    setShowEditModal(false);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteClick(user.id)}
                >
                  Delete
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit User Modal */}
      {/* <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={selectedUser.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={selectedUser.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select name="role" defaultValue={selectedUser.role}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal> */}
    </div>
  );
}

export default AdminDashboard;
