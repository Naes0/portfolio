'use client';

import styled from 'styled-components';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectContainer = styled(motion.article)`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const ProjectImage = styled(motion(Image))`
  width: 100%;
  height: auto;
  aspect-ratio: 3.2 / 2;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 1.5;
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
`;

export const ProjectVariants: Variants = {
  hover: {
    boxShadow: '0 0 60px 10px rgba(0, 0, 0, 0.3)',
  },
};
