import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import {rootLoader} from "./Loaders/rootLoader.js";

const LoginForm = lazy(() => import("./Form/LoginForm/LoginForm.jsx"));
const RegisterForm = lazy(() => import("./Form/RegisterForm/RegisterForm.jsx"));
const Profile = lazy(() => import("./Pages/Profile/Profile.jsx"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        // loader: rootLoader,
        children: [
            {
                path: "/login",
                element: <LoginForm />,
            },
            {
                path: "/register",
                element: <RegisterForm />,
            },
            {
                path: "/profile",
                element: <Profile />,
            }
        ],
    },
]);