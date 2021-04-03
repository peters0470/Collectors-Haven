<<<<<<< HEAD
import React from 'react';

=======
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
>>>>>>> cab0d542de32e4e8bff8d6e06b0330c28bd84f8b

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Collection from './pages/Collection';
import Footer from './components/Footer';

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
              <Header />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signUp' component={SignUp} />
                  <Route exact path='/collection' component={Collection} />
                </Switch>
              <Footer />
            </div>
          </Router>
        </ApolloProvider>
    )
<<<<<<< HEAD

};
=======
}

export default App


>>>>>>> cab0d542de32e4e8bff8d6e06b0330c28bd84f8b
