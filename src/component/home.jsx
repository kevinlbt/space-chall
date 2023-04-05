import React from "react";
import NavBar from './navbar'

export default function Home () {

    return <div className="home h-screen">
        <NavBar active="home" />
        <section className="text-home mt-6 pb-12 flex flex-col justify-center items-center sm:mt-24 lg:flex-row lg:justify-around lg:mt-48">
            <div className="flex flex-col justify-center items-center lg:w-1/3 lg:items-start">
                <h1 className="sm:m-3">So, you want to travel to</h1>
                <h2>Space</h2>
                <p className="leading-7 font-thin m-7 sm:m-3">Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <a href="/destination"><button className="explore w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 mt-10 sm:mt-16 mb-5 rounded-full bg-white">Explore</button></a>
        </section>
    </div>
}