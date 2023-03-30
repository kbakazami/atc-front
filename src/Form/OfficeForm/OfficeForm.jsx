import {useForm} from "react-hook-form";
import ChillCoworkers from './images/Chill_Coworkers.png';
import Teamwork from './images/Teamwork.png';
import CheckboxOption from "../../Components/CheckboxOption/CheckboxOption";

export default function OfficeForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            console.log(
                data.name,
                data.price,
                data.surface,
                data.is_fiber,
                data.is_computer,
                data.is_screen,
                data.is_mouse_keyboard,
                data.is_kitchen,
                data.image,
                data.description);
            console.log(data.street, data.city, data.zip_code, data.country);
        }catch (e) {
            console.log(e);
        }
    };
    return(
        <div className={"relative my-10 px-4"}>
            <img src={ChillCoworkers} alt={"coworkers"} className={"w-80 xl:w-96 2xl:w-[482px] hidden lg:block absolute right-2 -top-16 z-10"}/>
            <div className={"container border border-primary bg-white w-full lg:w-2/3 xl:w-1/2 rounded mx-auto p-5 text-center"}>
                <h2>Ajout de son bureau</h2>
                <p className={"italic font-bold my-2.5"}>
                    Vous voulez faire louer votre bureau ? <br/><span className={"text-primary"}>Vous êtes au bon endroit !</span>
                </p>
                <form className={"flex flex-col gap-y-2.5"} id={"form-office"} onSubmit={handleSubmit(onSubmit)}>
                    <section className={"flex flex-col sm:flex-row gap-2.5 sm:gap-y-0"}>
                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <input type="text" placeholder="Nom" {...register("name", {required: true})} />
                            {errors.name && <p className="errors-form">Veuillez saisir un nom</p>}
                        </div>
                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <input type="number" placeholder="Surface en m²" {...register("surface", {required: true})} />
                            {errors.surface && <p className="errors-form">Veuillez saisir une surface (en m²)</p>}
                        </div>
                    </section>
                    <section className={"flex flex-col sm:flex-row gap-2.5 sm:gap-y-0"}>
                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <input type="number" placeholder="Prix à la journée" {...register("price", {required: true})} />
                            {errors.price && <p className="errors-form">Veuillez saisir un prix</p>}
                        </div>

                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <div className={"flex flex-row flex-wrap gap-x-3 w-full border border-primary rounded p-2 pl-5"}>
                                {/* ICI CE QUE J4AI ESSAY2 DE FAIRE AVEC LES COMPONENTS MAIS C KC IL ME DISAIT QUE JE PEUX PAS LUI PASSER
                                    ...register EN PROPS CHILDREN */}
                                {/*<CheckboxOption id={"is_fiber"} name={"Fibre"}>*/}
                                {/*    {...register("is_fiber")}*/}
                                {/*</CheckboxOption>*/}
                                {/*<CheckboxOption id={"is_computer"} name={"Ordinateur"}>*/}
                                {/*    {...register("is_computer")}*/}
                                {/*</CheckboxOption>*/}
                                {/*<CheckboxOption id={"is_screen"} name={"Écran"}>*/}
                                {/*    {...register("is_screen")}*/}
                                {/*</CheckboxOption>*/}
                                {/*<CheckboxOption id={"is_mouse_keyboard"} name={"Clavier & souris"}>*/}
                                {/*    {...register("is_mouse_keyboard")}*/}
                                {/*</CheckboxOption>*/}
                                {/*<CheckboxOption id={"is_kitchen"} name={"Cuisine"}>*/}
                                {/*    {...register("is_kitchen")}*/}
                                {/*</CheckboxOption>*/}

                                <label className={"flex flex-row items-center gap-x-1"} htmlFor={"is_fiber"}>
                                    <input id={"is_fiber"} className={"w-auto"} type="checkbox" {...register("is_fiber")}/>
                                    <span>Fibre</span>
                                </label>
                                <label className={"flex flex-row items-center gap-x-1"} htmlFor={"is_computer"}>
                                    <input id={"is_computer"} className={"w-auto"} type="checkbox" {...register("is_computer")}/>
                                    <span>Ordinateur</span>
                                </label>
                                <label className={"flex flex-row items-center gap-x-1"} htmlFor={"is_screen"}>
                                    <input id={"is_screen"} className={"w-auto"} type="checkbox" {...register("is_screen")}/>
                                    <span>Écran</span>
                                </label>
                                <label className={"flex flex-row items-center gap-x-1"} htmlFor={"is_mouse_keyboard"}>
                                    <input id={"is_mouse_keyboard"} className={"w-auto"} type="checkbox" {...register("is_mouse_keyboard")}/>
                                    <span>Clavier & souris</span>
                                </label>
                                <label className={"flex flex-row items-center gap-x-1"} htmlFor={"is_kitchen"}>
                                    <input id={"is_kitchen"} className={"w-auto"} type="checkbox" {...register("is_kitchen")}/>
                                    <span>Cuisine</span>
                                </label>
                            </div>
                        </div>
                    </section>
                    <section className={"flex flex-col sm:flex-row gap-2.5 sm:gap-y-0"}>
                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <input type="text" placeholder="Rue" {...register("street", {required: true})} />
                            {errors.street && <p className="errors-form">Veuillez ajouter une rue</p>}
                        </div>
                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <input type="text" placeholder="Ville" {...register("city", {required: true})} />
                            {errors.city && <p className="errors-form">Veuillez ajouter une ville</p>}
                        </div>
                    </section>

                    <section className={"flex flex-col sm:flex-row gap-2.5 sm:gap-y-0"}>
                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <input type="number" placeholder="Code Postal" {...register("zip_code", {required: true})} />
                            {errors.zip_code && <p className="errors-form">Veuillez ajouter un code postal</p>}
                        </div>
                        <div className={"flex flex-col gap-y-2.5 w-full"}>
                            <input type="text" placeholder="Pays" {...register("country", {required: true})} />
                            {errors.country && <p className="errors-form">Veuillez ajouter un pays</p>}
                        </div>
                    </section>
                    <textarea rows={"5"} placeholder={"Description"} {...register("description")}/>
                    <input type={"file"} multiple accept={"image/jpeg, image/png"} {...register("image")}/>
                    <button className={"btn-primary smooth-animation"} type="submit">
                        Ajouter le bureau
                    </button>
                </form>
            </div>
            <img src={Teamwork} alt={"Teamwork"} className={"w-64 xl:w-96 hidden lg:block absolute left-2 2xl:left-10 bottom-0 h-auto"}/>
        </div>
    )
}