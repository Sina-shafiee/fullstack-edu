import { Link } from 'react-router-dom';
import { BreedCurmbStructure } from '@/types';
import { ArrowLeft, ChevronLeft, LayoutGrid, MinusIcon } from 'lucide-react';

type Props = {
  tree: BreedCurmbStructure['tree'];
  current: BreedCurmbStructure['current'];
  title: string;
};

export const BreedCurmbs = ({ current, tree, title }: Props) => {
  return (
    <>
      <nav
        className="flex border items-center w-full justify-between h-16 px-2 rounded-sm bg-background"
        aria-label="Breadcrumb"
      >
        <p className="text-base flex items-center gap-2 font-medium">
          <MinusIcon className="h-8 w-5" />
          <span className="leading-8">{title}</span>
        </p>
        <ol className="inline-flex px-1 max-w-max flex-wrap justify-end items-center gap-2">
          {tree.map(({ href, title }, index) => {
            const isFirstLink = index === 0;
            return (
              <li key={title} className="inline-flex items-center">
                <Link
                  to={href}
                  className="inline-flex items-center text-[15px] text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  {isFirstLink ? (
                    <LayoutGrid strokeWidth={1.7} className="h-5 w-5 me-2" />
                  ) : (
                    <ArrowLeft className="h-4 w-4 me-2" strokeWidth={3} />
                  )}
                  <span className="leading-5">
                    {title.length > 24 ? title.slice(0, 20) + '...' : title}
                  </span>
                </Link>
              </li>
            );
          })}

          <li aria-current="page">
            <div className="flex items-center">
              <ChevronLeft className="h-4 w-4 me-2" strokeWidth={3} />
              <span className="ml-1 leading-3 text-[15px] whitespace-nowrap font-medium text-muted-foreground md:ml-2">
                {current.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};
