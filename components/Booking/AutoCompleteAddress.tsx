import { DestinationCordiContext } from '@/context/DestinationCordiContext'
import { SourceCordiContext } from '@/context/SourceCordiContext'
import React, { useContext, useEffect, useState } from 'react'

const session_token='5ccce4a4-ab0a-4a7c-943d-580e55542363'
const MAPBOX_RETRIVE_URL='https://api.mapbox.com/search/searchbox/v1/retrieve/'
function AutocompleteAddress() {

    const [source,setSource]=useState<any>()
    const [sourceChange,setSourceChange]=useState<any>(false)
    const [destinationChange,setDestinationChange]=useState<any>(false)

    const {soruceCordinates,setSourceCordinates}=useContext(SourceCordiContext);
    const {destinationCordinates,setDestinationCordinates}
    =useContext(DestinationCordiContext);

    const [addressList,setAddressList]=useState<any>([]);
    const [destination,setDistination]=useState<any>()

    useEffect(()=>{
        const delayDebounceFn=  setTimeout(()=>{
            getAddressList()
        },1000)
        return () => clearTimeout(delayDebounceFn)   
    },[source,destination]);


    const getAddressList=async()=>{
        setAddressList([]);
        const query=sourceChange?source:destination;
        const res=await fetch('/api/search-address?q='+query,{
            headers:{
                "Content-Type": "application/json",  
        }
        });

        const result=await res.json();
        setAddressList(result)
        
    }

    const onSourceAddressClick=async(item:any)=>{
        setSource(item.full_address);
        setAddressList([]);setSourceChange(false)
        const res=await fetch(MAPBOX_RETRIVE_URL+item.mapbox_id
            +"?session_token="+session_token
            +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
        
        const result=await res.json();
        
        setSourceCordinates({
            lng:result.features[0].geometry.coordinates[0],
            lat:result.features[0].geometry.coordinates[1], 
        })
        console.log(result);
    }

    const onDestinationAddressClick=async(item:any)=>{
        setDistination(item.full_address);
        setAddressList([]);
        setDestinationChange(false)
        const res=await fetch(MAPBOX_RETRIVE_URL+item.mapbox_id
            +"?session_token="+session_token
            +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
        
        const result=await res.json();
        
        setDestinationCordinates({
            lng:result.features[0].geometry.coordinates[0],
            lat:result.features[0].geometry.coordinates[1], 
        })
        console.log(result);
    }
    
  return (
    <div className=''>
        <div className='relative'>
            <label className='label-muted'>Where From?</label>
            <input type="text" 
                className="glass-field w-full text-[15px]"
                value={source}
                onChange={(e)=>{
                    setSource(e.target.value);
                    setSourceChange(true)
                }}
            />

            {addressList?.suggestions&&sourceChange?
            <div className='absolute w-full z-20 shadow-xl rounded-xl p-1
                bg-white dark:bg-[#111a2b] 
                border border-slate-200 dark:border-white/10'>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2 key={index} className="p-3 rounded-lg cursor-pointer 
           hover:bg-yellow-50 dark:hover:bg-white/10 transition-colors"
                onClick={()=>{onSourceAddressClick(item)}}
                >{item.full_address}</h2>
            ))}
           </div>:null}
        </div>
        <div className='relative'>
            <label className='label-muted'>Where To?</label>
            <input type="text"
                className='glass-field w-full text-[15px] '
                value={destination}
                onChange={(e)=>{setDistination(e.target.value);setDestinationChange(true)}}
            />

            {addressList?.suggestions&&destinationChange?
            <div className='absolute w-full z-20 shadow-xl rounded-xl p-1
                bg-white dark:bg-[#111a2b] 
                border border-slate-200 dark:border-white/10'>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2 key={index} className='p-3 rounded-lg cursor-pointer 
           hover:bg-yellow-50 dark:hover:bg-white/10 transition-colors'
                onClick={()=>{
                    onDestinationAddressClick(item)}}
                >{item.full_address}</h2>
            ))}
           </div>:null}
        </div>
    </div>
  )
}

export default AutocompleteAddress