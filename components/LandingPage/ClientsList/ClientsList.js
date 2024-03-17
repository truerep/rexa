import React from 'react';
import styled from 'styled-components';
import {
  SectionDark, SectionSubtitle, SectionTitle
} from '@/components/common/UiElements';

const ClientsList = () => (
  <Section id="clients">
    <SectionTitle data-aos="fade-up">Trusted by Professionals</SectionTitle>
    <SectionSubtitle data-aos="fade-up" data-aos-delay="100">Join Our Global Network of Professionals Using Our App!</SectionSubtitle>
    <ClientsImages data-aos="fade-up" data-aos-delay="200" className="container" />
  </Section>
);

const Section = styled(SectionDark)`
    padding-bottom: 50px;
`;

const ClientsImages = styled.div`
    margin: 30px auto 0;
    height: 120px;
    position: relative;
    animation: 8s slide-up infinite;
    background-repeat: no-repeat;
    background-position: top;
    background-image: url("/assets/images/client-images.svg");

    @keyframes slide-up {
        0% {
            background-position: center 0px;
        } 
        15% {
            background-position: center 0px;
        } 
        20% {
            background-position: center -120px;
        }
        35% {
            background-position: center -120px;
        }
        40% {
            background-position: center -240px;
        }
        55% {
            background-position: center -240px;
        }
        60% {
            background-position: center -360px;
        }
        75% {
            background-position: center -360px;
        }
        80% {
            background-position: center -480px;
        }
        95% {
            background-position: center -480px;
        } 
        100% {
            background-position: center 0;
        }
    }
`;

export default ClientsList;
