import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CandidateList from './components/CandidateList';
import UserDetail from './components/UserDetail';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={CandidateList} />
      <Route path="/user/:id" component={UserDetail} />
    </Switch>
  );
};

export default Router;
