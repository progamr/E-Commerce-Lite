import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './Header';
import {Footer} from './Footer';
import {Content} from './Content';

export const Layout = () => {
  return (
      <div className="container-flex">
          <Header />
          <Content />
          <Footer />
      </div>
  );
};
