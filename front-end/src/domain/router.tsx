import { createBrowserRouter, redirect } from "react-router-dom"; 
import MainScreen from "../pages/MainScreen";
import App from "../App"
import DogDetailScreen from "../pages/DogDetailScreen";
import EditDogScreen from "../pages/EditDogScreen";
import CreateDogScreen from "../pages/CreateDogScreen";

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
				element: <EditDogScreen />,
			},
			{
				path: "dogs/add",
				element: <CreateDogScreen />,
			},
            // {
			// 	path: "about",
			// 	element: <AboutScreen />,
			// },
		],
	}
]);