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
    'KDrama',
    'Coding',
    'Problem-Solving',
  ];
  return (
    <S.LikesSection variants={Item}>
      <SectionHeading>I ♥</SectionHeading>
      <S.UnorderedList>
        {likes.map((like) => (
          <S.ListItem key={like}>{like}</S.ListItem>
        ))}
      </S.UnorderedList>
    </S.LikesSection>
  );
};
