import React from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Form, SubmitButton, List } from './styles';
import api from '../../services/api';

class Main extends React.Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  // Load localstorage data
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add repository"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Details
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
