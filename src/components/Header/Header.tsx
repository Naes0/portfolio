import type { FC } from 'react';
import { IconButton, InlineLink, NextLink } from '../Common';
import * as S from './styles';
import { IconHamburger } from '../Common/Icons';

interface HeaderProps {}

type LinkType = {
  name: string;
  href: string;
  target?: string;
};

export const Header: FC<HeaderProps> = ({}) => {
  const links: LinkType[] = [
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sean-o-neill-ba1b07164/',
      target: '_blank',
    },
    {
      name: 'Github',
      href: 'https://github.com/Naes0',
      target: '_blank',
    },
  ];

  return (
    <S.HeaderContainer>
      <S.TitleLink href='/' prefetch={false}>{`< Sean O'Neill />`}</S.TitleLink>
      <S.Navigation>
        <S.UnorderedList>
          {links.map((link) => (
            <S.ListItem key={link.name}>
              <NextLink href={link.href} target={link.target}>
                {link.name}
              </NextLink>
            </S.ListItem>
          ))}
        </S.UnorderedList>
        <IconButton
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
          <IconHamburger />
        </IconButton>
      </S.Navigation>
    </S.HeaderContainer>
  );
};

export default Header;
