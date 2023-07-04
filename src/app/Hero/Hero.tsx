import { Heading, SubHeading } from '@/components/Common';
import type { FC } from 'react';
import * as S from './styles';
import ProfilePic from '../../../public/profile-pic-min.png';

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <S.HeroContainer>
      <S.InfoContainer>
        <Heading>Sean O&apos;Neill</Heading>
        <SubHeading>
          Fullstack Developer {'( Frontend | AWS | Backend )'}
        </SubHeading>
      </S.InfoContainer>
      <S.AvatarContainer>
        <S.Avatar src={ProfilePic} alt='profile-pic' />
      </S.AvatarContainer>
    </S.HeroContainer>
  );
};
