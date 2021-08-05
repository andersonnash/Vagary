import React from 'react'
import "./Footer.css";
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://github.com/bbkbyti" target="_blank" rel="noreferrer">
                    <FaGithub size={30} />
                </a>

                <a href="https://github.com/luzmlx" target="_blank" rel="noreferrer">
                    <FaGithub size={30}/>
                </a>

                <a href="https://github.com/andersonnash" target="_blank" rel="noreferrer">
                    <FaGithub size={30}/>
                </a>

                <a href="https://github.com/tafariberesford" target="_blank" rel="noreferrer">
                    <FaGithub  size={30}/>
                </a>

            </div>
        </div>
    )
}
