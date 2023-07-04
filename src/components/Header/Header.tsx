import type { FC } from 'react';
import { InlineLink, NextLink } from '../Common';
import * as S from './styles';

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
      <S.TitleLink href='/'>{`< Sean O'Neill />`}</S.TitleLink>
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
      </S.Navigation>
    </S.HeaderContainer>
  );
};

export default Header;
