import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7124/Rol',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const RolServiceAPI = {
  async getRoles() {
      let response = await apiClient.get("/GetAllRoles");
      let allRoles = response.data;
      return allRoles;
  },
  async getRol(id) {
      let response = await apiClient.get(`/GetRolTypeById?id=${id}`);
      let rol = response.data;
      return rol;
  },
  async submitRol(newRol){
      try {
         const response = await apiClient.post("/Rol/Post", newRol);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   },
  async deleteRol(id){
      await apiClient.delete(`/Rol/Delete?id=${id}`)
  },
  async updateRol(id, updatedRol){
      await apiClient.patch(`/UpdateRol?id=${id}`, updatedRol)
  },
}

export default RolServiceAPI

