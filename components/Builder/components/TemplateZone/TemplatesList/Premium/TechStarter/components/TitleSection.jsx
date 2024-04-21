import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';

const TitleSectionComponent = ({ image, title }) => {
    return (
        <TitleSection>
            <ImageHalo>
                <Image
                    src={image}
                    alt="sectionImage"
                    width={20}
                    height={20}
                />
            </ImageHalo>
            <SectionTitle>{title}</SectionTitle>
        </TitleSection>
    )
}

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
`;

const ImageHalo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #1D3344;
    padding: 0.5rem;
    margin-right: 1rem;
`;


const SectionTitle = styled.h2`
  color: #1D3344;
  margin: 0;
`;


export default TitleSectionComponent