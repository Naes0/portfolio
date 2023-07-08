'use client';

import { Hero } from './Hero';
import { Me } from './Me';
import { Alert } from '@/components/Common';
import { Bio } from './Bio';
import { Likes } from './Likes';
import { Socials } from './Socials';
import { Item, StaggeredOnView } from '@/components/Common/styles';
import * as S from './styles';

const HomePage = () => {
  const alertText = `Hi, I'm a full-stack developer in Perth, WA`;
  return (
    <S.HomeContainer {...StaggeredOnView(0.2)}>
      <Alert variants={Item}>{alertText}</Alert>
      <Hero />
      <Me />
      <Bio />
      <Likes />
      <Socials />
    </S.HomeContainer>
  );
};

export default HomePage;
