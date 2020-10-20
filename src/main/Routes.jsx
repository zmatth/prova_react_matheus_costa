import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Blocks from './Pages/blocks/Blocks';
import Cards from './Pages/cards/Cards';
import Forms from './Pages/forms/Forms';
import Index from './Pages/index/Index';
import Pricing from './Pages/pricing/Pricing';

export default props => (
    <Router history={hashHistory}>
        <Route path='/blocks' component={Blocks}/>
        <Route path='/cards' component={Cards}/>
        <Route path='/forms' component={Forms}/>
        <Route path='/index' component={Index}/>
        <Route path='/pricing' component={Pricing}/>
        <Redirect from='*' to='/index'/>
    </Router>
);




