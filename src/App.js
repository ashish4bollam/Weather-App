import logo from './logo.svg';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import NewBhavishya from './components/NewBhavishya';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Inputss from './components/Inputss';
import SamayAurSthan from './components/SamayAurSthan';
import TempAndDet from './components/TempAndDet';
import Bhavishya from './components/Bhavishya';
// import getWeatherData from './lols/VataService';
import getFormWeathData from './lols/VataService';
import { useEffect, useState } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {

  const [query,setQuery]=useState({q:'tokyo'})
  const [units,setUnits]=useState('metric')
  const [weather,setWeather]=useState(null)
  

  useEffect(()=>{
    const fetchWeather =async()=>{
      const message= query.q ? query.q : 'current location.'

      toast.info('Fetching weather for '+message)

      await getFormWeathData({...query,units}).then((data)=>{
        setWeather(data);
        toast.success(`Successfully fetched weather for ${data.name},${data.country}`)
      });
    };
    fetchWeather();
    console.log(weather)
 
  },[query,units])

  const formatBackground =()=>{
    if(!weather) return 'from-cyan-700 to to-blue-700';
    const limitx1=units==='metric' ? 20:60
    const limitx2=units=='metric' ? 32:80
    if(weather.temp<=limitx1) return'from-cyan-700 to to-blue-700';
    if(weather.temp>limitx1 && weather.temp<=limitx2) return 'from-blue-700 to to-orange-700'
    
    return 'from-yellow-700 to to-orange-700'

  }

  

 
  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}>
  
      <TopButtons setQuery={setQuery}/>
      <Inputss setUnits={setUnits} unit={units} setQuery={setQuery}/>

    {weather && 
     
        <div>
       <SamayAurSthan weather={weather}/>
      <TempAndDet weather={weather}/>
      <Bhavishya title={'5-hourly forecast'} weather={weather} />
      <NewBhavishya title={'5-day forecast'} weather={weather} />
      </div>
    }
    
    <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
    </div>
    
  );
}

export default App;
