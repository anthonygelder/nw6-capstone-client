import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
import Landing from './Landing/Landing'
import AddGraph from './AddGraph/AddGraph'
import EditGraph from './EditGraph/EditGraph'
import GraphList from './GraphList/GraphList'
import Graph from './Graph/Graph'
import Login from './Login/Login'
import Register from './Register/Register'
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path='/' component={Header}/>
        </header>
        <ErrorBoundry>
          <main className="container">
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/graph' render={(routeProps) => <GraphList routeProps={routeProps}/>}/>
              <Route exact path='/graph/:table_type/:graph_id' component={Graph}/>
              <Route exact path='/addGraph' render={(routeProps) => <AddGraph routeProps={routeProps}/>}/>
              <Route exact path='/editGraph' component={EditGraph}/>
              <Route exact path='/register' render={(routeProps) => <Register routeProps={routeProps}/>}/>
              <Route exact path='/login' render={(routeProps) => <Login routeProps={routeProps}/>}/>
            </Switch>
          </main>
        </ErrorBoundry>
        <footer className="App-footer">
          <Route path='/' component={Footer} />
        </footer>
      </div>
    </Router> 
  );
}

export default App
