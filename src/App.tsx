import React, { Suspense, useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { theme } from './theme';
import { Burger, Menu } from 'module/components';
import { About, Home, Contact } from 'module/pages';
import logo from './module/assets/hand.png';


const App = () => {

	const menuId = "main-menu";
	const node = useRef<HTMLDivElement>(null);
	useOnClickOutside(node, () => setOpen(false));
	const [open, setOpen] = React.useState(false);
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyles>
						<div>
							
							<nav>

								<ul>
									<img className="logo" src={logo}></img>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div ref={node}>
							<Burger aria-controls={menuId} />
							<Menu open={open} setOpen={setOpen} />
						</div>

						</GlobalStyles>

					</>
				</ThemeProvider>
				<Switch>

					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Home} />

				</Switch>
			</Suspense>
		</Router>
	)
};

export default App;
