import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer () {
    const styles = {
        footerStyle: {
            bottom: '0',
            display: 'flex',
            justifyContent: "space-between",
            height: '10%',
            fontSize: '25px',    
        }
    }
    return (
        <footer style={styles.footerStyle}>
            <div>
                <a href='https://github.com/Ckratz17'><FaGithub /></a>
            </div>
            <div>
                <h1>Designed and Created by Chris Kratz</h1>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/christopher-kratz-2a0714247/'><FaLinkedin /></a>
            </div>
        </footer>
    )
}