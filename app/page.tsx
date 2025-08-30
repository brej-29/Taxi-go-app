"use client";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [userLocation,setUserLocation]=useState<any>();

  useEffect(()=>{
    getUserLocation();
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
    <div>
     <div className="grid grid-col-3">
        <div className="bg-blue-100">
          <Booking/>
        </div>
        <div className="col-span-2 bg-red-100 order-first md:order-last">
          <MapBoxMap/>
        </div>
     </div>
    </div>
  );
}
