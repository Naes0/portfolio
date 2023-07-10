import {
  Colours,
  IconChevronRight,
  LinkButton,
  Paragraph,
  SectionHeading,
} from '@/components/Common';
import type { FC } from 'react';
import * as S from './styles';
import { Item } from '@/components/Common/styles';

interface MeProps {}

export const Me: FC<MeProps> = ({}) => {
  const body = `
    Hi I'm Sean, a full-stack developer based in Perth, Western Australia. 
    I have a passion for building beautiful frontends and real-world solutions.
    I have a keen eye for design and finding simple solutions to complex problems. 
    When I'm not coding I love watching anime, listening to kpop and gaming with friends.
    I'm currently employed at Curtin University as a full-stack developer.
  `;

  return (
    <S.MeContainer variants={Item}>
      <SectionHeading>Me</SectionHeading>
      <Paragraph>{body}</Paragraph>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LinkButton
          href='/projects'
          whileTap={{ scale: 0.9 }}
          whileHover={{ backgroundColor: Colours.secondary.hover }}>
          My Projects
          <IconChevronRight />
        </LinkButton>
      </div>
    </S.MeContainer>
  );
};
