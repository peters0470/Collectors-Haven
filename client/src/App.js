import React,{useState} from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';



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
<<<<<<< HEAD
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
=======
  
  const developers= [
    {
      id:'1',
      name:'Kevin',
      linkedin:'#',
      github:'https://github.com/climbingryan'
      
    },
    {
      id:'2',
      name:'Ryan',
      linkedin:'https://www.linkedin.com/in/ryan-peters-482747112/',
      github:'https://github.com/peters0470'
      
    },
    {
      id:'3',
      name:'Sarah',
      linkedin:'#',
      github:'https://github.com/Sarah-McNeel'
     
    },
    {
      id:'4',
      name:'Ayoub',
      linkedin:'#',
      github:'https://github.com/Ayoubhm1993'
      
    },
    {
      id:'5',
      name:'Felix',
      linkedin:'https://www.linkedin.com/in/felix-gutierrez91/',
      github:'https://github.com/fgutierrez2191'
      
    },
    {
      id:'6',
      name:'Chris',
      linkedin:'#',
      github:'https://github.com/christroy'
     
    }
  ];
    return (
        <ApolloProvider client={client}>
          <Router >
            <div>
              <Header />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={SignUp} />
                  <Route exact path='/collection' component={Collection} />
                </Switch>
              <Footer developers={developers} />
            </div>
          </Router>
        </ApolloProvider>
    )
>>>>>>> 70f452808c30376edfc3b486fbac066f04189999
}

export default App


