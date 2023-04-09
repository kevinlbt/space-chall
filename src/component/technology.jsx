import React, { useState } from "react";
import NavBar from './navbar'
import Data from '../data'

function TechnologyVehicle ({data, handleClick, indexTech}) {

    return  <section className="flex flex-col justify-center items-center">
                <h1 className="my-3 sm:self-start sm:m-8 lg:mx-28"><span>03</span>space lauch 101</h1>
                <div className="lg:grid lg:grid-cols-5 lg:justify-items-stretch lg:mb-16">
                    <picture className="lg:order-3 lg:ml-24 lg:col-span-2">
                        <source srcset={data.images.portrait} alt={data.name} media="(min-width: 1024px)"/>
                        <source srcset={data.images.landscape} alt={data.name} media="(max-width: 1024px)"/>
                        <img className="my-4 w-full rounded" src={data.images.landscape} alt={data.name} />
                    </picture>
                    <div className="lg:order-1 rond my-4 flex justify-center items-center lg:flex-col">
                        <button id="0" onClick={handleClick} className={`rounded-full bg-transparent border border-white w-12 h-12 lg:w-16 lg:h-16 text-white text-lg m-3 ${indexTech === '0' ? 'active-tech' : null}`}>1</button>
                        <button id="1" onClick={handleClick} className={`rounded-full bg-transparent border border-white w-12 h-12 lg:w-16 lg:h-16 text-white text-lg m-3 ${indexTech === '1' ? 'active-tech' : null}`}>2</button>
                        <button id="2" onClick={handleClick} className={`rounded-full bg-transparent border border-white w-12 h-12 lg:w-16 lg:h-16 text-white text-lg m-3 ${indexTech === '2' ? 'active-tech' : null}`}>3</button>
                    </div>
                    <div className="lg:order-2 text-tech flex flex-col justify-center mx-auto items-center sm:w-2/3 lg:col-span-2 lg:w-4/5 lg:items-start">
                        <h2>the terminology ...</h2>
                        <h3>{data.name}</h3>
                        <p>{data.description} </p>
                    </div>
                </div>
            </section>
}


export default function Technology () {

    const [indexTech, setIndextech] = useState("0")
    let techData = Data.technology[indexTech]

    function handleClick (e) {
        setIndextech(e.target.id)
    }

    return  <div className="techno h-screen sm:h-auto">
                <NavBar active="technology" />
                <TechnologyVehicle handleClick={handleClick} data={techData} indexTech={indexTech} />
            </div>
}