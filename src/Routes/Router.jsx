import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout></RootLayout>,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: '/be-a-rider',
                element: <PrivateRoute><Rider></Rider></PrivateRoute>
			},
			{
				path: 'send-parcel',
				element:<PrivateRoute>
					<SendParcel></SendParcel>
					</PrivateRoute>,
				loader: () => fetch('/serviceCenters.json').then(res => res.json()),
			},					
			{
				path: 'coverage',
				Component: Coverage,
				loader: () => fetch('/serviceCenters.json').then(res => res.json()),
			},
		],
	},
	{
		path: '/',
		Component: AuthLayout,
		children: [
			{
				path: 'login',
				Component: Login,
			},
			{
				path: 'register',
				Component: Register,
			},
		],
	},
	{
		path:'dashboard',
		element: <PrivateRoute>
			<DashBoardLayout></DashBoardLayout>
		</PrivateRoute>,
		children:[
			{
				path: "my-parcels",
				Component: MyParcels
			}
		]
	}
]);
