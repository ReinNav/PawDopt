import { createBrowserRouter, redirect } from "react-router-dom"; 
import MainScreen from "../pages/MainScreen";
import App from "../App"
import DogDetailScreen from "../pages/DogDetailScreen";
import EditDogScreen from "../pages/EditDogScreen";
import CreateDogScreen from "../pages/CreateDogScreen";
import Imprint from "../components/Imprint";
import About from "../components/About";
import DeleteConfirmScreen from "../pages/DeleteConfirmScreen";
import LoginScreen from "../pages/LoginScreen";
import LogoutConfirmScreen from "../pages/LogoutConfirmScreen";
import ProtectedRoute from "./ProtectedRoute";
import ErrorScreen from "../pages/ErrorScreen";

export const router = createBrowserRouter([ 
	{ 
		path: "/",                
		element: <App />,
		children: [
			{
				index: true,
				loader: () => redirect("/main"),
			},
			{
				path: "main",
				element: <MainScreen />, 
			},
			{
				path: "/dogs/:dogId/detail",
				element: <DogDetailScreen />,
			},
			{
				path: "dogs/:dogId/edit",
				element: <ProtectedRoute component={EditDogScreen} />,
			},
			{
				path: "dogs/add",
				element: <ProtectedRoute component={CreateDogScreen} />,
			},
			{
				path: "dogs/:dogId/delete",
				element: <ProtectedRoute component={DeleteConfirmScreen} />,
			},
            {
				path: "/imprint",
				element: <Imprint />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/login",
				element: <LoginScreen />,
			},
			{
				path: "/logoutconfirm",
				element: <LogoutConfirmScreen />,
			},
			{
				path: "*",
				element: <ErrorScreen />,
			},
			
			
		],
	}
]);