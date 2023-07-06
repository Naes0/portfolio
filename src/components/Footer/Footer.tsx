import type { FC } from 'react';
import * as S from './styles';
import { InlineLink } from '../Common';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <S.FooterContainer>
      Inspired by{' '}
      <InlineLink href='https://twitter.com/craftzdog' target='_blank'>
        Takuya Matsuyama
      </InlineLink>{' '}
      and credit to{' '}
      <InlineLink href='https://sketchfab.com/LovoPrestige' target='_blank'>
        Logvaar
      </InlineLink>{' '}
      for the 3D model
    </S.FooterContainer>
  );
};
