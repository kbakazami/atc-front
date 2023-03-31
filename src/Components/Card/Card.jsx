import React, {useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {StarIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";

export default function Card({slides, ...props}) {

    const [current, setCurrent] = useState(0);

    slides = slides.split(',');
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={"font-bold font-oswald"}>
                <div className={"relative"}>
                    <div className="absolute flex flex-row justify-between top-1/2 -translate-y-1/2 inset-x-5 z-10 text-secondary">
                        <button className={"btn-slider"} onClick={prevSlide}><ChevronLeftIcon className={"w-5 h-5"}/></button>
                        <button className={"btn-slider"} onClick={nextSlide}><ChevronRightIcon className={"w-5 h-5"}/></button>
                    </div>

                    {slides.map((slide, index) =>
                        (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide} alt='travel image' className={"rounded"}/>
                                )}
                            </div>
                        )
                    )}
                    <div className={"flex flex-row gap-x-1 absolute bottom-4 left-1/2 -translate-x-1/2"}>
                        {slides.map((i, index) => (
                            <div key={index} className={index === current ? "indicator-slider active" : "indicator-slider"}/>
                        ))}
                    </div>

                </div>
                <div className={"flex flex-row justify-between text-primary"}>
                    <Link to={`${props.id}`}>
                        <h4 className={"normal-case hover:underline hover:underline-offset-4"}>{props.city}, {props.country}</h4>
                    </Link>
                    <p className={"flex flex-row gap-x-1.5"}>
                        <StarIcon className={"w-6 h-6"}/>
                        {props.rate}
                    </p>
                </div>
                <div className={"flex flex-row gap-x-2"}>
                    <p>{props.price}€/jour</p>
                </div>

        </div>
    )
}