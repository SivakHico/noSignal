import { useState, useEffect } from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'

export default function Timedate() {
    const locale = 'de-DE';
    const [today, setDate] = useState(new Date());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, []);

    const hour = today.getHours();
    const wish = `good${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}`;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });

    return (
        <>
            <ScaleLoader
                color="#36d7b7"
                cssOverride={{}}
                height={100}
                loading={loading}
                margin={5}
                speedMultiplier={2}
                width={8}
                radius={10}
            />
            <span className='time'>{time}</span>
            <span className='wish'>{wish}</span>
        </>
    )
};