import { namesOfServiceTypes } from 'service/dataFromServiceType';
import { Container, Label, Info } from './MoreInfo.styled';

export const MoreInfo = ({ additional, info }) => {
  return (
    <>
      {namesOfServiceTypes.map(({ type, label }) => {
        return (
          additional[type] && (
            <Container key={type}>
              <Label> {label} </Label>
              <Info>{additional[type]}</Info>
            </Container>
          )
        );
      })}

      <Container>
        <Label> Інформація : </Label>
        <Info>{info}</Info>
      </Container>
    </>
  );
};
