import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useContext } from 'react'

function DistanceTime() {
  const { directionData, setDirectionData }
    = useContext(DirectionDataContext);

  return directionData?.routes && (
    <div className="px-4 py-2 rounded-full bg-yellow-400/95 text-gray-900 
                shadow-xl backdrop-blur-md">
      <h2 className="text-[14px] font-medium">
        Distance:
        <span className="font-bold">{(directionData.routes[0].distance * 0.000621371192).toFixed(2)} mi</span>
        Duration:
        <span className="font-bold">{(directionData.routes[0].duration / 60).toFixed(2)} min</span>
      </h2>
    </div>
  )
}

export default DistanceTime