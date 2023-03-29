import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Landing from "../Pages/Landing";
import NotFound from "../Pages/NotFound";
import ProductList from "../Pages/ProductList";
import AdminAddProduct from "../Pages/AdminAddProduct";

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
                        path: '/adminAddProduct/',
                        element: <AdminAddProduct />,
                    },
                    {
                        path: '/login/',
                        element: <Login />,
                        loader: fetchPhoto,
                    },
                    {
                        path: '/productList/',
                        element: <ProductList />,
                    },
                    {
                        path: '/productList/velas',
                        element: <ProductList />,
                        

                    },
                    {
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
             /*        {
                        path: '/productInfo',
                        element: <ProductInfo />,
                    }
             */
                ]
            },

        ]
    },
]);

async function fetchProducts() {
    const Products = await ProductHandlerAPI.loadProducts();
    return { Products };
}

async function fetchProduct({ params }) {
    const Product = await ProductHandlerAPI.loadPRODUCT(params.id);
    return { Product };
}
