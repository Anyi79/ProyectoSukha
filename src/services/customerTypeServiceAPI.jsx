import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7124/CustomerType',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const CustomerTypeServiceAPI = {
  async getCustomerTypes() {
      let response = await apiClient.get("/GetAllCustomerTypes");
      let allCustomerTypes = response.data;
      return allCustomerTypes;
  },
  async getCustomerType(id) {
      let response = await apiClient.get(`/GetCustomerTypeById?id=${id}`);
      let customerType = response.data;
      return customerType;
  },
  async submitCustomerType(newCustomerType){
      try {
         const response = await apiClient.post("/Post", newCustomerType);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   },
  async deleteCustomerType(id){
      await apiClient.delete(`/Delete?id=${id}`)
  },
  async updateCustomerType(id, updatedOrder){
      await apiClient.patch(`/UpdateCustomerType?id=${id}`, updatedCustomerType)
  },
}

export default CustomerTypeServiceAPI

