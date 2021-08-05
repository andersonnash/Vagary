import React from 'react'
import "./Footer.css";
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="  bg-gray-800 text-white p-1 mt-auto flex justify-evenly items-center font-serif">
            <div className="flex flex-row align-middle m-3">
                <a href="https://github.com/bbkbyti" target="_blank" rel="noreferrer">
                    <FaGithub className="mx-8" size={30} />
                </a>

                <a href="https://github.com/luzmlx" target="_blank" rel="noreferrer">
                    <FaGithub className="mx-8"  size={30}/>
                </a>

                <a href="https://github.com/andersonnash" target="_blank" rel="noreferrer">
                    <FaGithub className="mx-8"  size={30}/>
                </a>

                <a href="https://github.com/tafariberesford" target="_blank" rel="noreferrer">
                    <FaGithub className="mx-8"  size={30}/>
                </a>

            </div>
        </div>
    )
}
