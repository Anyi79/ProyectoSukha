import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7124/Product',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const ProductServiceAPI = {
  async getProducts() {
      let response = await apiClient.get("/GetAllProducts");
      let allProducts = response.data;
      return allProducts;
  },
  async getProduct(id) {
      let response = await apiClient.get(`/GetProductById?id=${id}`);
      let product = response.data;
      return product;
  },
  async getProductsByCriteria() {
    let response = await apiClient.get("/GetAllProductsByCriteria");
    let allProductsByCriteria = response.data;
    return allProductsByCriteria;
},
  async getProductsByBrand() {
    let response = await apiClient.get("/GetAllProductsByBrand");
    let allProductsByBrand = response.data;
    return allProductsByBrand;
},
  async submitProduct(newProduct){
      try {
         const response = await apiClient.post("/Post", newProduct);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   },
  async deleteProduct(id){
      await apiClient.delete(`/Product/Delete?id=${id}`)
  },
  async updateProduct(id, updatedProduct){
      await apiClient.patch(`/UpdateProduct?id=${id}`, updatedProduct)
  },
}

export default ProductServiceAPI

