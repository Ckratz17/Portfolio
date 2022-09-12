import React from "react";
import { Link } from 'react-router-dom'
import '../styles/header.css'

const styles = {
    name: {
        color: 'red',
        fontSize: '40px'
    },
    header: {
      height: '20vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: '0',
      boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',
      zIndex: '400',
      backgroundColor: 'black'
    },
    link: {
        fontSize: '20px',
        color: 'white',
        padding: '20px',
        textAlign: 'right'
    },
    navItems: {
        textAlign: 'right',
        display: 'flex',
        listStyleType: 'none', 
    }
}

export default function Header() {
    return (

        <div className="header" style={styles.header}>
            <div className="typewriter">
                <h2 style={styles.name}>Christopher Kratz</h2>
            </div>

            <div style={styles.navItems} className="links">
                <Link to={'/'}
                    style={styles.link}>
                    About
                </Link>

                <Link to={'/projects'}
                    style={styles.link}>
                    Portfolio
                </Link>

                <Link to={'/resume'}
                    style={styles.link}>
                    Resume
                </Link>
            </div>
        </div>
    )
}

