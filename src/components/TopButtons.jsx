import React from 'react';


function TopButtons({setQuery}) {
    const cities=[
        {
            id:1,
            title:'London'
        },
        {
            id:2,
            title:'New York'
        },
        {
            id:3,
            title:'Tokyo'
        },
        {
            id:4,
            title:'New Delhi'
        },
        {
            id:5,
            title:'Sydney'
        },



    ]

    const loll =[];
    for(let i=0;i<5;i++){
        loll.push(<button key={cities[i].id}  className='text-white text-lg font-medium
        '
        onClick={()=>setQuery({q:cities[i].title})}
        >{cities[i].title}</button>)
    }
    
  return (
    
    <div className='flex items-center justify-around my-6'>
        
      {loll}
       
        
        
    </div>
  )
}

export default TopButtons