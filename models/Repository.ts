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
  console.log(request.path);

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
    // remove next line on Node.js `require('esm')` fully supported & MobX-RESTful 1.x installed
    this.baseURI = owner ? `orgs/${owner}/repos` : 'user/repos';
  }

  async *openStream(filter: RepositoryFilter) {
    const { owner: organization } = this;

    if (organization === MainOrganization) {
      // @ts-ignore
      yield await this.getOne('freeCodeCamp/chinese', filter.relation);

      this.totalCount = 1;
    } else this.totalCount = 0;

    const { loadPage } = GitRepoModel.prototype;

    for (let i = 1; ; i++) {
      const { pageData, totalCount } = await loadPage.call(
        this,
        i,
        this.pageSize,
        filter,
      );
      if (!pageData[0]) break;

      if (i === 1) this.totalCount += totalCount;
      yield* pageData;

      if (pageData.length < this.pageSize) break;
    }
  }
}

export default new RepositoryModel();
