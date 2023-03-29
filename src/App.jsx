import Navbar from './Components/Navbar/Navbar';
import {Outlet, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function App() {
    const user = useLoaderData();
    console.log(user)

    return (
        <>
            <Navbar />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default App
