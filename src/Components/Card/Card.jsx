import React, {useState} from 'react';

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
        <div>
            <div className="carousel">
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </div>
            {slides.map((slide, index) =>
                (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide} alt='travel image' className={index}/>
                        )}
                    </div>
                )
            )}

            <div className={"flex flex-row justify-between"}>
                <p>{props.city},{props.country}</p>
                <p>STARS</p><p>{props.rate}</p>
            </div>
            <div className={"flex flex-row justify-between"}>
                <p>{props.disponibility}</p> |
                <p>{props.price}</p>
            </div>
        </div>
    )
}