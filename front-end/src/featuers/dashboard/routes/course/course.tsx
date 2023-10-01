import { DashboardHeader } from '@/components/ui';
import { Fragment, useCallback, useState } from 'react';
import { AddCourseModal, CourseDataTable } from '../../component';

export const Courses = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const toggleCreateModal = useCallback(
    (value: boolean) => void setShowCreateModal(value),
    []
  );
  return (
    <Fragment>
      <DashboardHeader
        title="لیست دوره ها "
        breedCrumbs={{
          current: { title: 'دوره ها' },
          tree: [{ href: '/dashboard', title: 'داشبورد' }],
        }}
      />
      <CourseDataTable toggleCreateModal={toggleCreateModal} />
      <AddCourseModal showModal={showCreateModal} toggleModal={toggleCreateModal} />
    </Fragment>
  );
};
