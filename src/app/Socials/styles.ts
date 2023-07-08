'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { rem } from 'polished';

export const SocialsContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
`;

export const UnorderedList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: ${rem(15)};
`;

export const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 10px;
  /* border: 1px solid white; */
`;

export const SocialLink = styled(motion.a)`
  text-decoration: none;
  line-height: 1.4;

  &:focus,
  &:hover {
  }
`;
