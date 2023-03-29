import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import MainLaylout from "../layout/MainLaylout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLaylout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/details/:id',
                element:<ProductDetails/>
            }
        ]
    }
]);