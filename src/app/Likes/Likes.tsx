import type { FC } from 'react';
import * as S from './styles';
import { SectionHeading } from '@/components/Common';
import { Item } from '@/components/Common/styles';

interface LikesProps {}

export const Likes: FC<LikesProps> = ({}) => {
  const likes = [
    'Anime',
    'Kpop',
    'Gaming',
    'Marvel',
    'Spider-Man',
    'Kdrama',
    'Coding',
    'Problem-Solving',
  ];
  return (
    <S.LikesSection variants={Item}>
      <SectionHeading>I ♥</SectionHeading>
      <S.UnorderList>
        {likes.map((like) => (
          <S.ListItem key={like}>{like}</S.ListItem>
        ))}
      </S.UnorderList>
    </S.LikesSection>
  );
};
