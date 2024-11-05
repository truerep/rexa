import { colors } from '@/helpers';
import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components';

const Breadcrumbs = ({breadcrumbs}) => {
    const router = useRouter();

  return (
    <Wrapper>
        {
            breadcrumbs.length > 0 ? (
                breadcrumbs.map((breadcrumb) => (
                    <Item onClick={() => router.push(breadcrumb.url)} key={breadcrumb?.name}>
                        {
                            breadcrumb?.icon ? (
                                <Icon 
                                    className={breadcrumb?.isCurrent ? "disabled" : ""} 
                                    src={breadcrumb?.icon}
                                />
                            ) : null
                        }
                        <Name className={breadcrumb?.isCurrent ? "disabled" : ""}>{breadcrumb?.name}</Name>
                    </Item>
                ))
            ) : null
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Item = styled.div`
    cursor: pointer;
    color: ${colors.HanPurple};
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;

    &:not(:last-child) {
        &::after {
            content: "";
            position: absolute;
            height: 8px;
            width: 8px;
            top: 0;
            bottom: 0;
            right: -20px;
            margin: auto;
            background-image: url('/assets/icons/arrow-down-light.svg');
            filter: brightness(0);
            background-repeat: no-repeat;
            background-size: contain;
            transform: rotate(-90deg);
            opacity: 0.7;
        }
    }

    &:last-child {
        pointer-events: none;
    }
`;

const Name = styled.div`
    &.disabled {
        color: ${colors.ErrieBlack};
    }
`;

const Icon = styled.img`
    height: 16px;

    &.disabled {
        filter: brightness(0);
        opacity: 0.9;
    }
`;

export default Breadcrumbs