import React from 'react'

function NewBhavishya({weather:{list}},{title}) {

    const more=[];
    for(let i=0;i<40;i++){
        if(list[i].day.slice(-8)=="05:30 PM"){
            more.push(<div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                {list[i].day.slice(0,list[i].day.indexOf(","))}
            </p>
            <img src={`https://openweathermap.org/img/wn/${list[i].icon}@2x.png`}alt='' className='w-12 my-1'/>
            <p className='font-medium'>{list[i].temp}°</p>

        </div>)
        }
            
    }
  
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase '>5-DAY-FORECAST</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>

      
        {more}

        
      
           
        </div>

    </div>
  )
}

export default NewBhavishya