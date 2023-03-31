import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../../Context/index.js";
import {useState} from "react";
import {login, logout} from "../../Services/auth.js";

function AuthProvider({ children }) {
    const initialUser = useLoaderData();
    const [user, setUser] = useState(initialUser);

    async function auth(credentials) {
        const newUser = await login(credentials);
        setUser(newUser);
    }

    async function signout() {
        await logout();
        setUser(null);
    }

    return <AuthContext.Provider value={{
        user,
        auth,
        signout
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;