import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import {rootLoader} from "./Loaders/rootLoader.js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import {officeLoader, officeOneLoader} from "./Loaders/officeLoader.js";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage.jsx"));
const LoginForm = lazy(() => import("./Form/LoginForm/LoginForm.jsx"));
const RegisterForm = lazy(() => import("./Form/RegisterForm/RegisterForm.jsx"));
const Profile = lazy(() => import("./Pages/Profile/Profile.jsx"));
const OfficeDetail = lazy(() => import('./Pages/OfficeDetail/OfficeDetail.jsx'));
const Listing = lazy(() => import('./Pages/Listing/Listing.jsx'));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: rootLoader,
        errorElement: <ErrorPage />,
        children: [
            {
              index: true,
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginForm />,
            },
            {
                path: "offices",
                element: <Listing />,
                loader: officeLoader,
            },
            {
                path: "register",
                element: <RegisterForm />,
            },
            {
                path: "profile",
                element:(
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            {
                path: "offices/:id",
                element: <OfficeDetail />,
                loader: async ({params}) => {
                    return await officeOneLoader(params.id);
                }
            }
        ],
    },
]);