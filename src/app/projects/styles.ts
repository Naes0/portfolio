'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rem } from 'polished';
import { Device } from '@/lib';

export const ProjectSection = styled(motion.section)`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${rem(50)};
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;
