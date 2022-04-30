import { Formik } from 'formik';
import { Container } from './component/Container/Container';
import { ChildrenType } from './component/ChildrenType/ChildrenType';
import { useState } from 'react';
import { MainType } from './component/MainType/MainType';
import { FilterIcon } from './component/FilterIcon/FilterIcon';

export const Filter = ({ filter, toggleFilter }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <FilterIcon
        isopen={showFilter.toString()}
        onClick={() => setShowFilter(pS => !pS)}
      />

      {showFilter && (
        <Formik
          initialValues={{
            filter,
            showChild: false,
          }}
        >
          {({ values: { showChild } }) => {
            return (
              <Container>
                <MainType toggleFilter={toggleFilter} />
                {showChild && (
                  <ChildrenType toggleFilter={toggleFilter} filter={filter} />
                )}
              </Container>
            );
          }}
        </Formik>
      )}
    </>
  );
};
