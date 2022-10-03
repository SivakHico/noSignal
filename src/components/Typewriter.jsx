import '../css/typewriter.css'
import '../css/main.css'
import Timedate from './Timedate'

export default function Typewriter() {

    const [loading, setLoading] = useState(true);

    return (
        <>
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
        </>
    )
}