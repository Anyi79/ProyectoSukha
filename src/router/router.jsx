import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Landing from "../Pages/Landing";
import NotFound from "../Pages/NotFound";
import ProductList from "../Pages/ProductList";
import AdminAddProduct from "../Pages/AdminAddProduct";
import Admin from "../Pages/Admin";
import AdminUser from "../Pages/AdminUser";
import LoginPage from "../Pages/LoginPage";

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
                        loader: fetchProducts,
                    },
                    {
                        path: '/productList/velas',
                        element: <ProductList />,
                        loader: fetchProducts,

                    },
                    {
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
    const Persons = await PersonsHandlerAPI.loadPersons();
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
