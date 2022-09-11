import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer () {
    const styles = {
        footerStyle: {
            bottom: '0',
            display: 'flex',
            justifyContent: "center",
            height: '25%',  
            backgroundColor: 'black',
            paddingTop: '100px' 
        },
        footerText: {
            color: 'white',
            fontSize: '15px',
            textAlign: 'center',
            padding: '0px 30px'
        },
        footerIcon: {
            height: '40px',
            marginTop: '7px',
            minWidth: '100px'
        }
    }
    return (
        <footer style={styles.footerStyle}>
            <div>
                <a href='https://github.com/Ckratz17'><FaGithub style={styles.footerIcon} /></a>
            </div>
            <div>
                <h1 style={styles.footerText}>Designed and Developed by Chris Kratz</h1>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/christopher-kratz-2a0714247/'><FaLinkedin style={styles.footerIcon} /></a>
            </div>
        </footer>
    )
}