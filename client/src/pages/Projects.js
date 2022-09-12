import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import '../styles/app.css'
import JATE from '../images/JATE.png'
import Weather from "../images/weather.png"
import BVM from "../images/BVM.png"
import CarbonCombatters from "../images/CarbonCombatters.png"
import Carded from '../images/Carded.png'
import WorkDay from '../images/workDay.png'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from "react-icons/cg";

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page-cover" ref={ref} data-density="hard">
            <div className="title-content">
                <div className='title'>{props.children}</div>
            </div>
        </div>
    );
});

const styles = {
    iconStyle: {
        height: '75px',
        minWidth: '100px',
        color: 'black'
    },
    links: {
        display: 'flex',
        justifyContent: 'center'
    },
    demo: {
        textAlign: 'center'
    }
}

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                <h2 className="page-header">{props.title}</h2>
                <img className="page-image" variant="top" src={props.img} alt="deployed application"></img>
                <div className="page-text">{props.description}</div>
                <div style={styles.links}>
                   <div>
                    <p style={styles.demo}>GitHub</p>
                    <a className='page-links' href={props.ghLink}><FaGithub style={styles.iconStyle}/></a>
                   </div> 
                   <div>
                    <p style={styles.demo}>Demo</p>
                    <a className='page-links' href={props.demoLink}><CgWebsite style={styles.iconStyle}/></a>
                   </div>
                </div>
                <div className="page-footer">{props.number + 1}</div>
            </div>
        </div>
    );
});

class DemoBook extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            totalPage: 0
        }
    }

    onPage = (e) => {
        this.setState({
            page: e.data
        });
    };

    render() {
        return (
            <div className='container'>
                <HTMLFlipBook
                    width={550}
                    height={733}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={this.onPage}
                    onChangeOrientation={this.onChangeOrientation}
                    onChangeState={this.onChangeState}
                    className="demo-book"
                    ref={(el) => (this.flipBook = el)}>

                    <PageCover>My Projects</PageCover>

                    <Page
                        title="J.A.T.E"
                        img={JATE}
                        description="Just another text editor that allows the user to download directly to their device."
                        ghLink="https://github.com/Ckratz17/text-editor"
                        demoLink="https://afternoon-everglades-67148.herokuapp.com/"
                        number={1}>
                    </Page>
                    <Page
                        img={Weather}
                        title="Weather Dashboard"
                        description="A weather dashboard that shows allows you to search a city and then shows you the current and five day forecast for that city."
                        ghLink="https://github.com/Ckratz17/Weather_Dashboard"
                        demoLink="https://ckratz17.github.io/Weather_Dashboard/"
                        number={2}>
                    </Page>
                    <Page
                        img={BVM}
                        title="Books Vs Movies"
                        description="A web application that allows a user to search for a book or a movie title and the search result will let you see the matching titles."
                        ghLink="https://rflctnofu.github.io/BooksVsMovies/"
                        demoLink="https://rflctnofu.github.io/BooksVsMovies/"
                        number={3}>
                    </Page>
                    <Page
                        img={CarbonCombatters}
                        title="Carbon Combatters"
                        description="A web application that allows a user to sign up and create a profile that will then track their carbon footprint."
                        ghLink="https://github.com/Mkish1220/CarbonCombaters"
                        demoLink="https://carbon-combaters.herokuapp.com/landing"
                        number={4}>
                    </Page>
                    <Page
                        img={WorkDay}
                        title="Day Planner"
                        description="."
                        ghLink="https://github.com/Ckratz17/Work_Schedule"
                        demoLink="https://ckratz17.github.io/Work_Schedule/"
                        number={5}>
                    </Page>
                    <Page
                        img={Carded}
                        title="Carded"
                        description="Carded is your online business card solution with team creation to keep your businesses organized."
                        ghLink="https://github.com/DRCallaghan/Carded"
                        demoLink="https://get-carded.herokuapp.com/"
                        number={6}>
                    </Page>

                    <PageCover>Created by Chris Kratz</PageCover>
                </HTMLFlipBook>
            </div>
        )
    }
}

export default function App() {
    return <DemoBook />
}