import React, { Suspense, useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { theme } from './theme';
import { Burger, Menu } from 'module/components';
import { About, Home } from 'module/pages';



const App = () => {

	const node = useRef<HTMLDivElement>(null);
	useOnClickOutside(node, () => setOpen(false));
	const [open, setOpen] = React.useState(false);
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyles />
						<nav>
							<div ref={node}>
								<Burger open={open} setOpen={setOpen} />
								<Menu open={open} setOpen={setOpen} />
							</div>

							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
							</ul>
						</nav>
					</>
				</ThemeProvider>
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/" component={Home} />
				</Switch>
			</Suspense>
		</Router>
	)
};

export default App;
