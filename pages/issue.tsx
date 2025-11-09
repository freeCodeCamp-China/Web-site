import { Loading } from 'idea-react';
import { GitRepository } from 'mobx-github';
import { observer } from 'mobx-react';
import { ScrollList } from 'mobx-restful-table';
import { cache, compose, errorLogger } from 'next-ssr-middleware';
import { FC, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';

import { IssuePanel } from '../components/Git/Issue/Panel';
import { PageHead } from '../components/PageHead';
import repositoryStore, { RepositoryModel } from '../models/Repository';
import { I18nContext } from '../models/Translation';

export const getServerSideProps = compose(cache(), errorLogger, async () => {
  const list = await new RepositoryModel().getList({ relation: ['issues'] });

  return { props: JSON.parse(JSON.stringify({ list })) };
});

const IssuesPage: FC<{ list: GitRepository[] }> = observer(({ list }) => (
  <Container className="py-5">
    <PageHead title="GitHub issues" />

    <h1>GitHub issues</h1>

    {repositoryStore.downloading > 0 && <Loading />}

    <ScrollList
      translator={useContext(I18nContext)}
      store={repositoryStore}
      filter={{
        relation: ['issues'],
      }}
      defaultData={list}
      renderList={allItems => (
        <Row as="ul" className="list-unstyled g-4">
          {allItems.map(
            repository =>
              !repository.archived &&
              repository.issues?.[0] && (
                <IssuePanel key={repository.name} {...repository} />
              ),
          )}
        </Row>
      )}
    />
  </Container>
));

export default IssuesPage;
