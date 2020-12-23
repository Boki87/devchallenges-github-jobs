import styled, {ThemeProvider} from 'styled-components'
import {Style} from './utils/GlobalStyle'
import {lightTheme} from './utils/Theme'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/header'

import Home from './routes/home'
import Job from './routes/job'

import {StyledApp} from './AppStyle'

function NotFound() {
  return (
    <p>Sorry, nothing found</p>
  )
}

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Style />
      <StyledApp className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/job/:id'>
              <Job />
            </Route>            
            <Route component={NotFound}/>
          </Switch>
        </Router>
        <StyledFooter>
          <span>Bojan Peric <a href="https://devchallenges.io/">@DevChallenges.io</a></span>
        </StyledFooter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;


const StyledFooter = styled.div`
  height: 100px;
  padding-bottom: 30px;
  margin-top:50px;
  color: var(--text-color-light);
  text-align: center;
  a {
    text-decoration: none;
    color: var(--text-color-light);
  }
`