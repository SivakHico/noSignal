import '../css/typewriter.css'
import '../css/main.css'
import '../css/contact.css'
import Timedate from './Timedate'
import Scaleloader from './Scaleloader'
import { useState, useEffect } from 'react'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Contact from './Contact'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Typewriter() {
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        <Box id='controls'>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="&#9965;Home" {...a11yProps(0)} />
                                <Tab label="&#9786;Me" {...a11yProps(1)} />
                                <Tab label="&#9869;Projects" {...a11yProps(2)} />
                                <Tab label="&#9939;Review" {...a11yProps(3)} />
                                <Tab label="&#9742;Contact" {...a11yProps(4)} />
                            </Tabs>
                        </Box>
                        <TabPanel id="screen" value={value} index={0}>
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
                        </TabPanel>
                        <TabPanel id="" value={value} index={1}>
                            <div id="content-holder">
                                <div id="content" className='white-bg'>
                                    <div id="">
                                        <img id='me' src="src\img\me.jpg" alt="me" />
                                    </div>
                                    <div>
                                        <p>Finde mich einfach in der Programmierung wieder,
                                            lebenslanger Lerner und arbeite gern an komplexen Problemen,
                                            die einen multidisziplinären Ansatz erfordern.</p>
                                        <ul>
                                            <li><a href="https://github.com/SivakHico" target='_blank'>gitHub</a></li>
                                            <li><a href="https://www.linkedin.com/in/sivak-hico" target='_blank'>Linked IN</a></li>
                                            <li>Download My Resume</li>
                                            <li>Download My Cover Letter</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel id="" value={value} index={2}>
                            <div id="content-holder">
                                <div id="content" className='white-bg'>
                                    <div id="app">
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel id="" value={value} index={3}>
                            <div id="content-holder">
                                <div id="content" className='white-bg'>
                                    <div id="app">
                                        Review
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel id="" value={value} index={4}>
                            <div id="content-holder">
                                <div id="content" className='white-bg'>
                                    <div id="app">
                                        <Contact />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
            }
        </>
    )
}