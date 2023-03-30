import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Landing from "../Pages/Landing";
import NotFound from "../Pages/NotFound";
import ProductList from "../Pages/ProductList";
import Register from "../Pages/Register";

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
                    {
                        path: '/registro',
                        element: <Register />,
                        

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


