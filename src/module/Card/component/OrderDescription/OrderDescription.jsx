import { nameLabelArrayTypeOfHelp } from 'service/typeOfHelp/dataFromTypeOfHelp';
import { Container, Label, Info } from './OrderDescription.styled';

export const OrderDescription = ({ data }) => (
  <div>
    {nameLabelArrayTypeOfHelp().map(
      ({ name, label }) =>
        data[name] && (
          <Container key={name}>
            <Label> {label} : </Label>
            <Info>{data[name]}</Info>
          </Container>
        )
    )}
  </div>
);
