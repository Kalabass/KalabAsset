import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CustomProvider } from 'rsuite';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomProvider>
			<App />
			<ToastContainer />
		</CustomProvider>
	</React.StrictMode>
);
