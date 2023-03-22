import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Layout from '../components/Layout';

import Home from '../components/home';

const Webpages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component = { Home } />
            </Layout>
        </Router>
    )
}