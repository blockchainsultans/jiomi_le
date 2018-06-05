import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Login from './login';
import Lenderdeshboard from './lenderdeshbord';
import Howmanylend from './howmanylend';
import Howmanyloantaken from './howmanyloantaken';


export default () =>(
    <Router>
        <Switch>
            <Route exact path ="/" component = {Login} />
            <Route exact path ="/Lenderdeshboard" component = {Lenderdeshboard} />
            <Route exact path ="/Howmanylend" component = {Howmanylend} />
            <Route exact path ="/Howmanyloantaken" component = {Howmanyloantaken} />
        </Switch>    
    </Router>    
);
  