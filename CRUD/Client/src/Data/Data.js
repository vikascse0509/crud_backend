import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Create User
export const createUser = async (userData) => {
  const response = await axios.post(`${API_URL}/createUser`, userData);
  return response.data;
};

// Get Users
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/getUser`);
  return response.data;
};

// Update User
export const updateUser = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/updateUser/${id}`, updatedData);
  return response.data;
};

// Delete User
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/deleteUser/${id}`);
  return response.data;
};
