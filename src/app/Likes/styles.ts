'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LikesSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UnorderedList = styled(motion.ul)`
  display: grid;
  min-width: 100%;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: square;
  padding-left: 18px;
  gap: 20px;
`;

export const ListItem = styled(motion.li)`
  width: max-content;
`;
