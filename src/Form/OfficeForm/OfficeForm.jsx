import {useForm} from "react-hook-form";
import ChillCoworkers from './images/Chill_Coworkers.png';
import Teamwork from './images/Teamwork.png';

export default function OfficeForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            console.log(data.name, data.price, data.surface, data.duration, data.description,);
            console.log(data.street, data.city, data.zip_code, data.country);
        }catch (e) {
            console.log(e);
        }
    };

    return(
        <div className={"relative my-10 px-4"}>
            <img src={ChillCoworkers} alt={"coworkers"} className={"w-80 xl:w-96 2xl:w-[482px] hidden lg:block absolute right-2 -top-16 z-10"}/>
            {/*<ChillCoworkers className={"w-80 xl:w-[482px] hidden lg:block absolute right-2 2xl:right-28 -top-16 z-10"}/>*/}
            <div className={"container border border-primary bg-white w-full lg:w-2/3 xl:w-1/2 rounded mx-auto p-5 text-center"}>
                <h2>Ajout de son bureau</h2>
                <p className={"italic font-bold my-2.5"}>
                    Vous voulez faire louer votre bureau ? <br/><span className={"text-primary"}>Vous êtes au bon endroit !</span>
                </p>
                <form className={"flex flex-col gap-y-2.5"} id={"form-office"} onSubmit={handleSubmit(onSubmit)} encType={"multipart/form-data"}>
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
                            <select defaultValue={""} {...register("duration", { required: true })}>
                                <option value={""} disabled>Durée</option>
                                <option value="morning">Matinée</option>
                                <option value="afternoon">Après-midi</option>
                                <option value="day">Journée entière</option>
                            </select>
                            {errors.duration && <p className="errors-form">Veuillez sélectionner une durée</p>}
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
                    <textarea rows={"5"} placeholder={"Description"} {...register("description", {required: true})}/>
                    <input type={"file"} multiple accept={"image/jpeg, image/png"} {...register("image", {required: true})}/>
                    <button className={"btn-primary smooth-animation"} type="submit">
                        Ajouter le bureau
                    </button>
                </form>
            </div>
            <img src={Teamwork} alt={"Teamwork"} className={"w-64 xl:w-96 hidden lg:block absolute left-2 2xl:left-10 bottom-0 h-auto"}/>
        </div>
    )
}