import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Layout} from './components/Layout'

function App() {
    return (
        <Router>
            <Layout/>
        </Router>
    );
}

export default App;
