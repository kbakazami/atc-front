import logo from './img/logo.png';
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import {useState} from "react";
import {Bars3Icon, UserIcon} from "@heroicons/react/20/solid/index.js";
import {Link} from "react-router-dom";

function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const handleMenu = () => {
        setIsActive(!isActive);
    }

    return(
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
                        <li>
                            <Link to={"/login"}>
                            <span className={"hover:text-primary smooth-animation"}>Connexion</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;
