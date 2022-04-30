import { Formik } from 'formik';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { BabyIcon } from '../FilterIcon/BabyIcon';
import { Wrapp } from './ChildrenType.styled';

export const ChildrenType = ({ toggleFilter, filter }) => {
  const handleClick = e => toggleFilter(e.target.value);

  return (
    <Formik initialValues={{ filter }}>
      <Wrapp>
        <BabyIcon />

        <CheckBox
          type={'filter'}
          value={'clothes_child'}
          label={'одяг'}
          name="filter"
          onClick={handleClick}
        />

        <CheckBox
          type={'filter'}
          value={'children_food'}
          label={'їжа'}
          name="filter"
          onClick={handleClick}
        />

        <CheckBox
          type={'filter'}
          value={'diapers'}
          label={'підгузки'}
          name="filter"
          onClick={handleClick}
        />
      </Wrapp>
    </Formik>
  );
};
