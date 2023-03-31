import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Landing from "../Pages/Landing";
import NotFound from "../Pages/NotFound";
import ProductList from "../Pages/ProductList";
import ProductInfo from "../components/ProductInfo";
import ProductHandlerAPI from "../handlers/productHandlerAPI";
//import OrderHandlerAPI from "../handlers/orderHandler";
//import CustomerHandlerAPI from "../handlers/customerHandler";
//import CustomerTypeHandlerAPI from "../handlers/customerTypeHandler";
import UserHandlerAPI from "../handlers/userHandlerAPI";
//import PersonHandlerAPI from "../handlers/personHandler";
import AddProduct from "../Pages/AddProduct";
import ShopCart from "../Pages/ShopCart";
import AdminAddProduct from "../Pages/AdminAddProduct";
import Admin from "../Pages/Admin";
import AdminUser from "../Pages/AdminUser";
import LoginPage from "../Pages/LoginPage";
import ProductCandelView from "../Pages/ProductCandelView";

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
                        path: '/admin/',
                        element: <Admin />,
                    },
                    {
                        path: '/admin/adminAddProduct/',
                        element: <AdminAddProduct />,
                    },
                    {
                        path: '/user/:id',
                        element: <AdminUser />,
                        loader: fetchUser,
                    },
                    {
                        path: '/login/',
                        element: <LoginPage />,
                        loader: fetchUser,
                    },
                    {
                        path: '/productList/',
                        element: <ProductList />,
                        loader: fetchProducts
                        

                    },

                    {
                        path: "/productInfo/:id",
                        element: <ProductInfo />,
                        loader: fetchProduct,
                    },
                    {
                        path: '/productList/',
                        element: <ProductList />,
                        loader: fetchProducts,
                    },

                    {
                        path: '/productList/velas',
                        element: <ProductCandelView />,
                        loader: fetchProducts,
                    },
                    
                     {
                        path: '/addProduct/',
                        element: <AddProduct />,
                      

                    }, 

                   /* {
                        path: '/productList/sahumerios',
                        element: <ProductList />,
                        loader: fetchProducts,

                    },
                    {
                        path: '/productList/inciensos',
                        element: <ProductList />,
                        loader: fetchProducts,

                    },
                    {
                        path: '/productList/aceites',
                        element: <ProductList />,
                        loader: fetchProducts,

                    },
                    {
                        path: '/productList/minerales',
                        element: <ProductList />,
                        loader: fetchProducts,
                    },
                    {
                        path: '/productList/accesorios',
                        element: <ProductList />,
                        loader: fetchProducts,
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
    const Products = await ProductHandlerAPI.loadProducts();
    return { Products };
}

async function fetchProduct({ params }) {
    const Product = await ProductHandlerAPI.loadProduct(params.id);
    return { Product };
}

async function fetchUsers() {
    const Users = await UserHandlerAPI.loadUsers();
    return { Users };
}

async function fetchUser({ params }) {
    const User = await UserHandlerAPI.loadPUser(params.id);
    return { User };
}

async function fetchPersons() {
    const Persons = await PersonHandlerAPI.loadPersons();
    return { Persons };
}

async function fetchPerson({ params }) {
    const Person = await PersonHandlerAPI.loadPerson(params.id);
    return { Person };
}

async function fetchCustomers() {
    const Customers = await CustomerHandlerAPI.loadCustomers();
    return { Customers };
}

async function fetchCustomer({ params }) {
    const Customer = await CustomerHandlerAPI.loadCustomer(params.id);
    return { Customer };
}

async function fetchCustomerTypes() {
    const CustomerTypes = await CustomerTypeHandlerAPI.loadCustomerTypes();
    return { CustomerTypes };
}

async function fetchCustomerType({ params }) {
    const CustomerType = await CustomerTypeHandlerAPI.loadCustomerType(params.id);
    return { CustomerType };
}

async function fetchOrders() {
    const Orders = await OrderHandlerAPI.loadOrders();
    return { Orders };
}

async function fetchOrder({ params }) {
    const Order = await OrderHandlerAPI.loadOrder(params.id);
    return { Order };
}
