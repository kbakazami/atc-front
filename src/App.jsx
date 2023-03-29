import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import RegisterForm from "./Form/RegisterForm/RegisterForm.jsx";
import LoginForm from "./Form/LoginForm/LoginForm";
import Listing from "./Pages/Listing/Listing";

function App() {

    return (
        <>
            <header className={"border-b-2 border-tertiary"}>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path={"/register"} element={<RegisterForm />} />
                    <Route path={"/login"} element={<LoginForm />} />
                    <Route path={"/offices"} element={<Listing />} />
                </Routes>
            </main>
        </>
    )
}

export default App
