import React from "react";
import { Link } from 'react-router-dom'

const styles = {
    header: {
        height: '150px',
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        fontFamily: 'Courier New',
        fontSize: '20px',
        color: 'black'
    }
}

function Header ({ currentPage, handlePageChange }) {
    return (

        <header className="header" style={styles.header}>  

            <h1>Christopher Kratz</h1>

            <ul className="nav justify-content-end align-items-center">
                <li className="nav-item">
                    <Link to={'/projects'}
                    style={styles.link}>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/contact'}
                    style={styles.link}>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/resume'}
                    style={styles.link}>
                        Resume
                    </Link>
                </li>
            </ul>
        </header>      
    )
}

export default Header