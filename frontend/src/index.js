import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from "./App";
import "antd/dist/antd.css";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducer'
const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  
  // <React.StrictMode>
    <Provider store={store}>  
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  
  // </React.StrictMode>,
   document.getElementById('root')
)

serviceWorker.unregister();
