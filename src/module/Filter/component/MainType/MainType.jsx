import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { Wrapper, ContainerBox } from './MainType.styled';

export const MainType = ({ onClick, toggleChildItems }) => (
  <>
    <ContainerBox>
      <Wrapper>
        <CheckBox
          value={'clothes_adult'}
          label={'одяг'}
          name="filter"
          onClick={onClick}
        />
      </Wrapper>

      <Wrapper>
        <CheckBox
          value={'food'}
          label={'їжа'}
          name="filter"
          onClick={onClick}
        />
      </Wrapper>

      <Wrapper>
        <CheckBox
          value={'hygiene'}
          label={'гігієна'}
          name="filter"
          onClick={onClick}
        />
      </Wrapper>
    </ContainerBox>

    <ContainerBox>
      <Wrapper>
        <CheckBox
          label={'для дітей'}
          name="showChild"
          onClick={toggleChildItems}
        />
      </Wrapper>

      <Wrapper>
        <CheckBox
          value={'delivery'}
          label={'доставка'}
          name="filter"
          onClick={onClick}
        />
      </Wrapper>

      <Wrapper>
        <CheckBox
          value={'otherHelp'}
          label={'інше'}
          name="filter"
          onClick={onClick}
        />
      </Wrapper>
    </ContainerBox>
  </>
);
