import React from 'react';
import Routes from './common/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './component/redux/store';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Routes />
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
