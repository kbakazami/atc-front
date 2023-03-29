import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import RegisterForm from "./Form/RegisterForm/RegisterForm.jsx";
import LoginForm from "./Form/LoginForm/LoginForm";

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
                </Routes>
            </main>
        </>
    )
}

export default App
