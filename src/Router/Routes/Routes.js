import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/service`)
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/service`)
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch("http://localhost:5000/services")
            },
        ]
    }
])

export default router;