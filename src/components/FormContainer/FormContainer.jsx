import { Container, Form } from './FormContainer.styled';

export const FormContainer = ({ onSubmit, children }) => (
  <Container>
    <Form onSubmit={onSubmit}>{children}</Form>
  </Container>
);
