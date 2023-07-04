'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rem } from 'polished';

export const ProjectSection = styled(motion.section)`
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${rem(50)};
`;
