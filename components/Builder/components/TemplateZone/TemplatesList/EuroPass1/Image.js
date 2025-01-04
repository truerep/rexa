import Image from 'next/image'
import React from 'react'

const ImageWrapper = ({ image }) => {
    return (
        <Image src={image} alt="sectionImage" style={{ width: '18px', height: '18px', marginRight: '5px', filter: 'invert(21%) sepia(67%) saturate(1724%) hue-rotate(205deg) brightness(92%) contrast(94%)' }} />
    )
}

export default ImageWrapper