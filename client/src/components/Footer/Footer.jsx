import React from 'react'
import "./Footer.css";
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="  bg-gray-800 text-white p-1 mt-auto flex justify-evenly items-center font-serif ">
            <div className="flex flex-row align-middle m-3 ">
                <a href="https://github.com/bbkbyti" target="_blank" rel="noreferrer" className="transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                    <FaGithub className="mx-8" size={30} />
                    <p>©Babak B</p>
                </a>
               

                <a href="https://github.com/luzmlx" target="_blank" rel="noreferrer" className="transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                    <FaGithub className="mx-8"  size={30}/>
                    <p>©Luz L</p>
                </a>

                <a href="https://github.com/andersonnash" target="_blank" rel="noreferrer" className="transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                    <FaGithub className="mx-8"  size={30}/>
                    <p>©Nash A</p>
                </a>

                <a href="https://github.com/tafariberesford" target="_blank" rel="noreferrer" className="transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                    <FaGithub className="mx-8"  size={30}/>
                    <p>©Tafaro B</p>
                </a>

            </div>
        </div>
    )
}
