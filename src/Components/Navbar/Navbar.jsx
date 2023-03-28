import logo from './img/logo.png';
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import {useState} from "react";
import {Bars3Icon, UserIcon} from "@heroicons/react/20/solid/index.js";

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
                <div className={"absolute border-2 border-primary rounded px-4 py-2 bg-white z-10"}>
                    <ul>
                        <li>
                            <a className={"hover:text-primary transition duration-300 ease-in-out"} href="#">Catalogue</a>
                        </li>
                        <li>
                            <a className={"hover:text-primary transition duration-300 ease-in-out"} href="#">Inscription</a>
                        </li>
                        <li>
                            <a className={"hover:text-primary transition duration-300 ease-in-out"} href="#">Connexion</a>
                        </li>
                    </ul>
                </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;
