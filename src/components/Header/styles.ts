'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Device } from '@/lib';

export const HeaderContainer = styled(motion.header)`
  grid-area: header;
  height: clamp(60px, 5vh, 100px);
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media ${Device.mobile} {
    justify-content: space-evenly;
  }
`;

export const TitleLink = styled(Link)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: bold;
  text-decoration: none;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const UnorderedList = styled.ul`
  display: none;
  gap: 20px;

  @media ${Device.mobile} {
    display: flex;
  }
`;

export const ListItem = styled.li``;
