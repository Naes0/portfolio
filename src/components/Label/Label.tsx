'use client';

import { FC } from 'react';
import * as S from './styles';

interface LabelProps {
  name: string;
  id: string;
}

export const Label: FC<LabelProps> = ({ name, id }) => {
  return (
    <S.LabelContainer>
      <S.Label htmlFor={id} color='blue'>
        {name}
      </S.Label>
      <input type='text' id={id} />
    </S.LabelContainer>
  );
};

export default Label;
