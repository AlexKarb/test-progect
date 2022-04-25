import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { AdditionalInputInfo } from './AdditionalInputInfo';
import { Container, Wrapper } from './TypeHelp.styled';

export const CheckBoxItems = ({ allTypes, selectedTypes }) => (
  <Container>
    {allTypes.map(service => (
      <Wrapper key={service.type}>
        <CheckBox
          value={service.type}
          label={service.label}
          name="typeHelp"
          theame="ligth"
        />
        <AdditionalInputInfo selected={selectedTypes} service={service} />
      </Wrapper>
    ))}
  </Container>
);
