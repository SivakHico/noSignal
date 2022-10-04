import '../css/typewriter.css'
import '../css/main.css'
import Timedate from './Timedate'
import Scaleloader from './Scaleloader'
import { useState, useEffect } from 'react'

export default function Typewriter() {

    const [loading, setLoading] = useState(false);
    const [noise, setNoise] = useState();

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            {
                loading ?
                    <div id='loader'><Scaleloader loading={loading} />Searching For Signal...</div>
                    :
                    <div>
                        <div id="screen">
                            <div id="content-holder">
                                <div id="content">
                                    <div id="app">
                                        <div id="channel"><Timedate /></div>
                                        <div id="text">
                                            <h1>Sivak Hico</h1>
                                        </div>
                                        <div id="text" className="typewriter">
                                            <h3>Full-Stack web developer</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='controls'>
                            <div className='power tooltip' id="home">
                                <i className='fa fa-home'></i>
                                <span className="tooltiptext">Home</span>
                            </div>
                            <div className='power tooltip' id="about">
                                <i class="fa fa-child"></i>
                                <span className="tooltiptext">Me</span>
                            </div>
                            <div className='power tooltip' id="portfolio">
                                <i class="fa fa-outdent"></i>
                                <span className="tooltiptext">Works</span>
                            </div>
                            <div className='power tooltip' id='review'>
                                <i class="fa fa-podcast"></i>
                                <span className="tooltiptext">Review</span>
                            </div>
                            <div className='power tooltip' id='contact'>
                                <i class="fa fa-coffee"></i>
                                <span className="tooltiptext">Contact</span>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}