'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeaderContainer = styled(motion.header)`
  grid-area: header;
  height: 5vh;
  max-height: 100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
`;

export const TitleLink = styled(Link)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: bold;
  text-decoration: none;
`;

export const Navigation = styled.nav``;

export const UnorderedList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ListItem = styled.li``;
