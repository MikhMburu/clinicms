import React from "react";
import {render} from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";
import store from "./store";

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </Provider>,document.getElementById("root")
);
