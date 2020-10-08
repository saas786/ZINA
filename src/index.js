import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import "./index.css";
import Home from './Home';

var Families_List = ['Purim','Liepkaln'].sort()


ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path={"/"} component={Home} exact />
            { Families_List.map((family_var, key) => ( 
                <Route path={ "/" + family_var} key={key} render={(props) =>(<App {...props} family={ require("./FamilyInfo/" + family_var + ".json")} list={Families_List}/>)}/>
            ))}
			<Route component={Home} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));