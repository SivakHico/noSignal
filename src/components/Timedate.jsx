import { useState, useEffect } from 'react'

export default function Timedate() {
    const locale = 'de-DE';
    const [today, setDate] = useState(new Date());

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
            <span className='time'>{time}</span>
            <span className='wish'>{wish}</span>
        </>
    )
};