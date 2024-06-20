import React, { useState } from 'react'
import HeroSection from './HeroSection'

const HeroSectionContainer = () => {
  const [toggleCreate, setToggleCreate] = useState(false);

  return (
    <HeroSection 
      toggleCreate={toggleCreate}
      setToggleCreate={setToggleCreate}
    />
  )
}

export default HeroSectionContainer