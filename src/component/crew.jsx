import React, { useState } from "react";
import NavBar from './navbar'
import Data from '../data'

function CrewMember ({data, handleClick, indexCrew}) {

    return  <section className="flex flex-col justify-center items-center lg:flex-row lg:mx-auto lg:w-10/12 lg:items-start">
                <div className="flex flex-col justify-center items-center bloc-img order-2 sm:order-3">
                    <img className="m-7" src={data.images.webp} alt="crew member"/>  
                </div> 
                <div className="crew-bio flex flex-col justify-around items-center lg:justify-around lg:mt-28">
                    <h1 className="order-1 my-3 sm:self-start sm:m-8 lg:mx-0"><span>02</span>meet your crew</h1> 
                    <div className="flex flex-col justify-center items-center order-2 sm:order-2 lg:items-start">
                        <ul className="flex justify-center slider order-2">
                            <li id="0" onClick={handleClick} className={indexCrew === "0" ? "active-slider" : null}></li>
                            <li id="1" onClick={handleClick} className={indexCrew === "1" ? "active-slider" : null}></li>
                            <li id="2" onClick={handleClick} className={indexCrew === "2" ? "active-slider" : null}></li>
                            <li id="3" onClick={handleClick} className={indexCrew === "3" ? "active-slider" : null}></li>
                        </ul>
                        <div className="my-8 flex flex-col justify-center items-center sm:order-1 lg:items-start">
                            <h2 className="sm:m-1">{data.role}</h2>
                            <h3 className="sm:m-1">{data.name}</h3>
                            <p className="sm:w-2/3 lg:w-4/5">{data.bio}</p>
                        </div>
                    </div>
                </div>
            </section>
}


export default function Crew () {

    const [indexCrew, setIndexCrew] = useState("0")
    let crewData = Data.crew[indexCrew]

    function handleClick (e) {
        setIndexCrew(e.target.id)
    }
    return  <div className="crew h-screen sm:h-auto lg:h-auto lg:pb-48">
                <NavBar active="crew" />
                <CrewMember handleClick={handleClick} data={crewData} indexCrew={indexCrew} />
            </div>
}