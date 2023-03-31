import HomeOffice from './images/HomeOffice.png';
import {Link} from "react-router-dom";

function HomePage(){
    return (
        <div className={"container px-4 my-8 text-center"}>
            <section className={"flex flex-col lg:flex-row items-center"}>
            <img className={"w-full lg:w-1/2"} src={HomeOffice} alt={"Travail depuis la maison"}/>
            <h1 className={"flex flex-col lg:ml-auto"}>
                Vous voulez un <br/><span className={"lg:ml-16"}>peu de <span className={"text-primary"}>fraicheur ?</span></span>
                <span className={"mt-10"}>Vous êtes au bon <br/><span className={"text-primary lg:ml-56"}>endroit</span> !</span>
            </h1>
            </section>
            <section className={"font-bold my-16 lg:mt-0"}>
                <h2>Concept</h2>
                <p className={"mt-5"}>
                    Bienvenue sur <span className={"text-primary"}>Around the corner</span>
                <br/>
                    Le site web qui vous permet de ne plus vous sentir seul lorsque vous êtes en télétravail !
                </p>
            </section>
            <section>
                <h2 className={"text-primary"}>Inscrivez vous et réservez dès maintenant</h2>
                <Link className={"btn-primary uppercase homepage mt-4"} to={"/register"}>
                    Je m'inscris
                </Link>
            </section>
        </div>
    )
}

export default HomePage;