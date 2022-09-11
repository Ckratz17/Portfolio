import React from 'react'
import selfie from '../images/profilePic.jpeg'
import '../styles/about.css'
export default function About () {

    const styles = {
        image: {
            width: "408px",
            height: '537px',
            margin: '25px'
        },
        bio: {
            fontFamily: 'Cambira',
            fontSize: '25px',
            color: 'white',
            padding: '10px 60px',
            marginBottom: '100px'
        },
        bioTitle: {
            fontSize: '35px',
            color: 'white',
            padding: '10px 60px'
        },
        display: {
            display: 'flex',
            backgroundColor: 'black'
        }
    }

    return(
       <div style={styles.display} className="aboutMe">
            <div className="image">
                <img style={styles.image} className="selfie" src={selfie} alt=""></img>
            </div>
            <div>
                <p style={styles.bioTitle}>Full Stack Web Developer</p>
                <br></br>
                <p style={styles.bio} className="bio">
                Full-stack web developer with a passion for building fun, interactive web pages. Having recently earned a certificate in full stack development from the UCF Coding Bootcamp, I now have newly developed skills for the front end such as javascript, HTML, CSS, and React.js. As well as having freshly developed skills for the backend such as Express, Sequalize, DBeaverDB, and MongoDB. My goal for each project is to build a fast, responsive, and interactive webpage with a design and layout that allows for the best user experience. I have recently worked on a project that tracks a user’s carbon footprint by storing the user’s information in a database, and then pulling that information back into an algorithm to calculate the user’s footprint. I worked on another team to create a MERN app that creates business cards for employers and share their digital business cards with other applications. I am highly motivated to be able to sharpen my skills and contribute to a team to build quality web pages.
                </p>
            </div>
        </div>
    )
}