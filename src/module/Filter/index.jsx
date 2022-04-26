import { Formik } from 'formik';
import { Container } from './component/Container/Container';
import { ChildrenType } from './component/ChildrenType';
import { useState } from 'react';
import { MainType } from './component/MainType/MainType';
import { FilterIcon } from './component/FilterIcon/FilterIcon';

const Filter = ({ filter, toggleFilter }) => {
  const [showFilter, setShowFilter] = useState(false);
  const handleClick = e => toggleFilter(e.target.value);

  const removeChildItems = async () => {
    await toggleFilter('clothes_child', { deteleValue: true });
    await toggleFilter('children_food', { deteleValue: true });
    await toggleFilter('diapers', { deteleValue: true });
  };

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
            const toggleChildItems = () => showChild && removeChildItems();

            return (
              <Container>
                <MainType
                  onClick={handleClick}
                  toggleChildItem={toggleChildItems}
                />
                {showChild && <ChildrenType handleClick={handleClick} />}
              </Container>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default Filter;
