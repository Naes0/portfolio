'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { Colours } from './Colours';
import { Device } from '@/lib';

export const NextLink = styled(Link)`
  font-family: 'Segoe UI', Arial, sans-serif;
  text-decoration: none;
  text-underline-offset: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Heading = styled.h1`
  font-size: 2.25rem;
  line-height: 1.5;
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  font-family: 'Segoe UI', Arial, sans-serif;
  white-space: nowrap;
  color: ${Colours.secondary.bg};
`;

export const SectionHeading = styled.h2`
  font-size: 1.25rem;
  text-decoration: underline 4px ${Colours.secondary.bg};
  text-underline-offset: 6px;
`;

export const Paragraph = styled.p`
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 1rem;
  text-indent: 1em;
  line-height: 1.5;
  hyphens: auto;
`;

export const Button = styled(motion.button)``;

export const LinkButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  width: max-content;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Segoe UI', Arial, sans-serif;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 0.5rem;
  background: ${Colours.secondary.bg};
  color: ${Colours.secondary.text};
  gap: 5px;
`;

export const InlineLink = styled(motion.a)`
  display: inline-flex;
  color: ${Colours.tertiary.bg};

  &:focus,
  &:hover {
    color: ${Colours.secondary.bg};
  }
`;

export const Alert = styled(motion.div)`
  padding: 0.75rem;
  font-family: 'Segoe UI', Arial, sans-serif;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
`;

export const IconButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 0.375rem;
  padding: 13px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.16);

  path {
    fill: white;
  }

  @media ${Device.mobile} {
    display: none;
  }
`;

export const FadeInOnView = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: {
    once: true,
  },
  transition: {
    delay: 0.3,
  },
};

export const StaggeredOnView = (time = 0.3) => ({
  initial: 'hidden',
  animate: 'show',
  whileInView: 'show',
  exit: 'exit',
  viewport: {
    once: true,
  },
  transition: {
    staggerChildren: time,
  },
});

export const Item: Variants = {
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
  show: { opacity: 1 },
};
