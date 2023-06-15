import { DateTime } from "luxon";

const API_KEY="2aad525a5642ebb227e14721db37435a"
const  BASE_LOL="https://api.openweathermap.org/data/2.5"


const getWeatherData=(infoType,searchParams)=>{
    const url=new URL(BASE_LOL+"/"+infoType);
    url.search =new URLSearchParams({...searchParams,appid:API_KEY});

    return fetch(url).
    then((res)=>res.json())
   
};

const formatCurrentWeather=(data)=>{
    const {
        coord:{lat,long},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed},
        timezone,
    }=data


    const {main:details,icon}=weather[0];
    

    return {lat,long,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed,timezone}



};

const formatForecastWeather =(data)=>{
    let {
        list,timezone,country,
      
    }=data
    list=list.map(d=>{
        return {
            day:formatLocalTime(d.dt,timezone,"cccc,dd LLL yyyy' | Local time : 'hh:mm a"),
            temp:d.main.temp,
            icon:d.weather[0].icon,
            speed:d.wind.speed,
            temp_max:d.main.temp_max,
            temp_min:d.main.temp_min,
            humidity:d.main.humidity
        



        }
    })

    return {list}

  

    



};

const getFormWeathData=async (searchParams)=>
{
    const formattedCurrentWeather=await getWeatherData('weather',searchParams).then(formatCurrentWeather);

    const {lat,long}=formattedCurrentWeather
    const formattedForecastWeather=await getWeatherData('forecast',searchParams).then(formatForecastWeather);

    return {...formattedCurrentWeather,...formattedForecastWeather};

};

const formatLocalTime =(
    secs,
    zone,
    format="cccc,dd LLL yyyy' | Local time : 'hh:mm a"
  
    )=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format);




export default getFormWeathData;

export {formatLocalTime};

