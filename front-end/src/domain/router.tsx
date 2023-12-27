import { createBrowserRouter, redirect } from "react-router-dom"; 
import MainScreen from "../pages/MainScreen";
import App from "../App"
import DogDetailScreen from "../pages/DogDetailScreen";

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
				path: "/dogs/:dogId",
				element: <DogDetailScreen />,
			},
			// {
			// 	path: "dogs/:id/edit",
			// 	element: <EditDogScreen />,
			// },
			// {
			// 	path: "add",
			// 	element: <AddDogScreen />,
			// },
            // {
			// 	path: "about",
			// 	element: <AboutScreen />,
			// },
		],
	}
]);