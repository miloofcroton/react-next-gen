import React from "react";
import Header from "../header";
import Footer from "../footer";
import Container from "../container";

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>
        <Container>{children}</Container>
      </main>

      <Footer />
    </>
  );
}

export default Layout;
