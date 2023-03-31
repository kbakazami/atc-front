import {useContext} from "react";
import {AuthContext} from "../../Context/index.js";
import {UserIcon} from "@heroicons/react/20/solid/index.js";
import {AtSymbolIcon} from "@heroicons/react/20/solid/index.js";
import {PhoneIcon} from "@heroicons/react/20/solid/index.js";
import "./Profile.css";

function Profile(){

    const { user } = useContext(AuthContext);

return(
        <div className={"container mt-14"}>
            <h1 className={"uppercase"}><span className={"text-primary"}>Bienvenue</span> {user.firstName} {user.lastName},</h1>

            <div className={"flex lg:flex-row flex-col w-full mt-14"}>

                <div className={"lg:w-1/2 w-full"}>
                    <h2 className={"upperacase text-center text-primary underline"}>Mes informations</h2>
                    <div className={"flex flex-col items-center"}>
                        <img className={"w-[150px] h-[150px] my-10 rounded-full"} src={"https://via.placeholder.com/150x150"} alt={"avatar"}/>
                        <div className={"flex gap-x-4 w-full"}>
                            <div className={"w-1/2 input-fake"}>
                                <UserIcon className={"icon-input"}/>
                                <p className={"text-center text-primary"}>{user.firstName}</p>
                            </div>
                            <div className={"w-1/2 input-fake"}>
                                <UserIcon className={"icon-input"}/>
                                <p className={"text-center text-primary"}>{user.lastName}</p>
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <div className={"input-fake"}>
                                <AtSymbolIcon className={"icon-input"}/>
                                <p className={"text-center text-primary"}>{user.email}</p>
                            </div>
                            <div className={"input-fake"}>
                                <PhoneIcon className={"icon-input"}/>
                                <p className={"text-center text-primary"}>{user.telephoneNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"lg:w-1/2 w-full"}>
                    <h2 className={"uppercase text-center text-primary underline"}>Mes locations</h2>
                </div>
            </div>
        </div>
    )
}

export default Profile;