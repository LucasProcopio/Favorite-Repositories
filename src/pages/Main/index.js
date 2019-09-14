import React from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../../Components/Container';
import { Form, SubmitButton, List } from './styles';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
      addRepositoryError: false,
    };
  }

  /**
   * Initialize state from localstorage data if any
   */
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  /**
   * Uptades localstorage data if data changes
   */
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
    const duplicateRepoError = 'Repository already exists';
    const repoNotFoundError = 'Error adding the repository';

    try {
      repositories.map(repository => {
        if (repository.name === newRepo) {
          throw new Error(duplicateRepoError);
        }
        return false;
      });

      const response = await api.get(`/repos/${newRepo}`);
      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        addRepositoryError: false,
      });
    } catch (err) {
      this.setState({
        loading: false,
        addRepositoryError: true,
      });

      err.message =
        err.message === duplicateRepoError ? err.message : repoNotFoundError;
      this.notifyError(err.message);
    }
  };

  notifyError = message =>
    toast(message, {
      position: toast.POSITION.TOP_LEFT,
      className: 'error-toast',
      hideProgressBar: true,
      autoClose: 2500,
    });

  render() {
    const { newRepo, repositories, loading, addRepositoryError } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form
          onSubmit={this.handleSubmit}
          error={addRepositoryError.toString()}
        >
          <input
            type="text"
            placeholder="Add repository"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading.toString()}>
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
        <ToastContainer />
      </Container>
    );
  }
}

export default Main;
