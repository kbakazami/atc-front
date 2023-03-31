import Card from "../../Components/Card/Card";
import {useState} from "react";
import CustomerPicture from './images/Customer.png';
import {useLoaderData} from "react-router-dom";


export default function Listing(){
    const initialOffices = useLoaderData();
    console.log(initialOffices)

    const [offices, setOffices] = useState(initialOffices);

    return(
        <div className={"flex flex-col my-8 container"}>
            <div className={"relative mb-[160px]"}>
                <h1>Trouvez votre <br/> <span className={"ml-10 sm:ml-36 text-primary"}>bien être</span></h1>
                <div className={"italic"}>
                    TODO : ICI SERONT AFFICHÉ LES FITLRES
                </div>
                <img src={CustomerPicture} alt={"Trouvez votre bien être"} className={"absolute right-0 top-14 sm:top-0 w-32 sm:w-64"}/>
            </div>
            <div className={"flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"}>
                {offices.map((item, index) => (
                    <Card key={index}
                          id={item.id}
                          slides={item.images}
                          city={item.city}
                          country={item.country}
                          price={item.price}
                          rate={item.reviewAverage}
                    />
                ))}
            </div>
        </div>

    )
}