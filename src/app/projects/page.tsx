'use client';

import type { FC } from 'react';
import { SectionHeading } from '@/components/Common';
import { Project } from '@/components';
import { StaggeredOnView } from '@/components/Common/styles';
import * as S from './styles';

interface ProjectsPageProps {}

type Project = {
  name: string;
  description: string;
  thumbnail: string;
  link?: string;
  platform?: string[];
  stack?: string;
  year: number;
};

const ProjectsPage: FC<ProjectsPageProps> = ({}) => {
  const projects: Project[] = [
    {
      name: 'Study Planner',
      description:
        'Application to aid Curtin University students in planning their course units and semesters during their academic tenure.',
      thumbnail: '/portfolio/images/thumbnails/study-planner-thumbnail.png',
      year: 2023,
    },
    {
      name: 'Timetable Planner',
      description:
        'Timetable app for university students who wish to plan their timetable across multiple locations, years, and study periods.',
      thumbnail: '/portfolio/images/thumbnails/timetable-planner-preview.png',
      year: 2022,
    },
    {
      name: 'Component Library',
      description:
        "Developed a reusable React component library based on Curtin's design system",
      thumbnail: '/portfolio/images/thumbnails/component-libarary-preview.png',
      year: 2021,
    },
    {
      name: 'Autopark',
      description:
        'Designed and implemented a parking session automation app to avoid fines at Curtin University.',
      thumbnail: '/portfolio/images/thumbnails/autopark-preview.png',
      year: 2021,
    },
  ];

  const oldProjects: Project[] = [
    {
      name: 'My Work',
      description:
        'Re-envisioning the Curtin University Staff Portal to a modern and personalised design.',
      thumbnail: '/portfolio/images/thumbnails/mywork-preview.png',
      year: 2021,
    },
  ];

  return (
    <S.ProjectSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}>
      <SectionHeading>Projects</SectionHeading>
      <S.ProjectsGrid {...StaggeredOnView(0.2)}>
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            thumbnail={project.thumbnail}
          />
        ))}
      </S.ProjectsGrid>
      <SectionHeading>Old Projects</SectionHeading>
      <S.ProjectsGrid {...StaggeredOnView(0.2)}>
        {oldProjects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            thumbnail={project.thumbnail}
          />
        ))}
      </S.ProjectsGrid>
    </S.ProjectSection>
  );
};

export default ProjectsPage;
