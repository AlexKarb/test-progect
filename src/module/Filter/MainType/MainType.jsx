import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { ContainerBox, Wrapper } from './Filter.styled';

export const MainType = handleClick => (
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
);
