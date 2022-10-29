import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CarritoContextProvider } from './context/carritoContext';
import { UserContextProvider } from './context/userContext';

const Root = () => {

	return (
		<UserContextProvider>
			<CarritoContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</CarritoContextProvider>
		</UserContextProvider >
	)
}

export default Root


ReactDOM.render(<Root />, document.getElementById('viaje'));