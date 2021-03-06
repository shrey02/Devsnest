import React from 'react';
import './App.css';
import Memegenerator from './components/THA22/MemeGenerator';
import Custom from './components/THA23/Custom';
import Nav from './components/THA24/Nav';
import Landing from './components/THA25/Landing';
import Form from './components/THA26/Form';
import { Link, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {

  const classes = useStyles();
  return (
    <div className="App">
     <div>
      <Paper className={classes.root}>
        <Tabs centered>
        <Link to="/tha26"><Tab label="THA26"/></Link> 
        <Link to="/tha25"><Tab label="THA25"/></Link>
         <Link to="/tha24"><Tab label="THA24"/></Link> 
         <Link to="/tha23"><Tab label="THA23"/></Link> 
         <Link to="/tha22"><Tab label="THA22"/></Link> 
         <Link to="/Home"><Tab label="HOME"/></Link> 
        </Tabs>
      </Paper>
      </div>
      <div>
      <Switch>
        <Route path="/Home">
        </Route>
        <Route path="/tha22">
          <Memegenerator />
        </Route>
        <Route path="/tha23">
          <Custom />
        </Route>
        <Route path="/tha24">
          <Nav />
        </Route>
        <Route path="/tha25">
          <Landing/>
        </Route>
        <Route path="/tha26">
          <Form/>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
