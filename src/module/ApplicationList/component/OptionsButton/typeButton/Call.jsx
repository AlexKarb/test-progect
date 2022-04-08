import {
  CallIcon,
  TelLink,
  IconContainer,
  IconInfo,
} from '../OptionsButton.styled';

export const CallButton = ({ tel }) => (
  <IconContainer>
    <TelLink href={`tel:${tel}`}>
      <CallIcon />
    </TelLink>
    <IconInfo>Дзвінок</IconInfo>
  </IconContainer>
);
