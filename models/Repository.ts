import {
  githubClient,
  GitRepository,
  RepositoryFilter,
  RepositoryModel as GitRepoModel,
} from 'mobx-github';
import { Stream } from 'mobx-restful';

import { API_Host, isServer } from './Base';

const GithubToken = process.env.GITHUB_TOKEN;

if (!isServer()) githubClient.baseURI = `${API_Host}/api/GitHub/`;

githubClient.use(({ request }, next) => {
  if (GithubToken)
    request.headers = {
      authorization: `Bearer ${GithubToken}`,
      ...request.headers,
    };
  return next();
});

const MainOrganization = 'freeCodeCamp-China';

export class RepositoryModel extends Stream<GitRepository, RepositoryFilter>(
  GitRepoModel,
) {
  constructor(public owner = MainOrganization) {
    super(owner);
  }

  async *openStream(filter: RepositoryFilter) {
    const { loadPage } = GitRepoModel.prototype,
      hasAdditional = this.owner === MainOrganization;

    for (let i = 1; ; i++) {
      const { pageData, totalCount } = await loadPage.call(
        this,
        i,
        this.pageSize,
        filter,
      );
      if (!pageData[0]) break;

      this.totalCount = totalCount + (hasAdditional ? 1 : 0);
      yield* pageData;

      if (pageData.length < this.pageSize) break;
    }

    if (hasAdditional)
      // @ts-ignore
      yield await this.getOne('freeCodeCamp/chinese', filter.relation);
  }
}

export default new RepositoryModel();
