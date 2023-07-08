'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BioContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Event = styled.div`
  display: flex;
`;

export const Year = styled.span`
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1em;
`;

export const Description = styled.p`
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.3;
`;
