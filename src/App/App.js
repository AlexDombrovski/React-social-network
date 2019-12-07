import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AppHeader from '../components/Header';
import Users from '../features/Users';
import PageUsers from '../modules/pageUsers';
import PageAlbums from '../modules/pageAlbums';
import PageOneAlbum from '../modules/pageOneAlbum';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppHeader />
                <div className='pageUsers'>
                    <Users />
                    <Switch>
                        <Route path="/users" component={ PageUsers } />
                        <Route path="/albums/:id" component={ PageOneAlbum } />
                        <Route path="/albums" component={ PageAlbums } />
                        <Route path="/pricing" component={ PageOneAlbum } />
                    </Switch>
                </div>
                <Redirect to="/users" from="/" />
            </BrowserRouter>
        );
    }
}

export default App;