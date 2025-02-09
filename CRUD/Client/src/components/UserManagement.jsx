import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../Data/Data";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    contact_number: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    console.log("Users from API:", data);
    setUsers(data.data || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateUser(editId, formData);
    } else {
      await createUser(formData);
    }
    setFormData({ user_name: "", password: "", contact_number: "" });
    setEditId(null);
    loadUsers();
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditId(user.user_id);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">User Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full rounded-md"
          value={formData.user_name}
          onChange={(e) =>
            setFormData({ ...formData, user_name: e.target.value })
          }
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded-md"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Contact Info"
          className="border p-2 w-full rounded-md"
          value={formData.contact_number}
          onChange={(e) =>
            setFormData({ ...formData, contact_number: e.target.value })
          }
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
          >
            {editId ? "Update User" : "Add User"}
          </button>
        </div>
      </form>
      <table className="w-full mt-6 border-collapse shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Username</th>
            {/* <th className="p-3 border">Role</th> */}
            <th className="p-3 border">Contact</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.user_id} className="text-center border">
                <td className="p-3 border">{user.user_id}</td>
                <td className="p-3 border">{user.user_name}</td>
                {/* <td className="p-3 border">{user.role}</td> */}
                <td className="p-3 border">{user.contact_number}</td>
                <td className="p-3 border">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.user_id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-3">
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
