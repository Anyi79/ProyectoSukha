import ProductServiceAPI from "../services/productServiceAPI";

const ProductHandlerAPI = {
    addProduct(newProduct) {
        console.log(newProduct)
        
        const fileExtension = newProduct.extension === 'jpg' ? 1 : 2;
        
    
        let product = { 
            //"IdWeb": NEWID(),
            "Name": newProduct.name,
            "Category": newProduct.category,
            "Brand": newProduct.brand,
            "Description": newProduct.description,
            "Content": newProduct.picture,
            "Price": parseFloat(newProduct.price),
            "Stock": parseInt(newProduct.stock),
            "InsertDate": new Date(),
            "UpdateDate": new Date(),
            "IsActive": true,
            "IsPublic": true,
            "fileExtension": fileExtension,
        }
        console.log(product)
        return ProductServiceAPI.submitProduct(product);
    },
    loadProducts(){
        return ProductServiceAPI.getProducts();
    },
    loadProduct(id) {
        return ProductServiceAPI.getProduct(id);
    },
    deletePhoto(id){
        return ProductServiceAPI.deleteProduct(id);
    },
    updatePhoto(id, updatedProduct){
        if (!updatedPhoto) {
            return;
        }

        const extension = format === 'jpg' ? 2 : 1;
        
        let updatedProductStructure = {
            "Name": updatedProduct.name,
            "Category": updatedProduct.category,
            "Brand": updatedProduct.brand,
            "Description": updatedProduct.description,
            "Content": updatedProduct.content,
            "Price": updatedProduct.price,
            "Stock": updatedProduct.stock,
            "insertDate": new Date(),
            "updateDate": new Date(),
            "isActive": updatedProduct.isActive,
            "fileExtension": extension,
        }
        console.log(updatedProductStructure)

        return ProductServiceAPI.updatePhoto(id, updatedProductStructure);
    },
}

export default ProductHandlerAPI;

