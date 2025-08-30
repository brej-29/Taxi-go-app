import React, { useEffect, useState } from 'react'

function AutoCompleteAddress() {
    const [source,setSource]=useState<any>()
    const [addressList,setAddressList]=useState<any>([]);
    
    useEffect(()=>{
        const delayDebounceFn=  setTimeout(()=>{
            getAddressList()
        },1000)
        return () => clearTimeout(delayDebounceFn) 
    },[source])

    const getAddressList=async()=>{
        const res=await fetch('/api/search-address?q='+source,{
            headers:{
                "Content-Type": "application/json",  
        }
        });

        const result=await res.json();
        setAddressList(result)
    }
  return (
    <div className='mt-5'>
        <div>
            <label className='font-semibold'>Pickup Address</label>
            <input type="text"
            className='bg-white p-1 border-[1px]
            rounded-md w-full outline-none focus:bg-yellow-300'
            value={source}
            onChange={(e)=>setSource(e.target.value)}
            />
            {addressList?.suggestions?
            <div className='shadow-md p-1 rounded-md
            absolute w-full bg-white z-20'>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2 key={index} className='p-3 hover:bg-gray-100
                cursor-pointer'
                >{item.full_address}</h2>
            ))}
           </div>:null}

            <label className='font-semibold'>Drop Address</label>
            <input type="text"
            className='bg-white p-1 border-[1px]
            rounded-md w-full outline-none focus:bg-yellow-300'
            />
        </div>
    </div>
  )
}

export default AutoCompleteAddress