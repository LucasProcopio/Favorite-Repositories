import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import api from '../../services/api';
import { Owner, IssueList, Filter } from './styles';
import Skeleton from '../../Components/Skeleton';
import Container from '../../Components/Container';

class Repository extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repository: {},
      issues: [],
      loading: true,
      filter: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const repositoryName = decodeURIComponent(match.params.repository);
    this.repoName = repositoryName;

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repositoryName}`),
      api.get(`/repos/${repositoryName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  /**
   * Open Filter tab
   */
  openFilter = () => {
    const { filter } = this.state;
    this.setState({ filter: !filter });
  };

  /**
   * Apply issue filter
   */
  setIssueFilter = async repoStatus => {
    const lowerCaseRepoName = this.repoName.toLowerCase();
    const { filter } = this.state;
    this.setState({ filter: !filter, loading: true });

    try {
      const filteredIssues = await api.get(
        `/repos/${lowerCaseRepoName}/issues?state=${repoStatus}`,
        {
          params: {
            per_page: 5,
          },
        }
      );

      this.setState({
        issues: filteredIssues.data,
        loading: false,
      });
    } catch (err) {
      // validade data here
      console.log(err.message);
    }
  };

  render() {
    const { repository, issues, loading, filter } = this.state;

    if (loading) {
      return <Skeleton />;
    }

    return (
      <>
        <Container>
          <Filter filter={filter.toString()}>
            <button
              type="button"
              onClick={this.openFilter}
              className="open-close-btn"
            >
              <FaFilter size={15} />
            </button>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => this.setIssueFilter('all')}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => this.setIssueFilter('open')}
                >
                  Open
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => this.setIssueFilter('closed')}
                >
                  Closed
                </button>
              </li>
            </ul>
          </Filter>
          <Owner filter={filter.toString()}>
            <Link to="/">Back to repositories</Link>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </Owner>

          <IssueList filter={filter.toString()}>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssueList>
        </Container>
      </>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
