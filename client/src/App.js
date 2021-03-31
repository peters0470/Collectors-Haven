import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';

import Collection from './pages/Collection';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter, Router } from 'react-router-dom';

const client = new ApolloClient({
    request: (operation) => {
        const token = localStorage.getItem('id_token')
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    },
    uri: '/graphql',
})

const App = () => {
    return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
    )
}

export default App