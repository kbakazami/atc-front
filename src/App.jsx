import Navbar from './Components/Navbar/Navbar';
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";

function App() {
    return (
        <>
          <AuthProvider>
              <Navbar />
              <main>
                  <Suspense fallback={<div>Loading...</div>}>
                      <Outlet />
                  </Suspense>
              </main>
          </AuthProvider>
        </>
    )
}

export default App
