import type { FC } from 'react';
import * as S from './styles';
import { SectionHeading } from '@/components/Common';

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = ({}) => {
  return (
    <S.ProjectSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}>
      <SectionHeading>Projects</SectionHeading>
    </S.ProjectSection>
  );
};

export default ProjectsPage;
