import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Add repository" />
      </Form>

      <SubmitButton disabled>
        <FaPlus color="#FFF" size={14} />
      </SubmitButton>
    </Container>
  );
}

export default Main;
