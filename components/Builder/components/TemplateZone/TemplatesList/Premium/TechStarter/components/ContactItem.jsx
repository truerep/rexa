import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';

const ContactItemComponent = ({ image, text }) => {
    return (
        <ContactItem>
            <ImageHalo>
                <Image
                    src={image}
                    alt={image}
                    width={20}
                    height={20}
                />
            </ImageHalo>
            <ContactText>{text}</ContactText>
        </ContactItem>
    )
}

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.4rem 1rem;
`;

const ImageHalo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #ECB544;
    padding: 0.5rem;
    margin-right: 1rem;
    Image {
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), #ECB544);
    }
`;

const ContactText = styled.p`
  color: #fff;
  font-size: 0.7rem;
  margin: 0;
`;

export default ContactItemComponent