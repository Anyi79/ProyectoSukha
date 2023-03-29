import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Landing from "../Pages/Landing";
import NotFound from "../Pages/NotFound";
import ProductList from "../Pages/ProductList";
import ProductInfo from "../components/ProductInfo";
import { productsHandler } from "../handlers/productHandler";
import AddProduct from "../Pages/AddProduct";
import ShopCart from "../Pages/ShopCart";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Landing />,
                    },
         
                    {
                        path: '/productList/',
                        element: <ProductList />,
                        loader: fetchProducts
                        

                    },

                    {
                        path: "/productInfo/:id",
                        element: <ProductInfo />,
                        loader: fetchProduct

                    },
                    
                     {
                        path: '/addProduct/',
                        element: <AddProduct />,
                      

                    }, 

                   /* {
                        path: '/productList/sahumerios',
                        element: <ProductList />,
                        

                    },
                    {
                        path: '/productList/inciensos',
                        element: <ProductList />,
                        

                    },
                    {
                        path: '/productList/aceites',
                        element: <ProductList />,
                        

                    },
                    {
                        path: '/productList/minerales',
                        element: <ProductList />,
                        

                    },
                    {
                        path: '/productList/accesorios',
                        element: <ProductList />,
                        

                    },
                     {
                        path: '/productInfo',
                        element: <ProductInfo />,
                    }
             */
                   {
                        path: '/shopCart/',
                        element: <ShopCart />,
                        
                      

                    },
                ]
            },

        ]
    },
]);

async function fetchProducts() {
    const products = await productsHandler.loadProducts();
    return { products };
}

async function fetchProduct({ params }) {
    const product = await productsHandler.loadProduct(params.id);
    return { product };
}
