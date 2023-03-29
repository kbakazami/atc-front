import {UserIcon, AtSymbolIcon, PhoneIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import {GirlLocalisation, GuyPlanning} from "../../Components/SvgComponents/SvgComponents";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {createUser} from "../../Services/user.js";
import {Link, useNavigate} from "react-router-dom";

export default function RegisterForm() {
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        last_name: yup.string().required("Veuillez saisir un nom"),
        first_name: yup.string().required("Veuillez saisir un prénom"),
        email: yup.string().email("Veuillez saisir un email valide").required("Veuillez saisir un email"),
        telephone_number: yup.string().matches(/^0[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm, "Veuillez saisir un numéro de téléphone valide").required("Veuillez saisir un numéro de téléphone"),
        password: yup.string().required("Veuillez saisir un mot de passe"),
    });

    const initialValues = {
        last_name: "",
        first_name: "",
        email: "",
        telephone_number: "",
        password: "",
    }

    const { handleSubmit, register, formState: { errors, isSubmitting }, setError, clearErrors } = useForm({
        initialValues,
        resolver: yupResolver(validationSchema),
    });

    const submit = handleSubmit(async(user) => {
        try {
            clearErrors();
            await createUser(user);
            navigate("/login")
        }catch (message) {
            setError("generic", {type: "generic", message})
        }
    });

    return(
        <div className={"relative my-10 px-4"}>
            <GirlLocalisation className={"w-80 xl:w-[482px] hidden lg:block absolute right-2 2xl:right-28 -top-16 z-10"}/>
            <div className={"container border border-primary bg-white w-full lg:w-104 rounded mx-auto p-5 text-center"}>
                <div className={"flex flex-col gap-y-3"}>
                    <h2>Déjà un compte ?</h2>
                    <p className={"italic font-bold"}>
                        Aucun problème, vous pouvez vous <span className={"text-primary"}>connecter !</span>
                    </p>
                    <Link to={"/login"} className={"btn-primary smooth-animation"}>Se connecter</Link>
                </div>
                <form id={"form-register"} className={"mt-8 flex flex-col gap-y-2.5"} onSubmit={submit}>
                    <legend>
                        <h2>Inscription</h2>
                        <p className={"italic font-bold mt-2.5 mb-2.5"}>
                            Inscrivez vous et commencez à <span className={"text-primary"}>louer !</span>
                        </p>
                    </legend>
                    <section className={"flex flex-col sm:flex-row gap-2.5 sm:gap-y-0"}>
                        <div className={"flex flex-col gap-y-2 w-full"}>
                            <div className={"relative"}>
                                <input type="text" placeholder="Nom" {...register("last_name", {required: true, maxLength: 100})} />
                                <UserIcon className={"svg-input"}/>
                            </div>
                            {errors.last_name && <p className="errors-form">Veuillez saisir un nom</p>}
                        </div>
                        <div className={"flex flex-col gap-y-2 w-full"}>
                            <div className={"relative"}>
                                <input type="text" placeholder="Prénom" {...register("first_name", {required: true, maxLength: 100})} />
                                <UserIcon className={"svg-input"}/>
                            </div>
                            {errors.first_name && <p className="errors-form">Veuillez saisir un prénom</p>}
                        </div>
                    </section>
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
                            <input type="tel" placeholder="Numéro de téléphone" {...register("telephone_number", {required: true, pattern: /^0[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm})} />
                            <PhoneIcon className={"svg-input"}/>
                        </div>
                        {errors.telephone_number && <p className="errors-form">
                            Veuillez saisir un numéro de téléphone valide<br/>
                            <span className={"text-secondary italic text-sm"}>Exemple : 09 01 02 03 04</span>
                        </p>}
                    </div>
                    <div className={"flex flex-col gap-y-2"}>
                        <div className={"relative"}>
                            <input type="password" placeholder="Mot de passe" {...register("password", {required: true})} />
                            <LockClosedIcon className={"svg-input"}/>
                        </div>
                        {errors.password && <p className="errors-form">Veuillez saisir un mot de passe</p>}
                    </div>
                    {/*<div className={"flex flex-col gap-y-2"}>*/}
                    {/*    <div className={"relative"}>*/}
                    {/*        <input type="password" placeholder="Confirmation du mot de passe" {...register("password_confirmation", {required: true})} />*/}
                    {/*        <LockClosedIcon className={"svg-input"}/>*/}
                    {/*    </div>*/}
                    {/*    {errors.password_confirmation && <p className="errors-form">Le mot de passe ne correspond pas</p>}*/}
                    {/*</div>*/}
                    {errors.generic && <p className="errors-form">{errors.generic.message}</p>}
                    <button disabled={isSubmitting} className={"btn-primary smooth-animation"} type="submit">
                        S'inscrire
                    </button>
                </form>

            </div>
            <GuyPlanning className={"w-64 xl:w-96 hidden lg:block absolute left-2 2xl:left-28 bottom-10 h-auto"}/>
        </div>
    )
}