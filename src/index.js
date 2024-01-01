import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import {RouterProvider} from 'react-router-dom'
import router from "./router";


const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} >
    {/* <App /> */}
    </RouterProvider>
  </Provider>
);
