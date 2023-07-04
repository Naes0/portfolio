'use client';

import { Root } from '@radix-ui/react-label';
import styled from 'styled-components';

export const LabelContainer = styled.div``;

export const Label = styled(Root)<{ color?: string }>`
  color: ${({ color }) => color || 'inherit'};
  font-size: 2rem;
`;
