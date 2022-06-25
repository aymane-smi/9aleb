import React from 'react'
import { BallTriangle } from "react-loader-spinner";
function Loading() {
  return (
    <div className="flex justify-center items-center">
        <BallTriangle
            heigth="100"
            width="100"
            color="grey"
            ariaLabel="loading-indicator"
        />
    </div>
  )
}

export default Loading;