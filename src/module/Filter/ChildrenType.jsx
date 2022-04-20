import { Formik } from 'formik';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';

import { AddBox, BabyIcon } from './Filter.styled';

export const ChildrenType = ({ handleClick, filter }) => {
  return (
    <Formik initialValues={{ filter }}>
      <AddBox>
        <BabyIcon />

        <CheckBox
          value={'clothes_child'}
          label={'одяг'}
          name="filter"
          onClick={handleClick}
        />

        <CheckBox
          value={'children_food'}
          label={'їжа'}
          name="filter"
          onClick={handleClick}
        />

        <CheckBox
          value={'diapers'}
          label={'підгузки'}
          name="filter"
          onClick={handleClick}
        />
      </AddBox>
    </Formik>
  );
};
