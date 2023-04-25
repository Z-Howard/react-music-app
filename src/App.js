import * as React from 'react';
// import Layout from '@/pages/Layout/layout.jsx';
import { WrapperRoutes } from "@/router/index.jsx";
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<WrapperRoutes />
			</Router>
		</div>
	);
}

export default App;
