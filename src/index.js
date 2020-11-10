import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import "./index.css";

import Tree from './FamilyTree/Tree.js';
import Home from './Home/Home.js';
import Map from './Map/Map.js';

var Families_List = ['Purim','Klavin'].sort()


ReactDOM.render(
    <HashRouter>
        <Switch>
            { Families_List.map((family_var, key) => ( 
                <Route path={ "/Tree/" + family_var} key={key} render={(props) =>(<Tree {...props} family={ require("./FamilyTree/FamilyInfo/" + family_var + ".json")} list={Families_List}/>)}/>
            ))}
            <Route path="/Map">
                <Map />   
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </HashRouter>
    , document.getElementById('root'));