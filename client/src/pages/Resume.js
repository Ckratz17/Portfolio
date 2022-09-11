import React from 'react'

const styles = {
    link: {
        fontFamily: 'Courier New',
        fontSize: '30px',
        color: 'black'
    },
    title: {
        fontSize: '25px',
        fontWeight: 'bold'
    }
}

export default function Resume() {
    return (
        <div>
        <div className="resumeHeader">
            <h1>
                <a href="https://docs.google.com/document/d/1vQhqDuhpElGzDECrm8Z7mNLRjTtz-c0zMfTW2Du-ilc/edit?usp=sharing"
                  style={styles.link}>
                    View My Resume
                </a>
            </h1>
        </div>
        <div className="frontSkills">
           <div style={styles.title}>Front End Skills</div> 
           <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>BOOTSTRAP</li>
              <li>JQUERY</li>
           </ul> 
        </div>
        <div className="backSkills">
           <div style={styles.title}>Back End Skills</div> 
           <ul>
              <li>NODEjs</li>
              <li>EXPRESS</li>
              <li>MYSQL</li>
              <li>NOSQL</li>
              <li>REACT</li>
           </ul> 
        </div>
    </div>
    )
}