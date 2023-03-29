import {AtSymbolIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import {GirlLocalisation, GuyPlanning} from "../../Components/SvgComponents/SvgComponents";
import {Link, useNavigate} from "react-router-dom";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {login} from "../../Services/auth.js";

export default function LoginForm() {
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        email: yup.string().email("Veuillez saisir un email valide").required("Veuillez saisir un email"),
        password: yup.string().required("Veuillez saisir un mot de passe"),
    });

    const initialValues = {
        email: "",
        password: "",
    }


    const {  handleSubmit, register, formState: { errors,isSubmitting }, setError, clearErrors } = useForm({
        initialValues,
        resolver: yupResolver(validationSchema),
    });
    const submit = handleSubmit(async(credentials) => {
        try {
            clearErrors();
            await login(credentials);
            navigate("/profile")
        }catch (message) {
            setError("generic", {type: "generic", message})
        }
    });

    return(
        <div className={"relative my-10 px-4"}>
            <GirlLocalisation className={"w-80 xl:w-[482px] hidden lg:block absolute right-2 2xl:right-28 -top-16 z-10"}/>
            <div className={"container border border-primary bg-white w-full lg:w-104 rounded mx-auto p-5 text-center"}>
                <div className={"flex flex-col gap-y-3"}>
                    <h2>Pas de compte ?</h2>
                    <p className={"italic font-bold"}>
                        Aucun problème, vous pouvez en <span className={"text-primary"}>créer un !</span>
                    </p>
                    <Link to={"/register"} className={"btn-primary smooth-animation"}>S'inscrire</Link>
                </div>
                <form id={"form-login"} className={"mt-8 flex flex-col gap-y-2.5"} onSubmit={submit}>
                    <legend>
                        <h2>Connexion</h2>
                        <p className={"italic font-bold mt-2.5 mb-2.5"}>
                            Connectez vous et retrouvez vos <span className={"text-primary"}>informations !</span>
                        </p>
                    </legend>
                    <div className={"flex flex-col gap-y-2"}>
                        <div className={"relative"}>
                            <input type="email" placeholder="Adresse email" {...register("email", {required: true, pattern: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/i})} />
                            <AtSymbolIcon className={"svg-input"}/>
                        </div>
                        {errors.email && <p className="errors-form">
                            Veuillez saisir un email valide<br/>
                            <span className={"text-secondary italic text-sm"}>Exemple : johndoe@gmail.com</span>
                        </p>}
                    </div>
                    <div className={"flex flex-col gap-y-2"}>
                        <div className={"relative"}>
                            <input type="password" placeholder="Mot de passe" {...register("password", {required: true})} />
                            <LockClosedIcon className={"svg-input"}/>
                        </div>
                        {errors.password && <p className="errors-form">Veuillez saisir un mot de passe</p>}
                    </div>
                    {errors.generic && <p className="errors-form">{errors.generic.message}</p>}
                    <button className={"btn-primary smooth-animation"} type="submit">
                        Se connecter
                    </button>
                    <a href={"/"} className={"link smooth-animation mt-2.5"}>Mot de passe oublié ?</a>
                </form>
            </div>
            <GuyPlanning className={"w-64 xl:w-96 hidden lg:block absolute left-2 2xl:left-28 bottom-10 h-auto"}/>
        </div>
    )
}