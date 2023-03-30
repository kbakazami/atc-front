import logo from './img/logo.png';
import SearchBar from "../SearchBar/SearchBar";
import {useContext, useState} from "react";
import {Bars3Icon, UserIcon} from "@heroicons/react/20/solid/index.js";
import {Link} from "react-router-dom";
import {AuthContext} from "../../Context/index.js";

function Navbar() {
    const {signout, user} = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false);

    const handleMenu = () => {
        setIsActive(!isActive);
    }

    return(
        <header className={"border-b-2 border-b-tertiary"}>
            <nav className={"flex justify-between items-center mx-auto container"}>
               <div>
                   <a href="/">
                       <img className={"w-24"} src={logo} alt="logo around the corner"/>
                   </a>
               </div>
                <SearchBar />
                <div>
                    <div className={"flex w-24 justify-end cursor-pointer"} onClick={handleMenu}>
                        <Bars3Icon className={"w-12 h-12 text-primary"} />
                    </div>
                    {isActive &&
                    <div className={"absolute border-2 border-primary rounded px-4 py-2 bg-white z-20"}>
                        <ul>
                            <li>
                                <a className={"hover:text-primary smooth-animation"} href="#">Catalogue</a>
                            </li>
                            <li>
                                <Link to={"/register"}>
                                    <span className={"hover:text-primary smooth-animation"}>Inscription</span>
                                </Link>
                            </li>
                            {user ?
                            <li>
                                <Link onClick={() => signout()} to={"/login"}>
                                    <span className={"hover:text-primary smooth-animation"}>Déconnexion</span>
                                </Link>
                            </li>
                            :
                            <li>
                                <Link to={"/login"}>
                                    <span className={"hover:text-primary smooth-animation"}>Connexion</span>
                                </Link>
                            </li>
                            }
                        </ul>
                    </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
