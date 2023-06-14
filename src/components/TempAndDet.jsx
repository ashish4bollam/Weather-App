import React from 'react'
import { UilArrowUp,
    UilArrowDown ,
    UilTemperature,
    UilWind,
    UilSun,
    UilSunset,
    UilTear,
    UilRaindropsAlt,
    
 } from '@iconscout/react-unicons'

import { formatLocalTime } from '../lols/VataService'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);



const formatLocalTime2 = (secs, zone, format = "hh:mm a") => {
    const date = dayjs.unix(secs).utc().tz(zone);
    return date.format(format);
  };



function TempAndDet({weather : {
    details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone
}}) {
  return (
    <div>
    <div className='flex  items-center justify-center py-6 text-xl text-cyan-300'>
       <p>{details}</p>
       </div>

    <div className='flex flex-row  items-center justify-between text-white py-3'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} className='w-20'  alt=''/>
        <p className='text-5xl'>{temp}°
        </p>



        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={19} className='mr-1'/>
                Real felt:
            
            <span className='font-medium ml-1'> {feels_like}° </span>
        </div>


        <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={19} className='mr-1'/>
                Humidity:
            
            <span className='font-medium ml-1'> {humidity} </span>
        </div>


        <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={19} className='mr-1'/>
                Wind
            
            <span className='font-medium ml-1'> {speed} km/h</span>
        </div>


        {/* <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={19} className='mr-1'/>
                
            

            <span className='font-medium ml-1'> 32°</span>

        </div> */}

    </div>

    </div>  

    <div className='flex flex-row items-center space-x-2 text-white text-sm py-3 justify-center '>
    {/* <UilSun/>
    <p className='font-light'>
        Rise: <span className='font-medium ml-1'>{formatLocalTime2(sunrise)}</span> 
    </p>
    <p className='font-light '>|</p>


    <UilSunset/>
    <p className='font-light'>
        Set: <span className='font-medium ml-1'>{formatLocalTime2(sunset)}</span> 
    </p>
    <p className='font-light '>|</p> */}

    <UilArrowUp/>
    <p className='font-light'>
        High: <span className='font-medium ml-1'>{temp_max}</span> 
    </p>
    <p className='font-light '>|</p>

    <UilArrowDown/>
    <p className='font-light'>
        Low: <span className='font-medium ml-1'>{temp_min}</span> 
    </p>
    <p className='font-light '>|</p>


    </div>
    </div>

    

  )
}

export default TempAndDet