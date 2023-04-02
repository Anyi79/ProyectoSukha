import { productService } from "../services/productService";      


export const productsHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductStructure = {
         /*    "image": newProduct.image, */
            "name": newProduct.name,
           /*  "description": newProduct.description, */
         /*    "category": newProduct.category, */
            "price": newProduct.price,
            "brand": newProduct.brand,
           
        }
console.log("esto es el nuevo prduct", newProductStructure);
        return productService.submitProduct(newProductStructure);   
    },
    loadProducts(){
        return productService.getProducts();
    },

    loadProduct(id){
        return productService.getProduct(id);

},
deleteProduct(id){
    return productService.deleteProduct(id);
},
updateProduct(updatedProduct){
    if (!updatedProduct) {
        return;
    }

    let updatedProductStructure = {
        "id" : updatedProduct.id,
        "name": updatedProduct.name,
       /*  "description": updatedProduct.description,
        "category": updatedProduct.category, */
        "price": updatedProduct.price,
        "brand":updatedProduct.brand
       
       
    }

    return productService.updateProduct(updatedProductStructure);
} 

}  