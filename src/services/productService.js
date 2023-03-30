import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://localhost:7204',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const productService = {
  async getProducts() {
    let response = await apiClient.get("Product /GetAll");
    console.log(response.data);
    return response.data;

  },

  async submitProduct(newProduct) {
    console.log("new product de servicio", newProduct);
    await apiClient.post("/Product /Post", newProduct);
  },

  async getProduct(id) {
    let response = await apiClient.get("/Product /GetProductById/" + id);

    let product = response.data;
    return product;
  },

  async deleteProduct(id) {
    await apiClient.delete("/Product /Delete?id=" + id);
  },

  async updateProduct(updatedProduct) {
    await apiClient.patch("/Product /Patch", updatedProduct);
  }
}
