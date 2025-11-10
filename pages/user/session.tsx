import { observer } from 'mobx-react';
import { ObservedComponent } from 'mobx-react-helper';
import { RestForm } from 'mobx-restful-table';
import { compose } from 'next-ssr-middleware';
import { Container } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import { i18n, I18nContext } from '../../models/Translation';
import { UserModel } from '../../models/User';
import { githubSigner } from '../api/GitHub/core';

export const getServerSideProps = compose(githubSigner);

@observer
export default class UserSessionPage extends ObservedComponent<
  {},
  typeof i18n
> {
  static contextType = I18nContext;

  store = new UserModel();

  render() {
    return (
      <Container className="my-4">
        <PageHead title="登录用户信息" />

        <h1 className="my-4">登录用户信息</h1>

        <RestForm
          translator={this.observedContext}
          store={this.store}
          fields={[
            {
              key: 'gender',
              options: [
                { value: '0', text: '女' },
                { value: '1', text: '男' },
                { value: '2', text: '其他' },
              ],
            },
            { key: 'birthday', type: 'date' },
          ]}
        />
      </Container>
    );
  }
}
