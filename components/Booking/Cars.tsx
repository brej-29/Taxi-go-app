import { DirectionDataContext } from '@/context/DirectionDataContext';
import CarsList from '@/data/CarsList'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

function Cars() {
    const [selectedCar,setSelectedCar]=useState<any>()
    const {directionData, setDirectionData} 
    = useContext(DirectionDataContext);

    const getCost=(charges:any)=>{
      return (charges*directionData.routes[0].distance*0.000621371192)
      .toFixed(2)
    }
  return (
    <div className='mt-3'>
        <h2 className='heading-strong font-semibold text-[14px] text-slate-700 dark:text-slate-200 mb-2'>Select Car</h2>
        <div className='grid 
        grid-cols-3 
        md:grid-cols-2
        lg:grid-cols-3
         '>
            {CarsList.map((item,index)=>(
                <div
  key={index}
  className={`m-2 p-3 rounded-xl border bg-white/90 dark:bg-white/30
            backdrop-blur-md transition-all
            hover:shadow-lg hover:scale-[1.03] cursor-pointer
            ${index==selectedCar
              ? "border-yellow-400 ring-2 ring-yellow-400"
              : "border-slate-200 dark:border-white/10"}`}
  onClick={()=>setSelectedCar(index)}
>
  <Image src={item.image} alt={item.name} width={75} height={90} className="w-full" />
  <h2 className="heading-strong text-[12px] mt-1 text-slate-600 dark:text-slate-300">
    {item.name}
    {directionData.routes ? (
      <span className="float-right font-semibold text-slate-900 dark:text-slate-100">
        {getCost(item.charges)}$
      </span>
    ) : null}
  </h2>
</div>
            ))}
        </div>
    </div>
  )
}

export default Cars