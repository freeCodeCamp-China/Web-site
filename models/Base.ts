import { HTTPClient } from 'koajax';
import { githubClient } from 'mobx-github';

export const isServer = () => typeof window === 'undefined';

const VercelHost = process.env.VERCEL_URL;

export const API_Host = isServer()
  ? VercelHost
    ? `https://${VercelHost}`
    : 'http://localhost:3000'
  : globalThis.location.origin;

export const ownClient = new HTTPClient({
  baseURI: `${API_Host}/api/`,
  responseType: 'json',
});

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

export { githubClient };

export interface Base {
  id: number;
  createdAt: string;
  updatedAt: string;
}
