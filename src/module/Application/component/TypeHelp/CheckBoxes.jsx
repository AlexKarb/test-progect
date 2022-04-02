import { AdditionalInputInfo } from './AdditionalInputInfo';
import { CheckBoxItem } from './CheckBoxItem';
import { Container, Wrapper } from './TypeHelp.styled';

export const CheckBoxes = ({ allTypes, selectedTypes }) => (
  <Container>
    {allTypes.map(service => (
      <Wrapper key={service.type}>
        <CheckBoxItem type={service.type} label={service.label} />
        <AdditionalInputInfo selected={selectedTypes} service={service} />
      </Wrapper>
    ))}
  </Container>
);
