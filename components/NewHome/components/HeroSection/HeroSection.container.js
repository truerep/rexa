import React, { useState } from 'react'
import HeroSection from './HeroSection'

const HeroSectionContainer = ({ toggleCreate, setToggleCreate }) => {

  return (
    <HeroSection
      toggleCreate={toggleCreate}
      setToggleCreate={setToggleCreate}
    />
  )
}

export default HeroSectionContainer