import React, { useEffect, useRef, useState } from 'react'

const OptionForm = ({ options, onStateChange }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${qrDataUri})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
    </div>
  )
}

export default OptionForm