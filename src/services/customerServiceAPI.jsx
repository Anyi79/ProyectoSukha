import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7124/Customer',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const CustomerServiceAPI = {
  async getCustomers() {
      let response = await apiClient.get("/GetAllCustomers");
      let allCustomers = response.data;
      return allCustomers;
  },
  async getCustomer(id) {
      let response = await apiClient.get(`/GetCustomerById?id=${id}`);
      let customer = response.data;
      return customer;
  },
  async getCustomersByCriteria() {
    let response = await apiClient.get("/GetAllCustomersByCriteria");
    let allCustomersByCriteria = response.data;
    return allCustomersByCriteria;
},
  async submitCustomer(newCustomer){
      try {
         const response = await apiClient.post("/Post", newCustomer);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   },
  async deleteCustomer(id){
      await apiClient.delete(`/Delete?id=${id}`)
  },
  async updateCustomer(id, updatedOrder){
      await apiClient.patch(`/UpdateCuustomer?id=${id}`, updatedCustomer)
  },
}

export default CustomerServiceAPI

