import type { FC } from 'react';

interface pageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: FC<pageProps> = ({ params }) => {
  return <div>{params.slug}</div>;
};
export default ProjectPage;
