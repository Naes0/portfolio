'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { Device } from '@/lib';
import { rem } from 'polished';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: ${rem(30)};

  @media ${Device.mobile} {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const AvatarContainer = styled.div`
  width: 10vmin;
  min-width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px white solid;
  overflow: hidden;
`;

export const Avatar = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
`;
