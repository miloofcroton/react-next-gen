import React from 'react';
import { NextPageContext } from 'next';

import { User } from 'services/users/data/types';
import Layout from 'style/layouts/main';
import ListDetail from 'lib/components/Detail';
import { fetchWrapper } from 'lib/data/fetch';

type Props = {
  item?: User;
  errors?: string;
};

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query;
      const item = await fetchWrapper(
        `http://localhost:${process.env.PORT}/api/users/${Array.isArray(id) ? id[0] : id}`,
      );
      return { item };
    }
    catch (err) {
      return { errors: err.message };
    }
  };

  render() {
    const { item, errors } = this.props;

    if (errors) {
      return (
        <Layout pageTitle="Error | Next.js + TypeScript Example">
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    return (
      <Layout
        pageTitle={`${
          item ? item.name : 'User Detail'
        } | Next.js + TypeScript Example`}
      >
        {item && <ListDetail item={item} />}
      </Layout>
    );
  }
}

export default InitialPropsDetail;
