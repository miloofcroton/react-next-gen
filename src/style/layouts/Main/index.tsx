import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

interface LayoutProps {
  children: any;
  path?: any;
  pageTitle?: any;
  ogImage?: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  path,
  children,
  pageTitle,
  ogImage
}: LayoutProps) => {
  return (
    <Container>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>{children}</main>

      <Footer />
    </Container>
  );
};

export default Layout;
