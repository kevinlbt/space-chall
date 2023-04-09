import React from "react";

export default function NavBar ({active}) {

    
    function handleClick() {
        let menu = document.getElementById('menu');
        menu.classList.add("active");
    }

    function handleCross() {
        let menu = document.getElementById('menu');
        menu.classList.remove("active");
    }

    return <nav className="nav flex justify-between">
        <svg className="m-7 lg:m-12" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        <ul id="menu" className="menu w-2/3 h-screen sm:w-auto sm:h-auto sm:static sm:flex sm:justify-end sm:items-center fixed backdrop-blur-xl lg:mt-7">
            <li className="sm:hidden"><i onClick={handleCross} className="fa-solid fa-xmark"></i></li>
            <a href="/"><li className={active === "home" ? "active-menu" : null}>Home</li></a>
            <a href="/destination"><li className={active === "destination" ? "active-menu" : null}>Destination</li></a>
            <a href="/crew"><li className={active === "crew" ? "active-menu" : null}>Crew</li></a>
            <a href="/technology"><li className={active === "technology" ? "active-menu" : null}>Technology</li></a>
        </ul>
        <svg onClick={handleClick} className="sm:hidden mt-8 mr-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    </nav>
}
