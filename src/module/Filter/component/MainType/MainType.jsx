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
            value={'clothes_adult'}
            label={'одяг'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
            value={'food'}
            label={'їжа'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
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
            label={'для дітей'}
            name="showChild"
            onClick={removeChild}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
            value={'delivery'}
            label={'доставка'}
            name="filter"
            onClick={handleClick}
          />
        </Wrapper>

        <Wrapper>
          <CheckBox
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
