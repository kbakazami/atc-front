import Card from "../../Components/Card/Card";
import OfficeService from '../../Services/office.service';
import {useEffect, useState} from "react";

export default function Listing(){
    const [offices, setOffices] = useState(OfficeService.getOffices());

    return(
        <div className={"grid grid-cols-4 gap-5"}>
            {offices.map((item) => (
                <Card slides={item.image}
                      city={item.address.city}
                      country={item.address.country}
                      disponibility={item.duration}
                      price={item.price}
                      rate={item.review}
                />
            ))}
        </div>
    )
}