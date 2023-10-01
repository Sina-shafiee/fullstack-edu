import { DashboardHeader } from '@/components/ui';
import { Fragment, useCallback, useState } from 'react';
import { AddAuthorModal, AuthorsDataTable } from '../../component';

export const Authors = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const toggleCreateModal = useCallback(
    (value: boolean) => void setShowCreateModal(value),
    []
  );
  return (
    <Fragment>
      <DashboardHeader
        title="لیست نویسندگان "
        breedCrumbs={{
          current: { title: 'نویسندگان' },
          tree: [{ href: '/dashboard', title: 'داشبورد' }],
        }}
      />
      <AuthorsDataTable toggleCreateModal={toggleCreateModal} />
      <AddAuthorModal showModal={showCreateModal} toggleModal={toggleCreateModal} />
    </Fragment>
  );
};
