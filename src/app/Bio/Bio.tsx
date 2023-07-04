import type { FC } from 'react';
import * as S from './styles';
import { Colours, InlineLink, SectionHeading } from '@/components/Common';
import React from 'react';

interface BioProps {}

type Event = {
  year: number;
  description: string | React.ReactNode;
};

export const Bio: FC<BioProps> = ({}) => {
  const events: Event[] = [
    {
      year: 1996,
      description: 'Born in Perth, Western Australia.',
    },
    {
      year: 2018,
      description:
        'Interned at Rio Tinto as a software engineer to provide buisness and safety solutions.',
    },
    {
      year: 2019,
      description:
        'Started working at Curtin Univeristy, Bently building web apps serving staff and students.',
    },
    {
      year: 2020,
      description:
        'Completed Bachelor of Science (Computing) Computer Science Major at Curtin Univeristy.',
    },
    {
      year: 2022,
      description: (
        <>
          Achieved{' '}
          <InlineLink
            href='https://www.credly.com/badges/8a8005f0-2abe-442e-b76d-db164d3683d5/public_url'
            target='_blank'
            initial={{ color: Colours.tertiary.bg }}
            whileHover={{ color: Colours.secondary.bg }}
            whileFocus={{ color: Colours.secondary.bg }}>
            AWS: Developer Associate
          </InlineLink>{' '}
          Certification.
        </>
      ),
    },
  ];
  return (
    <S.BioContainer>
      <SectionHeading>Bio</SectionHeading>
      {events.map((event) => (
        <S.Event key={event.year}>
          <S.Year>{event.year}</S.Year>
          <S.Description>{event.description}</S.Description>
        </S.Event>
      ))}
    </S.BioContainer>
  );
};
