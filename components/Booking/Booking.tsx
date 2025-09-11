import React, { useEffect, useState } from 'react'
import AutocompleteAddress from './AutoCompleteAddress'
import Cars from './Cars';
import Cards from './Cards';


function Booking() {
    const [screenHeight, setScreenHeight] = useState<number>(0);

    useEffect(() => {
        setScreenHeight(window.innerHeight * 0.72);
    }, []);
  return (
    <div className="p-6 rounded-2xl bg-white/95 dark:bg-white/[0.06]
                backdrop-blur-xl shadow-xl 
                border border-slate-200 dark:border-white/10 
                space-y-6 transition-colors">
    <h2 className="heading-strong text-2xl font-extrabold mb-3">Booking</h2>
    <div className="p-6 rounded-2xl bg-white/95 dark:bg-white/[0.06]
                backdrop-blur-xl shadow-xl 
                border border-slate-200 dark:border-white/10 
                space-y-6 transition-colors">
      <AutocompleteAddress />

      <Cars />
      <Cards />

      <button
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 
                   text-gray-900 font-extrabold py-3 rounded-full mt-2 
                   shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 
                   focus:outline-none focus:ring-2 focus:ring-yellow-500 
                   transition-all"
      >
        Book Ride
      </button>
        
        </div> 
    </div>
  )
}

export default Booking