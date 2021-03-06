import React, { Component } from 'react';
import './Header.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from "react-router-dom";

import ListLeague from "./../ListLeague/ListLeague";
import ListTeam from "./../ListTeam/ListTeam";
import CalendarLeague from "./../CalendarLeague/CalendarLeague";
import CalendarTeam from "./../CalendarTeam/CalendarTeam";


export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Router>
					<header className="header">
						<nav className="container">
							<ul className="navigation">
								<li className="navigation__item">
									<NavLink exact to="/listLeague" activeClassName="navigation__item-active" className="navigation__link">Список лиг</NavLink>
								</li>
								<li className="navigation__item">
									<NavLink exact to="/listTeam" activeClassName="navigation__item-active" className="navigation__link">Список команд</NavLink>
								</li>
							</ul>
						</nav>
					</header>
					<Switch>
						<Route exact path="/" render={() => <div className="container" style={{ lineHeight: "60px" }}><h1>Добро пожаловать, выберите нужную страницу в шапке</h1></div>} />
						<Route path="/listLeague" component={ListLeague} />
						<Route path="/listTeam" component={ListTeam} />
						<Route path="/calendarLeague/:id" component={CalendarLeague} />
						<Route path="/calendarTeam/:id/:name" component={CalendarTeam} />
					</Switch>
				</Router>
			</div>
		)
	}
}
