import React from 'react';
import Dashboard from './pages/dashboard/dashboard';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './redux/reducers/index';
import './App.css';

const store = createStore(RootReducer);

function App() {
	return (
		<Provider store={store}>
			<Dashboard />
		</Provider>
	);
}

export default App;
