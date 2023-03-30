import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7124/User',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const UserServiceAPI = {
  async getUsers() {
      let response = await apiClient.get("/GetAllUsers");
      let allUsers = response.data;
      return allUsers;
  },
  async getUser(id) {
      let response = await apiClient.get(`/GetUserById?id=${id}`);
      let user = response.data;
      return user;
  },
  async getUsersByCriteria() {
    let response = await apiClient.get("/GetAllUsersByCriteria");
    let allUsersByCriteria = response.data;
    return allUsersByCriteria;
},
  async submitUser(newUser){
      try {
         const response = await apiClient.post("/Post", newUser);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   },
  async deleteUser(id){
      await apiClient.delete(`/Delete?id=${id}`)
  },
  async updateUser(id, updatedUser){
      await apiClient.patch(`/UpdateUser?id=${id}`, updatedUser)
  },
}

export default UserServiceAPI

