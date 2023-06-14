import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inputss({setUnits,units,setQuery}) {

  const [city,setCity]=useState("");

  const handelSearch=()=>{
    if(city!=='') {setQuery({q:city})}
  }


  const handleLocation=()=>{

    if(navigator.geolocation){
      toast.info('Fetching users location')
      
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success('Location Fetched')
        let lat=position.coords.latitude
        let lon =position.coords.longitude

        setQuery({lat,lon});

      });
    }

  }

  const handlunits1=()=>{
    toast.info('Changing Unit to Celsius')
      if(units!='metric'){

        setUnits('metric');

      }
  }
  const handlunits2=()=>{
    toast.info('Changing Unit to Fahrenheit')
    if(units!='imperial'){

      setUnits('imperial');

    }
}

  

  

  
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input t
        ype='text' 
        className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
        placeholder='search for city...'
        value={city}
        onChange={(e)=>setCity(e.currentTarget.value)}
        />
        <UilSearch size={25} className ='text-white cursor-pointer transition ease-out hover:scale-125'
        onClick={handelSearch}/>
        <UilLocationPoint size={25} className ='text-white cursor-pointer transition ease-out hover:scale-125'
        onClick={handleLocation}/>

      </div>
      <div className='flex flex-row w-1/4 items-center justify-center' >
        <button name='global' className='text-xl text-white font-light mx-1 cursor-pointer transition ease-out hover:scale-125'
        onClick={handlunits1}>°C</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='stupid'className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125' 
        onClick={handlunits2}
        >°F</button>
          
        

      </div>
    </div>
  )
}

export default Inputss