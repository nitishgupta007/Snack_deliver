import React from 'react';
import Aux from '../../hoc/Aux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import PizzaBuilder from '../../containers/PizzaBuilder/PizzaBuilder';
import Header from './Header';
import './Layout.css';

const layout = (props) => (
    <Router>
        <Aux>
            <main>
                <Header></Header>
                <nav className="sidebar">
                    <ul>
                        <li>
                            <Link to="/BurgerBuilder">Burger Builder</Link>
                        </li>
                        <li>
                            <Link to="/PizzaBuilder">Pizza Builder</Link>
                        </li>
                    </ul>
                </nav>
                {props.children}
                <div className="Content">
                    <Route path="/BurgerBuilder" component={BurgerBuilder} />
                    <Route path="/PizzaBuilder/" component={PizzaBuilder} />
                </div>    
            </main>
            
        </Aux>
    </Router>    
);

export default layout;