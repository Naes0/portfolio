'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Colours } from './Colours';

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

// export const Link = styled(motion.)

export const LinkButton = styled(motion.a)`
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
  /* border: 1px white solid; */
`;

export const Alert = styled.div`
  padding: 0.75rem;
  font-family: 'Segoe UI', Arial, sans-serif;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
`;
