import { Heading, SubHeading } from '@/components/Common';
import type { FC } from 'react';
import ProfilePic from '../../../public/profile-pic-min.png';
import { Item } from '@/components/Common/styles';
import * as S from './styles';

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <S.HeroContainer variants={Item}>
      <S.InfoContainer>
        <Heading>Sean O&apos;Neill</Heading>
        <SubHeading>
          Full-stack Developer {'( Frontend | AWS | Backend )'}
        </SubHeading>
      </S.InfoContainer>
      <S.AvatarContainer>
        <S.Avatar src={ProfilePic} alt='profile-pic' />
      </S.AvatarContainer>
    </S.HeroContainer>
  );
};
