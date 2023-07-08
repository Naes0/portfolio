import type { FC } from 'react';
import * as S from './styles';
import Link from 'next/link';
import { Item } from '../Common/styles';

interface ProjectProps {
  name: string;
  description: string;
  thumbnail: string;
}

export const Project: FC<ProjectProps> = ({ name, description, thumbnail }) => {
  const hrefName = name.toLowerCase().replace(' ', '-');
  const projectVariants = { ...Item, hover: { y: -20 } };
  return (
    <S.ProjectContainer variants={projectVariants} whileHover={'hover'}>
      <S.ProjectLink prefetch={false} href={`/projects/${hrefName}`}>
        <S.ProjectImage
          src={thumbnail}
          alt={`${name}-preview`}
          width={0}
          height={0}
          sizes='100vw'
          variants={S.ProjectVariants}
        />
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.ProjectLink>
    </S.ProjectContainer>
  );
};
