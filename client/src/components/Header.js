import React from "react";
import { Link } from 'react-router-dom'

const styles = {
    name: {
        paddingRight: '85px',
        fontSize: '40px'
    },
    header: {
      height: '10vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: '0',
      boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',
      zIndex: '400'
    },
    link: {
        fontFamily: 'Courier New',
        fontSize: '20px',
        color: 'black',
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

            <div style={styles.name}>Christopher Kratz</div>

            <div style={styles.navItems} className="links">
                <Link to={'/'}
                    style={styles.link}>
                    About
                </Link>

                <Link to={'/projects'}
                    style={styles.link}>
                    Portfolio
                </Link>


                <Link to={'/contact'}
                    style={styles.link}>
                    Contact
                </Link>


                <Link to={'/resume'}
                    style={styles.link}>
                    Resume
                </Link>
            </div>
        </div>
    )
}

