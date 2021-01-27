/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";

ReactDOM.render(
	<Provider store={store.store}>
		<PersistGate persistor ={store.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
