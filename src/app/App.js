import React, { useState } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Navbar from './components/header-footer/NavBar';
import Menu from './views/Menu';
import { dataProducts } from '../data';
import './styles/App.css';
import CartPage from './views/CartPage';
import Footer from './components/header-footer/Footer';

const history = createBrowserHistory();

const App = () => {

    const [ category, setCategory ] = useState('fruits');
    const [ isFiltering, setFiltering ] = useState(false);
    const [ filtered, setFiltered ] = useState(false);

    const filterResult = (input) => {
        const fullList = dataProducts.flat();
        const filtered = fullList.filter(i => i.name.toLowerCase().indexOf(input.toLowerCase()) > -1 );
        setFiltered(filtered);
    }

    return (
        
            <Router history={history}>
                <div id='page-container'>
                    <div id='content-wrap'>
                        <Navbar 
                            filter={ filterResult } 
                            setFiltering={ setFiltering }
                        />
                        <Route 
                            exact
                            path="/" 
                            component={ props => 
                                <Menu 
                                    dataProducts={ isFiltering ? filtered : dataProducts[dataProducts.findIndex(d =>  d[0].category === category )] } 
                                    changeCategory={ setCategory } 
                                    category={ !isFiltering && category }
                                />
                        }
                        />
                        <Route path="/cart" component={ CartPage } />
                    </div>
                    <Footer />
                </div>
            </Router>
    );
}

export default App;