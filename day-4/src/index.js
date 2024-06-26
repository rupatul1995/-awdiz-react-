import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import MyContextProvider from './context/auth.context';
import MyCounterContextProvider from './15-06-24/Counter.Context';
import ThemeContextProvider from './18-06-24/theme.context';
import { Provider } from 'react-redux';
import store from './20-06-24/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < MyCounterContextProvider>
  <ThemeContextProvider>
  <MyContextProvider>
 <BrowserRouter>
 <Provider store={store}>
  <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    <App />
    </Provider>,
 </BrowserRouter>
 </MyContextProvider>
 </ThemeContextProvider>
 </MyCounterContextProvider>
);

