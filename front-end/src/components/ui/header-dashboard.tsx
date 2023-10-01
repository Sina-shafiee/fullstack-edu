import { BreedCurmbStructure } from '@/types';

import { BreedCurmbs } from './breedcrumbs';
import { PageTitle } from './page-title';

type Props = {
  breedCrumbs: {
    tree: BreedCurmbStructure['tree'];
    current: BreedCurmbStructure['current'];
  };
  title: string;
};

export const DashboardHeader = ({ breedCrumbs, title }: Props) => {
  return (
    <header className="max-w-full mx-auto pt-4 pb-8">
      <PageTitle />
      <BreedCurmbs title={title} {...breedCrumbs} />
    </header>
  );
};
