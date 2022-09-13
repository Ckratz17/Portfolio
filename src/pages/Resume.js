import React from 'react'

const styles = {
    background: {
        backgroundColor: 'black',
    },
    resumeContainer: {
        textAlign: 'center',
        paddingBottom: '50px'
    },
    resume: {
        fontFamily: 'Courier New',
        fontSize: '30px',
        color: 'white'
    },
    title: {
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'white'
    },
    skills: {
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'center'
    },
    links: {
        padding: '10px',
    }
}

export default function Resume() {
    return (
    <div style={styles.background}>
        <div className="resumeHeader">
            <div style={styles.resumeContainer}>
                <a href="https://docs.google.com/document/d/1vQhqDuhpElGzDECrm8Z7mNLRjTtz-c0zMfTW2Du-ilc/edit?usp=sharing"
                  style={styles.resume}>
                    View My Resume
                </a>
            </div>
        </div>
        <div style={styles.skills}>
            <div className="frontSkills">
                <div style={styles.title}>Front End Skills</div> 
                <ul style={styles.links}>
                    <li style={styles.links}><a href='https://www.w3schools.com/html/'>HTML</a></li>
                    <li style={styles.links}><a href='https://www.w3schools.com/css/default.asp'>CSS</a></li>
                    <li style={styles.links}><a href='https://www.w3schools.com/js/default.asp'>JAVASCRIPT</a></li>
                    <li style={styles.links}><a href='https://reactjs.org/'>React</a></li>
                    <li style={styles.links}><a href='https://jquery.com/'>JQUERY</a></li>
                    <li style={styles.links}><a href='https://bulma.io/'>Bulma</a></li>
                    <li style={styles.links}><a href='https://getbootstrap.com'>BOOTSTRAP</a></li>
                </ul> 
            </div>
            <div className="backSkills">
                <div style={styles.title}>Back End Skills</div> 
                <ul>
                    <li style={styles.links}><a href='https://nodejs.org/en/'>NODEjs</a></li>
                    <li style={styles.links}><a href='https://www.npmjs.com/package/express'>EXPRESS</a></li>
                    <li style={styles.links}><a href='https://www.mysql.com/'>MYSQL</a></li>
                    <li style={styles.links}><a href='https://www.npmjs.com/package/graphql'>GraphQL</a></li>
                    <li style={styles.links}><a href='https://dbeaver.io/'>DBeaver</a></li>
                    <li style={styles.links}><a href='https://www.npmjs.com/package/apollo-server-express'>Apollo Server</a></li>
                    <li style={styles.links}><a href='https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_americas_uscan_search_nbnon_atlas_desktop_rlsa&utm_term=nosql&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14291004605&adgroup=128837429027&gclid=CjwKCAjwsfuYBhAZEiwA5a6CDLQ8B1_NcBxmGPrTeY5bgjxKl4Xsn0nUCUrhPYvTesL9zNlDLMurzxoCzY8QAvD_BwE'>MongoDB</a></li>
                </ul> 
            </div>
        </div>
    </div>
    )
}