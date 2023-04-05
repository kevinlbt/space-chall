import React, { useState } from "react";
import NavBar from './navbar'
import Data from '../data'


function Planete ({data, handleClick}) {

    const isActive = data.name;
    
    return  <div className="flex flex-col justify-center items-center mx-6 my-2 lg:flex-row lg:w-full lg:mb-12">
                <div className="lg:w-2/4 sm:w-full">
                    <h1 className="sm:text-left sm:mt-5 lg:pl-16 lg:my-16"><span>01</span> Pick your destination </h1>
                    <img className="m-5 sm:mt-12 sm:mx-auto" src={data.images.webp} alt={data.name}></img>
                </div>
                <section className="lg:w-1/3">
                    <article className="menu-dest flex flex-col justify-center items-center lg:items-start lg:mt-16">
                        <ul className="text-white flex">
                            <li id="0" onClick={handleClick} className={isActive === "Moon" ? "active" : null}>moon</li>
                            <li id="1" onClick={handleClick} className={isActive === "Mars" ? "active" : null}>mars</li>
                            <li id="2" onClick={handleClick} className={isActive === "Europa" ? "active" : null}>europa</li>
                            <li id="3" onClick={handleClick} className={isActive === "Titan" ? "active" : null}>titan</li>
                        </ul>
                        <h2 className="text-white">{data.name}</h2>
                        <p className="text-white text-center leading-7 font-thin sm:w-3/4 sm:my-3 lg:w-full lg:text-left lg:leading-8">{data.description}</p>
                    </article>
                    <div className="line"></div>
                    <div className="infos text-white m-5 text-center sm:flex sm:justify-center lg:ml-0 lg:text-left">
                        <div className="sm:m-4 lg:ml-0 lg:mr-12">
                            <h3>avg. distance</h3>
                            <p>{data.distance}</p>
                        </div>
                        <div className="sm:m-4 lg:ml-0">
                            <h3>est. travel time</h3>
                            <p>{data.travel}</p>
                        </div>
                    </div>
                </section>
            </div>
}


export default function Destination () {

    const[indexPlanete, setIndexPlanete] = useState(0)

    let planeteData = Data.destinations[indexPlanete]

    function handleClick (e) {
        let index = e.target.id;
        setIndexPlanete(index);
    }

    return <div className="destination pb-4">
        <NavBar active="destination" />
        <Planete data={planeteData} handleClick={handleClick} />        
    </div>
}