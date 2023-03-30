import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7124/Person',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const PersonServiceAPI = {
  async getPersons() {
      let response = await apiClient.get("/GetAllPersons");
      let allPersons = response.data;
      return allPersons;
  },
  async getPerson(id) {
      let response = await apiClient.get(`/GetPersonTypeById?id=${id}`);
      let person = response.data;
      return person;
  },
  async submitPerson(newPerson){
      try {
         const response = await apiClient.post("/Person/Post", newPerson);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   },
  async deletePerson(id){
      await apiClient.delete(`/Person/Delete?id=${id}`)
  },
  async updatePerson(id, updatedPerson){
      await apiClient.patch(`/UpdatePerson?id=${id}`, updatedPerson)
  },
}

export default PersonServiceAPI

