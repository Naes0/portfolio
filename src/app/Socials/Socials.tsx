import type { FC } from 'react';
import { SectionHeading } from '@/components/Common';
import * as S from './styles';
import React from 'react';
import { IconGithub, IconInstagram } from '@/components/Common/Icons';
import { Item } from '@/components/Common/styles';

interface SocialsProps {}

type SocialLink = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

export const Socials: FC<SocialsProps> = ({}) => {
  const socials: SocialLink[] = [
    {
      icon: <IconGithub />,
      name: 'Naes0',
      href: 'https://github.com/Naes0',
    },
    {
      icon: <IconInstagram />,
      name: 'sean._.o',
      href: 'https://www.instagram.com/sean._.o/',
    },
  ];
  return (
    <S.SocialsContainer variants={Item}>
      <SectionHeading>Socials</SectionHeading>
      <S.UnorderedList>
        {socials.map((social) => (
          <S.ListItem key={social.name}>
            {social.icon}
            <S.SocialLink href={social.href} target='_blank'>
              {social.name}
            </S.SocialLink>
          </S.ListItem>
        ))}
      </S.UnorderedList>
    </S.SocialsContainer>
  );
};
