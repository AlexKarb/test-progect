import { removeChildItems } from 'module/Filter/hooks/removeChildItems';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { Wrapper, ContainerBox } from './MainType.styled';

export const MainType = ({ toggleFilter }) => {
  const handleClick = e => toggleFilter(e.target.value);
  const removeChild = e => {
    if (!e.target.checked) {
      removeChildItems(toggleFilter);
    }
  };

  return (
    <>
      <ContainerBox>
        <Wrapper>
          <CheckBox
            type={'filter'}
            value={'clothes_adult'}
            label={'одяг'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
            type={'filter'}
            value={'food'}
            label={'їжа'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
            type={'filter'}
            value={'hygiene'}
            label={'гігієна'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>
      </ContainerBox>

      <ContainerBox>
        <Wrapper>
          <CheckBox
            type={'filter'}
            label={'для дітей'}
            name="showChild"
            onClick={removeChild}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
            type={'filter'}
            value={'delivery'}
            label={'доставка'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
            type={'filter'}
            value={'otherHelp'}
            label={'інше'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>
      </ContainerBox>
    </>
  );
};
