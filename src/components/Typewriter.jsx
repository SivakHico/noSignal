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
                        <div id="about" onclick="power();"><span>about</span></div>
                        <div id="power" onclick="power();">project</div>
                        <div id="power" onclick="power();">contact</div>
                    </div>
            }
        </>
    )
}