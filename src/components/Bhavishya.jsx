import React from 'react'

function Bhavishya({weather:{list}},{title}) {
  // console.log(list);

  const more=[];
  for(let i=0;i<5;i++){
    more.push( <div className='flex flex-col items-center justify-center'>
    <p className='font-light text-sm'>
        {list[i].day.slice(-8)}
    </p>
    <img src={`https://openweathermap.org/img/wn/${list[i].icon}@2x.png`}alt='' className='w-12 my-1'/>
    <p className='font-medium'>{list[i].temp}°</p>

</div>
)
  }
  
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase '>5-HOUR-FORECAST</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>

       
        {more}
          
        
      
           
        </div>

    </div>
  )
}

export default Bhavishya