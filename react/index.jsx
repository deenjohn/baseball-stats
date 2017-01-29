import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';

import Store from '../react-redux/store.jsx'
import ConnectedAppContainer from './connectors/connectappcontainer.jsx';
import Prompt from './components/prompt.jsx';
import Player from './components/player.jsx';
import Batting from './components/batting.jsx';
import Pitching from './components/pitching.jsx';
import Awards from './components/awards.jsx';
import Team from './components/team.jsx';




ReactDOM.render(
        <Provider store={Store}>
            <Router history={hashHistory}>
                <Route path='/'>
                    <Route path='/baseball' component={ConnectedAppContainer}/>
                    <IndexRedirect to="/baseball" />
                </Route>
            </Router>
        </Provider>,
  document.getElementById('app')
);