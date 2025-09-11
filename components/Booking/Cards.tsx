import CardsList from '@/data/CardsList'
import Image from 'next/image'
import React, { useState } from 'react'

function Cards() {
  const [activeIndex, setActiveIndex] = useState<any>();
  return (
    <div>
      <h2 className='heading-strong text-[14px] font-semibold text-slate-700 dark:text-slate-200 mb-2'>Payment Methods</h2>
      <div className='grid 
        grid-cols-3 
        md:grid-cols-2
        lg:grid-cols-3'>
        {CardsList.map((item, index) => (
          <div
            key={index}
            className={`w-[70px] h-[52px] mb-2 flex items-center justify-center 
            rounded-xl border bg-white/90 dark:bg-white/30 
            backdrop-blur-md transition-all cursor-pointer
            hover:scale-110 hover:shadow-lg
            ${activeIndex==index
              ? "border-yellow-400 ring-2 ring-yellow-400"
              : "border-slate-300 dark:border-white/10"}`}
            onClick={() => setActiveIndex(index)}
          >
            <Image src={item.image} alt={item.name} width={30} height={30} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards