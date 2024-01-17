import React from 'react';
import { Outlet } from 'react-router-dom';
import './stylesheets/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
