import React from "react"
import { render } from "react-dom"

import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import "./index.css";
import App from "./components/App"
import reducer from "./reducers"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
