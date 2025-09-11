"use client"

import Booking from '@/components/Booking/Booking'
import MapboxMap from '@/components/Map/MapBoxMap'
import { DestinationCordiContext } from '@/context/DestinationCordiContext';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SourceCordiContext } from '@/context/SourceCordiContext';
import { UserLocationContext } from '@/context/UserLocationContext';

import Image from 'next/image'
import { useEffect, useState } from 'react';
export default function Home() {
  const [userLocation,setUserLocation]=useState<any>();
  const [soruceCordinates,setSourceCordinates]=useState<any>([]);
  const [destinationCordinates,setDestinationCordinates]=useState<any>([]);
  const [directionData,setDirectionData]=useState<any>([]);

  useEffect(()=>{
    getUserLocation();

    const loader = document.getElementById("app-loader");
    if(loader) setTimeout(() => loader.classList.add("fade-out"), 800);
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
    <div className='min-h-[calc(100vh-64px)]'>
      <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <SourceCordiContext.Provider value={{soruceCordinates,setSourceCordinates}}>
      <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
      <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
     <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8'>
          <div className=''>
            <Booking/>
          </div>
          <div className="col-span-2">
          <MapboxMap/>
        </div>
     </div>
     </DirectionDataContext.Provider>
     </DestinationCordiContext.Provider>
     </SourceCordiContext.Provider>
     </UserLocationContext.Provider>
    </div>
  )
}