import React, {useEffect, useState} from "react";
import {StarIcon} from "@heroicons/react/20/solid";
import Option from "../../Components/Option/Option";
import {BookOpenIcon, ClockIcon, ComputerDesktopIcon, WifiIcon} from "@heroicons/react/24/outline";
import {Kitchen, Mouse} from "../../Components/SvgComponents/SvgComponents";
import BuyOnline from './Buy_Online.png';
import {useForm} from "react-hook-form";
import {useLoaderData, useParams} from 'react-router-dom';
import {getOneOffice} from "../../Services/office.service.js";

export default function OfficeDetail()
{
    const initialOfficeValue = useLoaderData();
    const [office, setOffice] = useState(initialOfficeValue);


    //
    // let pictures = office.images.split(',');
    // const firstPicture = pictures[0];
    // pictures = pictures.slice(1);
    //
    // const reviews = office.reviews.review;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // try {
        //     if(OfficeService.getCurrentUser())
        //     {
        //         data.office_id = office.id;
        //         // data.user_id = OfficeService.getCurrentUser();
        //         data.user_id = 1;
        //         console.log(data.date, data.duration, data.office_id, data.user_id);
        //     }
        //     else {
        //         alert("Vous devez être connecté pour pouvoir réserver !");
        //         window.location.assign("/register");
        //     }
        // }catch (e) {
        //     console.log(e);
        // }
    };

    return (
        <div className={"container px-4 my-8"}>
            {/*<h1>{office.name}</h1>*/}
            {/*<section className={"font-bold font-oswald flex flex-row gap-x-1 items-center mt-2"}>*/}
            {/*    <p className={"flex flex-row text-primary"}>*/}
            {/*        <StarIcon className={"w-6 h-6"}/> {office.reviewAverage} •*/}
            {/*    </p>*/}
            {/*    <p className={"underline underline-offset-4 hover:text-primary text-secondary cursor-pointer smooth-animation"}>*/}
            {/*        /!*{office.reviews.nb_review} commentaires*!/*/}
            {/*    </p>*/}
            {/*    <p className={"flex flex-row text-primary"}>*/}
            {/*        • {office.city}, {office.country}*/}
            {/*    </p>*/}
            {/*</section>*/}
            {/*<section className={"flex flex-col lg:flex-row w-full gap-2 mt-5"}>*/}
            {/*    <div className={"w-full lg:w-1/2 h-[175px] sm:h-[350px]"}>*/}
            {/*        /!*<img src={firstPicture} alt={"test"} className={"w-full h-full object-cover rounded"}/>*!/*/}
            {/*    </div>*/}
            {/*    <div className={"flex flex-col w-full lg:w-1/2"}>*/}
            {/*        <div className={"grid grid-cols-2 gap-2"}>*/}
            {/*            /!*{*!/*/}
            {/*            /!*    pictures.length > 1 && pictures.map((item, index) => (*!/*/}
            {/*            /!*        <div className={"h-[82px] sm:h-[171px]"} key={index}>*!/*/}
            {/*            /!*            <img src={item} alt={item} className={"w-full h-full object-cover rounded"}/>*!/*/}
            {/*            /!*        </div>*!/*/}
            {/*            /!*    ))*!/*/}

            {/*            /!*}*!/*/}
            {/*            /!*{*!/*/}
            {/*            /!*    pictures.length === 1 && (*!/*/}
            {/*            /!*        <div className={"h-[82px] sm:h-[171px]"}>*!/*/}
            {/*            /!*            <img src={pictures} alt={office.name} className={"w-full h-full object-cover rounded"}/>*!/*/}
            {/*            /!*        </div>*!/*/}
            {/*            /!*    )*!/*/}
            {/*            /!*}*!/*/}
            {/*        </div>*/}
            {/*        /!*{*!/*/}
            {/*        /!*    pictures.length > 4 && (*!/*/}
            {/*        /!*        <button className={"btn-primary pictures mt-2.5"}>Voir plus d'images</button>*!/*/}
            {/*        /!*    )*!/*/}
            {/*        /!*}*!/*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className={"mt-5 lg:mt-10 flex flex-col lg:flex-row gap-x-20"}>*/}
            {/*    <div className={"w-full lg:w-3/5"}>*/}
            {/*        <div className={"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-7 lg:mb-14"}>*/}
            {/*            <p className={"flex flex-col"}>*/}
            {/*                <span className={"text-primary font-bold italic"}>Proposé par {office.ownerLastName} {office.ownerFirstName}</span>*/}
            {/*                /!*<span className={"font-oswald text-secondary"}>Membre depuis {office.user.created_at}</span>*!/*/}
            {/*            </p>*/}
            {/*            <button className={"btn-primary short mt-2 lg:mt-0"}>Contacter l'hôte</button>*/}
            {/*        </div>*/}
            {/*        <h4>Description</h4>*/}
            {/*        <p className={"border border-primary p-5 rounded my-5"}>*/}
            {/*            {office.description}*/}
            {/*        </p>*/}
            {/*        <div className={"relative w-full"}>*/}
            {/*            <h4>Options</h4>*/}
            {/*            <div className={"grid grid-cols-2 gap-5 mt-3 lg:w-1/2"}>*/}
            {/*                <Option isAvailable={office.isFiber} name={"Fibre"}>*/}
            {/*                    <WifiIcon className={"w-6 h-6"}/>*/}
            {/*                </Option>*/}
            {/*                <Option isAvailable={office.isComputer} name={"Ordinateur"}>*/}
            {/*                    <ComputerDesktopIcon className={"w-6 h-6"}/>*/}
            {/*                </Option>*/}
            {/*                <Option isAvailable={office.isScreen} name={"Écran"}>*/}
            {/*                    <ComputerDesktopIcon className={"w-6 h-6"}/>*/}
            {/*                </Option>*/}
            {/*                <Option isAvailable={office.isMouseKeyboard} name={"Clavier & Souris"}>*/}
            {/*                    <Mouse className={"w-6 h-6"}/>*/}
            {/*                </Option>*/}
            {/*                <Option isAvailable={office.isKitchen} name={"Cuisine"}>*/}
            {/*                    <Kitchen className={"w-6 h-6"}/>*/}
            {/*                </Option>*/}
            {/*            </div>*/}
            {/*            <img className={"absolute right-2 top-32 lg:-right-24 lg:top-0 w-52 lg:w-60"} src={BuyOnline} alt={"Louez en ligne"}/>*/}
            {/*        </div>*/}
            {/*        <div className={"mt-48 lg:mt-44"}>*/}
            {/*            <h4>Commentaires</h4>*/}
            {/*            <p className={"flex flex-row gap-x-1"}>*/}
            {/*                <span className={"flex flex-row text-primary"}>*/}
            {/*                    <StarIcon className={"w-6 h-6"}/> {office.reviewAverage} •*/}
            {/*                </span>*/}
            {/*                <span className={"underline underline-offset-4 hover:text-primary text-secondary cursor-pointer smooth-animation"}>*/}
            {/*                    /!*{office.reviews.nb_review} commentaires*!/*/}
            {/*                </span>*/}
            {/*            </p>*/}
            {/*            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-6 mt-4"}>*/}
            {/*                /!*{*!/*/}
            {/*                /!*    reviews.map((item, index)=> (*!/*/}
            {/*                /!*        <div key={index}>*!/*/}
            {/*                /!*            <p className={"flex flex-row items-baseline gap-x-1 mb-2"}>*!/*/}
            {/*                /!*                <span className={"text-primary font-bold italic"}>{item.userFirstName} {item.userLastName} - </span>*!/*/}
            {/*                /!*                <span className={"font-oswald flex flex-row items-center"}>{item.note} <StarIcon className={"w-6 h-6"}/></span>*!/*/}
            {/*                /!*            </p>*!/*/}
            {/*                /!*            <p className={"border border-primary px-5 py-2.5 rounded"}>*!/*/}
            {/*                /!*                <h4>{item.title}</h4>*!/*/}
            {/*                /!*                {item.message}*!/*/}
            {/*                /!*            </p>*!/*/}
            {/*                /!*        </div>*!/*/}
            {/*                /!*    ))*!/*/}
            {/*                /!*}*!/*/}
            {/*            </div>*/}
            {/*            /!*{*!/*/}
            {/*            /!*    reviews.length > 4 && (*!/*/}
            {/*            /!*        <button className={"btn-primary review mt-2.5"}>Voir plus de commentaires</button>*!/*/}
            {/*            /!*    )*!/*/}
            {/*            /!*}*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={"w-full lg:w-2/5 mt-5 lg:mt-0"}>*/}
            {/*        <h4>Réservation</h4>*/}
            {/*        <div className={"border border-primary w-full p-5 mt-5 rounded"}>*/}
            {/*            <h4 className={"normal-case"}>{office.price} € par jour</h4>*/}
            {/*            <form id={"form-booking"} onSubmit={handleSubmit(onSubmit)}>*/}
            {/*                <div className={"flex flex-col gap-y-2 mt-5"}>*/}
            {/*                    <div className={"relative"}>*/}
            {/*                        <input type="date" min={new Date().toISOString().split("T")[0]} {...register("date", {required: true})}/>*/}
            {/*                        <BookOpenIcon className={"svg-input"}/>*/}
            {/*                    </div>*/}
            {/*                    {errors.date && <p className="errors-form">Veuillez choisir une date</p>}*/}
            {/*                </div>*/}
            {/*                <div className={"flex flex-col gap-y-2.5 w-full mt-2.5"}>*/}
            {/*                    <div className={"relative"}>*/}
            {/*                        <select defaultValue={""} {...register("duration", { required: true })}>*/}
            {/*                            <option value={""} disabled>Durée</option>*/}
            {/*                            <option value="morning">Matinée</option>*/}
            {/*                            <option value="afternoon">Après-midi</option>*/}
            {/*                            <option value="day">Journée entière</option>*/}
            {/*                        </select>*/}
            {/*                        <ClockIcon className={"svg-input"}/>*/}
            {/*                    </div>*/}
            {/*                    {errors.duration && <p className="errors-form">Veuillez sélectionner une durée</p>}*/}
            {/*                </div>*/}
            {/*                <button className={"btn-primary smooth-animation mt-6"} type="submit">*/}
            {/*                    Réserver*/}
            {/*                </button>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    )
}