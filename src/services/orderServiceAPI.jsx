import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7124/Order',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const OrderServiceAPI = {
  async getOrders() {
      let response = await apiClient.get("/GetAllOrders");
      let allOrders = response.data;
      return allOrders;
  },
  async getOrder(id) {
      let response = await apiClient.get(`/GetOrderById?id=${id}`);
      let order = response.data;
      return order;
  },
  async getOrdersByCriteria() {
    let response = await apiClient.get("/GetAllOrdersByCriteria");
    let allOrdersByCriteria = response.data;
    return allOrdersByCriteria;
},
  async getOrdersByCustomer() {
    let response = await apiClient.get("/GetAllOrdersByCustomer");
    let allOrdersByCustomer = response.data;
    return allOrdersByCustomer;
},
async getOrdersByProduct() {
  let response = await apiClient.get("/GetAllOrdersByProduct");
  let allOrdersByProduct = response.data;
  return allOrdersByProduct;
},
async getOrdersByPaid() {
  let response = await apiClient.get("/GetAllOrdersByPaid");
  let allPaidsByCustomer = response.data;
  return allPaidsByCustomer;
},
async getOrdersByDelivered() {
  let response = await apiClient.get("/GetAllOrdersByDelivered");
  let allOrdersByDelivered = response.data;
  return allOrdersByDelivered;
},
  async submitOrder(newOrder){
      try {
         const response = await apiClient.post("/Order/Post", newOrder);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   },
  async deleteOrder(id){
      await apiClient.delete(`/Order/Delete?id=${id}`)
  },
  async updateOrder(id, updatedOrder){
      await apiClient.patch(`/UpdateOrder?id=${id}`, updatedOrder)
  },
}

export default OrderServiceAPI

