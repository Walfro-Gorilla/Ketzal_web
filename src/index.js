import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => {

	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

export default Root

ReactDOM.render(<Root />, document.getElementById('viaje'));