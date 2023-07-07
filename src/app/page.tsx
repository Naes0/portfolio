import { FC } from 'react';
import { Hero } from './Hero';
import { Me } from './Me';
import { Alert } from '@/components/Common';
import { Bio } from './Bio';
import { Likes } from './Likes';
import { Socials } from './Socials';
import * as S from './styles';

export const metadata = {
  title: "Sean O'Neill Portfolio",
  description: "Portfolio for Sean O'Neill",
};

const HomePage = () => {
  const alertText = `Hi, I'm a full-stack developer in Perth, WA`;
  return (
    <S.HomeContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}>
      <Alert>{alertText}</Alert>
      <Hero />
      <Me />
      <Bio />
      <Likes />
      <Socials />
    </S.HomeContainer>
  );
};

export default HomePage;
