import React, { useRef } from 'react'
import SVGCode from './svgCode'

function Canvas({ showModal, svg }) {
  return (
    <div className="relative z-10 w-3/5 m-5 overflow-hidden bg-white rounded-md h-4/5">
      <h1 className="w-full p-6 font-sans text-4xl font-extrabold text-center opacity-75">
        Generate SVG Waves 🌊
      </h1>
      {showModal && <SVGCode code={svg.toString()} />}
      <div className="absolute bottom-0 w-full transition-all duration-300 ease-in-out delay-150">
        {svg}
      </div>
    </div>
  )
}

export default Canvas
