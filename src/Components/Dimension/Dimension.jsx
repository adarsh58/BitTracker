import React, { useState, createRef } from 'react'

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 })
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    }
  }, [ref])
  return dimensions
}

export default function Dimension() {
  const divRef = createRef()
  const dimensions = useRefDimensions(divRef)

  return (
    <div >
      <div
        ref={divRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    {dimensions.width}w {dimensions.height}h
      </div>
    </div>
  )
}