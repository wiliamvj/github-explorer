import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/30341785?v=4"
            alt="wiliamvj"
          />
          <div>
            <strong>Test/teste</strong>
            <p>Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>255</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>58</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>98</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`gdg`}>
          <div>
            <strong>etet</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
