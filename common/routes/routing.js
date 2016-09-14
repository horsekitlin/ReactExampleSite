import React from 'react'
import { Route } from 'react-router'
import EntryView from '../components/EntryView';
import SideContainer from '../containers/SideContainer';
import HomeContainer from '../containers/HomeContainer';
import NotFound from '../components/NotFound';

export default (

  <Route component={EntryView}>

    <Route path="/"
        components={{main: HomeContainer}} />

    <Route path="/sidebar"
        components={{main: SideContainer}} />
    <Route path="*"
           components={{main: NotFound, cart: null}} />
  </Route>

)
