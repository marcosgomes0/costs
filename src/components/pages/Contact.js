import React, { useState } from 'react'

function Contact(){

const [hour, setHour] = useState()
const [min, setMin] = useState()
const [seconds, setSeconds] = useState()
const [milis, setMilis] = useState()



    setInterval(()=>{
        const data = new Date()

        setSeconds(data.getSeconds())
        setMilis(data.getMilliseconds())
        setMin(data.getMinutes())
        setHour(data.getHours())
    }, 1)  
    

    return(
        <>
        <h1>Contact</h1>
        <p><span>{hour}</span> : <span>{min}</span> : <span>{seconds}</span> : <span>{milis}</span></p>
        </>
    )
}

export default Contact