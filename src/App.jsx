import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import RegisterForm from "./Form/RegisterForm/RegisterForm.jsx";
function App() {

    return (
        <>
            <header className={"border-2 border-tertiary"}>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path={"/register"} element={<RegisterForm />} />
                </Routes>
            </main>
        </>
    )
}

export default App
