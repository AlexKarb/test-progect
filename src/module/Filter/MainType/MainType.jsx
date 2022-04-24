import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { ContainerBox, Wrapper } from '../Filter.styled';

export const MainType = ({ onClick }) => (
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
      <CheckBox value={'food'} label={'їжа'} name="filter" onClick={onClick} />
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
);
