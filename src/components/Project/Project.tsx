import type { FC } from 'react';
import * as S from './styles';
import Link from 'next/link';

interface ProjectProps {
  name: string;
  description: string;
  thumbnail: string;
}

export const Project: FC<ProjectProps> = ({ name, description, thumbnail }) => {
  const hrefName = name.toLowerCase().replace(' ', '-');
  return (
    <S.ProjectContainer>
      <S.ProjectLink prefetch={false} href={`/projects/${hrefName}`}>
        <S.ProjectImage
          src={thumbnail}
          alt={`${name}-preview`}
          width={0}
          height={0}
          sizes='100vw'
        />
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.ProjectLink>
    </S.ProjectContainer>
  );
};
