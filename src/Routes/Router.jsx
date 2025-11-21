import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout></RootLayout>,
        children:[
            {
                index: true,
                Component: Home              
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader: ()=>fetch('/serviceCenters.json').then(res=>res.json())
            }

        ]
	},
    {
        path: '/',
        Component: AuthLayout,
        children:  [
            {
                path: 'login',
                Component: Login

            },
            {
                path: 'register',
                Component: Register
            },
        ]
    }
]);
